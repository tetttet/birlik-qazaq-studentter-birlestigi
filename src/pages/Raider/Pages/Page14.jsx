import React from 'react'
import { BgPrimary, ReturnButtonTop } from './Component'

const Page14 = () => {
    return (
        <>
            <ReturnButtonTop />
            <BgPrimary />
            <h1 className="text-4xl mt-20 mb-10 font-semibold text-center">Заключение</h1>
            <div className="text-justify mt-4">
                <p className="mt-4 text-lg">
                    <span> Пребывание за границей</span> требует повышенной ответственности и внимательности. Соблюдение простых правил безопасности поможет избежать большинства неприятностей и сделать
                    Ваше пребывание за рубежом максимально безопасным и комфортным.
                </p>
                <p className="mt-4 text-lg">
                    <span> Надеемся</span>, что наши советы помогут Вам в этом. Всегда помните, что в случае возникновения проблем Вы всегда можете обратиться за помощью к сотрудникам компании "Бирлик".
                </p>
            </div>

        </>
    )
}

export default Page14