import styles from './Style.module.css';

function FooterBanner() {
  return (
    <div className="section w-full sm:mt-30 bg-[#f5f19c]">
      <div className="max-w-7xl mx-auto topfoot pt-16 pb-16 sm:flex items-center justify-between">
        <div className="left sm:w-1/2 px-8 sm:px-8">
          <div className="first order-1 font-[SansitaReg] text-[5vh] leading-[6vh] sm:text-[4.0rem] w-1/3 sm:leading-[5rem] sm:mb-10">
            <h2>
              Birlik Qazaq Studentter Birlesrigi
            </h2>
          </div>
        </div>

        <div className="right order-2 sm:order-3 flex sm:w-1/2 items-center justify-between sm:px-10">
          <div className="rght1 sm:w-2/3 flex flex-col items-end px-8 mt-6">
            <h3 className="text-[2.4vh] sm:text-[1.4rem] font-[Sansita] font-medium text-right">
              «Бірлік Қазақ Студенттер Бірлестігі» студенттер бірлестігі — бұл Қазақстандағы жастардың дамуға ұмтылысын, білім сапасын арттыруға деген талпынысын қолдайтын ұйым. Біздің мақсатымыз – студенттердің мүдделерін білдіретін, оларды өз армандарына жетуге шабыттандыратын және жан-жақты қолдау көрсететін орта қалыптастыру.
            </h3>
          </div>
          <div className="hidden sm:inline-block rght2 relative w-[150px] h-[150px] overflow-hidden;">
            <div className={`${styles.loopFoot}`}></div>
            <div className="icon w-[120px] h-[120px] rounded-full border-black border-[1px] px-10 py-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden">
              <div className="w-10 h-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2" />
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2" />
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
