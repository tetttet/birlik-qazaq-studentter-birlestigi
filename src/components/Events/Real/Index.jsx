
import img1 from '../../../assets/about/about1.jpg'
import img2 from '../../../assets/about/2.jpg'
import img3 from '../../../assets/about/3.jpg'
import img4 from '../../../assets/about/4.jpg'
import img5 from '../../../assets/about/5.jpg'
import icon1 from '../../../assets/about/6.jpg';
import icon2 from '../../../assets/about/5.jpg';
import icon3 from '../../../assets/about/about1.jpg';
import img6 from '../../../assets/about/okan.png'
import img7 from '../../../assets/about/province.png'
import img8 from '../../../assets/about/qazaq.png'
import img9 from '../../../assets/about/sign.jpg'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {

    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );


  return (
    <div  
        data-color="salmon" 
        ref={container} 
        className="real section sm:w-full  px-8 sm:px-8 mt-32"
    >
      <div 
        className="cont h-[400vh] relative"
    >
        <div  
            className="slides w-full h-[130vh] overflow-hidden
             sticky top-0 left-0 flex"
        >
            {/* 1st slide */}
            <div 
                className="slide w-full flex sm:flex items-center 
                justify-center h-screen flex-shrink-0 "
            >
                
                <div 
                    className="text1 font-[SansitaReg] text-[7vh] leading-[8vh]
                    sm:text-[12vh] sm:leading-[14vh]"
                >
                    <h1 className="">
                        Birlik Qazaq,    
                    </h1>
                    <h1 className="">
                        Studentter Birlesrigi
                    </h1>
                </div>
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5
                    top-1/2 sm:-translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            {/* 2nd slide */}
            <div   
                className="slide w-full h-screen sm:flex flex items-center 
                justify-center flex-shrink-0 relative "
            >
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] 
                    top-10 -translate-y-1/2 right-1/6"
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                        className='font-[Sansita] sm:w-1/3 text-left font-semibold 
                        tracking-tight text-[2.2vh] sm:absolute top-0 left-0 z-[3]  -translate-y-2/3 
                        sm:-translate-y-1/2 -translate-x-1/3'
                    >
                        Наша организация занимается поддержкой студентов, помогая им в учёбе.
                    </h3>
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-white '>
                       Волонтёрская организация
                    </h1>
                    <h3 className=' text-[2vh] sm:text-[5vh] font-semibold sm:leading-[7vh]'>
                        Присоединяйтесь к нашей к Birlik Qazaq Studentter Birlesrigi
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[12vh] sm:w-[20vh] sm:h-[20vh] top-4/5 bottom-[10vh]
                    sm:top-2/3 sm:left-1/4 -translate-x-1/2"
                >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] first-letter: 
                    sm:bottom-0 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2
                    translate-y-[20vh]"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2 
                    sm:-translate-y-1/2 sm:translate-x-1/2
                    sm:right-0 "
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            
            {/* 3rd slide */}
            <div 
                className="slide w-full h-screen flex sm:flex items-center justify-center 
                flex-shrink-0  relative"
            >
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh]  
                    sm:top-20 sm:-translate-x-1/5 bottom-[20vh] right-[20vh]
                    sm:-translate-y-1/2 sm:right-1/6"
                >
                    <img 
                        src={icon2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                        className='font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight 
                        text-[2vh]
                        sm:text-[2.5vh] absolute sm:top-0 sm:left-0 -translate-x-1/2 -translate-y-[30vh] z-[3] 
                        sm:-translate-y-1/2 sm:-translate-x-1/3'
                    >
                        В Birlik Qazaq Jastary мы верим, что сила сообщества и единства способна изменить жизнь каждого из нас.
                    </h3>
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-white'>
                        Birlik Qazaq Jastary
                    </h1>
                    <h3 className='text-[3.5vh] whitespace-nowrap sm:text-[6vh] font-semibold sm:leading-[6vh]'>
                        Поддержка казахских студентов в Турции
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[30vh] sm:w-[60vh] sm:h-[60vh] bottom-10 right-2/4 
                    translate-y-1/3 -translate-x-1/5"
                >
                    <img 
                        src={icon1}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] sm:w-[50vh] sm:h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/3
                    right-0 "
                >
                    <img 
                        src={icon3}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>

            {/* 4th slide */}
            <div 
                className="slide w-full h-screen flex  sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
                >
                    <img 
                        src={img6}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h1 className=' font-semibold text-[10vh] sm:text-[20vh] leading-none text-white'>
                        Помощь и поддержка
                    </h1>
                    <h3 className='text-[3.1vh] leading-[3.4vh] sm:text-[6vh] font-semibold sm:leading-[8vh]'>
                        Студенчество - это время, когда каждый день учишься чему-то новому
                    </h3>    
                </div>
                <div 
                    className="image7 absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
                >
                    <img 
                        src={img7}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5
                    sm:translate-x-2/3  sm:right-0 "
                >
                    <img 
                        src={img9}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5
                    -translate-x-1/3  right-1/4 "
                >
                    <img 
                        src={img8}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Real;
