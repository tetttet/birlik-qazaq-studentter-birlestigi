import React from 'react'
import { Link } from 'react-router-dom';

const BgPrimary = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
                className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width="200"
                        height="200"
                        x="50%"
                        y="-1"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth="0"
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
        </div>
    )
}

const Services = ({ services, title, subtitle }) => {
    return (
        <div className="py-10">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="md:text-5xl text-3xl font-semibold tracking-tight">
                    {title}
                </h2>
                <p className="md:w-1/2 mx-auto mt-6 text-xl font-medium text-gray-500 dark:text-gray-400">
                    {subtitle}
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16 container mx-auto">
                {services.map((service, index) => (
                    <div key={index} className={`p-7 rounded-xl ${service.bgColor} flex flex-col justify-between h-full`}>
                        <div>
                            <h3 className="text-xl font-semibold mb-7">{service.title}</h3>
                            <p className="font-medium leading-7 text-gray-700 mb-6 dark:text-gray-700">
                                {service.description}
                            </p>
                        </div>
                        <Link
                            to={service.link}
                            className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-300 hover:text-white transition-all duration-500 dark:hover:bg-purple-300 dark:hover:text-white"
                        >
                            Бастау
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="h-5 w-5 ms-3"
                            >
                                <path
                                    fill="currentColor"
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Element = ({ type, description }) => {
    return (
        <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <svg className="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                    </div>
                    <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                </div>
                <div className="text-slate-500 ml-14">
                    <span className="text-slate-900 font-bold">{type}</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                {description}
            </div>
        </div>
    );
}

const Step = ({ step }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg gap-4 p-4">
            <div className="w-[120px] h-[120px]  shadow-md rounded-xl p-4 flex justify-center items-center">
                {step.icon}
            </div>
            <div className=" shadow-sm rounded-md p-4 flex flex-col justify-between gap-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                <h1 className="font-bold text-xl pb-2">{step.title}</h1>
                <p>{step.description}</p>
            </div>
        </div>
    )
};

const VerticalTimeline = ({ timelineItems }) => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <BgPrimary />
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
                <div className="flex flex-col justify-center divide-y divide-slate-200 ">
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {timelineItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                            <path
                                                fillRule="nonzero"
                                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">{item.title}</div>
                                        </div>
                                        <div className="text-slate-500">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HeroSectionTextImg = ({ title, subtitle, pretitle, text, src }) => {
    return (
        <section className="sticky text-center px-4 sm:px-10 -mt-48 mb-12 sm:pt-24 pb-8">
            <h2 className="font-extrabold text-[#201515] text-3xl sm:text-4xl">
                <span className="block">{title}</span>
                <span className="bg-clip-text text-[#201515]">{subtitle}</span>
            </h2>

            <article className="max-w-7xl mx-auto mt-12 sm:px-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-center">
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl sm:text-2xl font-semibold text-[#201515]">
                            {pretitle}
                        </h3>
                        <p className="mt-4 text-gray-600">
                            {text}
                        </p>
                        <div className="flex justify-center lg:justify-start gap-3 mt-10">
                            <Link href="#" className="text-sm font-semibold text-black hover:text-blue-500">
                                Read more →
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <img
                            className="rounded-3xl object-cover w-full"
                            alt="hero"
                            src={src}
                        />
                    </div>
                </div>
            </article>
        </section>
    );
};

const FAQSection = ({ title, subtitle, faqs, readmore }) => {
    return (
        <div className="p-8">
            <div className="bg-white p-4 rounded-lg shadow-md py-8 mt-12">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">{title}</h4>
                <p className="text-center text-gray-600 text-sm mt-2">{subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="flex space-x-8 mt-8">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={faq.icon}></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-between">
                                <h4 className="text-xl font-bold text-gray-700">{faq.question}</h4>
                                <p className="text-gray-600 my-2">{faq.answer}</p>
                                <div className="mt-auto">
                                    <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline capitalize" title="Read More">
                                        {readmore}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const InteractiveSection = ({ title, subtitle, description, features, images }) => {
    return (
        <div className="relative max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative mt-10 lg:-mx-4 lg:mt-0 lg:col-start-1">
                    <div className="relative space-y-4">
                        <div className="flex items-end justify-center space-x-4 lg:justify-start">
                            {images.slice(0, 2).map(({ src, width, size }, index) => (
                                <img key={index} className={`rounded-lg shadow-lg ${size}`} width={width} src={src} alt={`Feature ${index + 1}`} />
                            ))}
                        </div>
                        <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                            {images.slice(2).map(({ src, width, size }, index) => (
                                <img key={index + 2} className={`rounded-lg shadow-lg ${size}`} width={width} src={src} alt={`Feature ${index + 3}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                    <p className="text-base font-semibold text-indigo-500 uppercase">{title}</p>
                    <h4 className="mt-2 text-2xl font-extrabold  sm:text-3xl">
                        {subtitle}
                    </h4>
                    <p className="mt-4 text-lg ">
                        {description}
                    </p>
                    <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                        {features.map((feature, index) => (
                            <li key={index} className="mt-6 lg:mt-0 flex flex-col">
                                <div className="flex items-center">
                                    <span className="flex items-center justify-center w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                                        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base text-indigo-500 font-bold">{feature.title}</span>
                                </div>
                                <span className="ml-10 text-black text-base">{feature.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const GridSection = ({ title, text, posts }) => {
    return (
        <section>
            <div className="bg-white sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{title}</h2>
                        <p className="mt-2 text-lg/8 text-gray-600">{text}</p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HeroRealEstate = ({ title, subtitle, description, image }) => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/80 sm:to-white/30"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        {title}
                        <strong className="block text-rose-700 sm:text-3xl">
                            {subtitle}
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="#"
                            className="block w-full sm:w-auto rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-none"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="#"
                            className="block w-full sm:w-auto rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-none"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ParagraphSection = ({ services, title, subtitle }) => {
    return (
        <div className="container flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900">{title}</h2>
            <p className="mt-2 mb-4 text-lg font-bold text-gray-500">{subtitle}</p>
            <div className="w-full">
                <div className="flex flex-wrap -mx-4">
                    {services.map((service, index) => (
                        <div key={index} className="w-full sm:w-1/2 px-4 mb-10">
                            <div className="relative h-full">
                                <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${service.bgColor} rounded-lg`}></span>
                                <div className={`relative h-full p-5 bg-white border-2 ${service.borderColor} rounded-lg`}>
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 text-lg font-bold text-gray-800">{service.title}</h3>
                                    </div>
                                    <p className="mb-2 text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ReturnButtonTop = () => {
    return (
        <Link to="/raider">
            <button
                className="fixed bottom-4 right-4 z-50 bg-slate-600 p-2 rounded-full shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </Link>
    );
}

export {
    Element,
    Services,
    BgPrimary,
    Step,
    VerticalTimeline,
    HeroSectionTextImg,
    FAQSection,
    InteractiveSection,
    GridSection,
    HeroRealEstate,
    ParagraphSection,
    ReturnButtonTop
}