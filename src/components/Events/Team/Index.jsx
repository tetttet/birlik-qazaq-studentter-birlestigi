import List from "../List"

function Team() {

  return (
    <div  data-color="white" className='team section font-[SansitaReg] py-20'>
      <div className="head1">
        <h1 className="text-5xl sm:text-6xl text-center tracking-tight">
          Біздің команда
        </h1>
      </div>
      <div className="list mt-10 w-full px-8">
        {/* //single list */}
        <List />
      </div>
    </div>
  )
}

export default Team
