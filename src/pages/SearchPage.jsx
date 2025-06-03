import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { getGeminiAnswers } from '../utils/info'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function SearchPage() {
  const query = useQuery().get('q')
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) return

    setLoading(true)
    getGeminiAnswers(query)
      .then(setAnswers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [query])

  return (
    <>
      <Header />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-medium mb-4">
          Результаты поиска по запросу: <span className='font-bold'>{query ? query : 'Не указан запрос'}</span>
        </h1>

        {loading && <p className="text-blue-500">
          Сервер обрабатывает ваш запрос, пожалуйста, подождите...
        </p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <ul className="space-y-3">
          {answers.map((answer, index) => (
            <li key={index} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
              {answer}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}
