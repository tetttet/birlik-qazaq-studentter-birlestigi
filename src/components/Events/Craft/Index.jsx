
import Card from "../Card";
import Button from "../Button";
import { useRef, useEffect, useState } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4, } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Craft() {

    // const [isMobile, setIsMobile] = useState(false);
    const container = useRef(null);
    const textRef = useRef();

    // useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth <= 768);
    //     };

    //     // Attach the event listener
    //     window.addEventListener("resize", handleResize);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   }, [isMobile]);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".texthead")
        const characters = para.textContent.split("")
        characters.forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;
        gsap.set('.texthead span', { display: 'inline-block' });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".ltext",
                start: "top 100%",
                end: "bottom 50%",
                scrub: .5,

            }
        });
        tl.from('.texthead span', {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: .1,

        })
    }, []);

    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cards",
                    start: "top 10%",
                    scrub: 1,
                }
            });
            tl.fromTo('.card', {
                y: 600,
                scale: .9,
            }, {
                y: 0,
                scale: 1.1,
                duration: .5,
                ease: Power4,
                transformOrigin: "bottom 50% -50",
            });
        })
    }, container);


    return (
        <div
            data-color="cyan"
            className="craft section w-full sm:flex gap-x-40 justify-between 
          items-center px-8 py-8 sm:px-10 relative "
        >
            <div className="ltext sm:sticky sm:top-[10%] left-0 sm:w-1/2 ">
                <p
                    className="ptag font-[Sansita] text-[2.6vh] sm:text-[2.9vh] 
                font-medium leading-[4.4vh] sm:leading-[4.2vh] "
                >
                    Birlik Qazaq Studentter Birlestigi - это волонтёрская организация,
                    которая объединяет студентов и выпускников казахских университетов в
                    поддержку казахского языка и культуры. Мы стремимся создать сообщество,
                    где молодые люди могут обмениваться знаниями, опытом и ресурсами,
                    чтобы продвигать казахский язык и культуру в образовательной среде и
                    за её пределами.
                </p>
                {/* button */}
                <br />
                <Button bgColor="bg-none" text="НАШИ КОНТАКТЫ" />
            </div>
            <div
                ref={container}
                className="right cards sm:w-1/2 flex items-center justify-center">
                <Card />
            </div>
        </div>
    )
}

export default Craft



