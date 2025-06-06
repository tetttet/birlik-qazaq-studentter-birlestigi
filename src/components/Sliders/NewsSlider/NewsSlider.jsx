import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import ProjectGrid from "../Blog/ProjectGrid";


const NewsSlider = () => {
    const { t } = useTranslation("news");

    const newsData = [
        {
            id: 1, img: "/img/IMG_3362.JPG", category: t("news"), date: "2025 жылғы 27 мамырда", title: `Қазақстанның Түркиядағы Елшісі Еркебұлан Сапиев пен Қазақстанның Анталиядағы Бас консулы Қуат Канафеевтің Алания қаласына жасаған жұмыс сапары барысында Алааддин Кейкубат университетінің ректоры Кенан Ахмет Түрікдоғанмен кездесті.
Кездесу кезінде Қазақстан мен Түркия арасындағы білім және ғылым салаларындағы ынтымақтастықты одан әрі нығайту мәселелері сөз болды.` },
        { id: 2, img: "/img/IMG_3363.JPG", category: t("news"), date: "10 март 2024жылы", title: `Ыстанбұл қаласында Самсун-Орду қыздар командасы 8 Наурыз әйелдер күніне орай ұйымдастырылған волейбол жарысында` },
        { id: 3, img: "/img/IMG_3364.JPG", category: t("news"), date: "2025 жылы", title: `Самсун қаласынды 2025 жылы "Kazakistan tanıtım gecesi" іс-шарасынан естелік сурет.` },
        { id: 4, img: "/img/IMG_3365.jpg", category: t("news"), date: "02.12.2024", title: `Кырларели қазақ жастары мен Текирдак қазақ жастары бірлесіп, 02.12.2024 күні алдыға ұйымдастырушы қазақтарды сайлап, болашақ іс-шараларды жоспарладық.` },
    ];

    const smallNewsData = [
        { id: 4, img: "/img/photo_2025-06-04.jpeg", category: t("firenews"), date: "2022", title: `2022 жыл Орду каласында өткізілген футбол турниріне қатысқан Сивас жастары` },
        { id: 5, img: "/img/IMG_3367.JPG", category: t("allnews"), date: "2025 жылғы 3 мамырда", title: `Трабзон қаласындағы Karadeniz Teknik Üniversitesi университетінде білім алатын Трабзон студенттеріне арнайы экскурсия ұйымдастырылды.` },
        { id: 6, img: "/img/IMG_3370.JPG", category: t("firenews"), date: "16 желтоқсан", title: `Мугла қаласында алғаш рет қазақтар комьюнитисі құрылып, 16 желтоқсан – Тәуелсіздік күніне орай алғашқы іс-шарамыз өткізілді.` },
        { id: 7, img: "/img/IMG_3373.JPG", category: t("news"), date: "2024 жылғы 13 желтоқсанда", title: `Кыршехир қаласында 16 желтоқсан – Қазақстан Республикасының Тәуелсіздік күніне орай ұйымдастырылған “Kazakistan Kültür Buluşması” атты мәдени іс-шара өтті.` },
    ];

    const newsItems = [
        { img: "/img/IMG_3374.JPG", category: t("firenews"), date: '2025 жылғы 21–25 мамыр', title: `Нигде қаласында Халықаралық Түркі әлемін зерттеу симпозиумы өтті. Бұл ғылыми жиын түркі халықтарының тарихы, тілі, мәдениеті мен өркениетін зерттеуге арналған маңызды алаң болды. Симпозиум барысында түрлі елдерден келген ғалымдар мен зерттеушілер өз баяндамаларын ұсынып, түркі әлемінің болашағы мен ынтымақтастығы жөнінде пікір алмасты.` },
        { img: "/img/IMG_3376.JPG", category: t("allnews"), date: '2024 жылы', title: `Коджаэли қаласында жаңа келген студенттерді қарсы алу мақсатында ұйымдастырылған “BIRLIK WELCOME DAY”кеші өтті. Іс-шара достық пен ынтымақтастық атмосферасында өтіп, қатысушылар бір-бірімен жақынырақ танысып, түрлі мәдени ойындар мен өнер бағдарламаларын тамашалады.` },
        { img: "/img/IMG_3379.JPG", category: t("news"), date: '2024 жылы', title: `Анкара қаласында өткен футбол турниріне Кютахья жастары қатысып, өздерін жақсы деңгейде көрсетті. Спорттық жарыс арқылы олар достық пен бірлікті нығайтып, өз қаласының намысын қорғады.` },
        { img: "/img/IMG_3381.JPG", category: t("allnews"), date: '2024 жылдың 12 маусымында', title: `Мерсин университетінің қазақ студенттері университет ректоры, Қазақстанның елшісі, бас консулы және құрметті консулының қатысуымен кездесу өткізді. Бұл кездесуде студенттер өз ойларын білдіріп, тәжірибе алмасты және алдағы жоспарлар туралы пікірлесу мүмкіндігіне ие болды.` },
        { img: "/img/IMG_3378.JPG", category: t("firenews"), date: '28 қазан 2023 жылы', title: `Аксарай университетінде «Іһlara gezisi» атты іс-шара өткізілді. Студенттер мен қатысушылар табиғи сұлулықты тамашалап, аймақтың тарихи және мәдени байлықтары туралы мағлұмат алды.` },
    ];


    return (
        <>
            <div className="container mx-auto px-4 mt-5">
                <div className="grid lg:grid-cols-7 gap-4">
                    <div className="lg:col-span-4">
                        <Carousel showThumbs={false} infiniteLoop autoPlay>
                            {newsData.map((news) => (
                                <div key={news.id} className="relative h-[500px]">
                                    <img src={news.img} className="w-full h-full object-cover" alt="news" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="bg-blue-600 ct-new px-2 py-1 uppercase">{news.category}</span>
                                            <span className="text-sm">{news.date}</span>
                                        </div>
                                        <h2 className="text-xl font-bold uppercase">{news.title}</h2>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                        {smallNewsData.map((news) => (
                            <div key={news.id} className="relative h-[250px]">
                                <img src={news.img} className="w-full h-full object-cover" alt="news" />
                                <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="bg-blue-600 ct-new text-xs font-bold px-2 py-1 uppercase">{news.category}</span>
                                        <span className="text-sm">{news.date}</span>
                                    </div>
                                    <h6 className="text-sm font-semibold uppercase">{news.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full bg-dark py-3 mb-3">
                <div className="container mx-auto">
                    <div className="flex items-center bg-dark">
                        <div className="w-44 text-white bg-blue-600 text-white text-center font-medium py-2">
                            {t("breakingnews")}
                        </div>
                        <div className="flex items-center ml-3 overflow-hidden" style={{ width: 'calc(100% - 170px)', paddingRight: '90px' }}>
                            <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                                <p className="text-black uppercase font-semibold" >
                                    {t("newslist.news1")}
                                </p>
                            </div>
                            <div className="whitespace-nowrap overflow-hidden overflow-ellipsis ml-4">
                                <p className="text-black uppercase font-semibold">
                                    {t("newslist.news2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full pt-5 mb-3">
                <div className="container mx-auto">
                    <div className="mb-4">
                        <h4 className="m-0 text-uppercase font-bold">Featured News</h4>
                    </div>
                    <Swiper spaceBetween={10} slidesPerView={4}>
                        {newsItems.map((news, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative overflow-hidden h-[600px]">
                                    <img className="w-full h-full object-cover" src={news.img} alt="news" />
                                    <div className="absolute bottom-0 p-3 w-full bg-black opacity-75">
                                        <div className="mb-2">
                                            <p className="bg-primary text-white uppercase font-semibold p-2 mr-2" >{news.category}</p>
                                            <p className="text-white" ><small>{news.date}</small></p>
                                        </div>
                                        <p className="text-white uppercase font-semibold" >{news.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            <ProjectGrid />


            <div className="container mx-auto px-4 py-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* News Detail */}
                            <div className="relative mb-3">
                                <img
                                    className="img-fluid w-full object-cover"
                                    src={"/img/2.JPG"}
                                    alt="news"
                                />
                                <div className="bg-white border-t-0 p-4">
                                    <h1 className="mb-3 text-secondary text-uppercase font-bold">
                                        {t("block.title")}
                                    </h1>
                                    <p>
                                        {t("block.desc")}
                                    </p>
                                    <br />
                                    <p>
                                        Мұнда
                                    </p>
                                    <ul>
                                        <li>
                                            •Ұйымымыздың жаңа бастамалары
                                        </li>
                                        <li>
                                            •Өткізілген іс-шаралар туралы есептер
                                        </li>
                                        <li>
                                            •Алдағы жоспарлар
                                        </li>
                                    </ul>
                                    <br />
                                    <img
                                        className="img-fluid w-1/2 float-left mr-4 mb-2"
                                        src={"/img/123.jpeg"}
                                        alt="news 1"
                                    />

                                    <p>
                                        Қазақ студенттеріне пайдалы хабарламалар жарияланады.
                                    </p>
                                    <br />
                                    <p>
                                        Біздің мақсатымыз — әрбір студентке қажетті ақпаратты қолжетімді ету, белсенді болуға мүмкіндік беру және сіздің шетелдегі өміріңізді жеңіл әрі мағыналы ету. Сондықтан осы беттегі жаңалықтарды тұрақты түрде қарап отыруды ұмытпаңыз.
                                    </p>
                                    <p>
                                        Біз үшін әр жаңалық — сізбен арадағы байланыстың көпірі. Қызықты жобалардан қалыс қалмаңыз!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default NewsSlider