import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from "../../../assets/news/1.png"
import img2 from "../../../assets/news/2.png"
import img3 from "../../../assets/news/3.png"
import img4 from "../../../assets/news/4.PNG"
import img5 from "../../../assets/news/5.JPG"
import img6 from "../../../assets/news/6.JPG"
import img7 from "../../../assets/news/7.JPG"
import img8 from "../../../assets/news/8.JPG"
import img9 from "../../../assets/news/9.JPG"
import img10 from "../../../assets/news/10.JPG"

import img11 from "../../../assets/news/11.jpg"
import img12 from "../../../assets/news/12.jpg"
import img13 from "../../../assets/news/13.jpg"
import img14 from "../../../assets/news/14.jpg"
import img15 from "../../../assets/news/15.jpg"


const NewsSlider = () => {
    const { t } = useTranslation("news");

    const newsData = [
        { id: 1, img: img1, category: t("news"), date: "", title: t("text") },
        { id: 2, img: img2, category: t("news"), date: "", title: t("text") },
        { id: 3, img: img3, category: t("news"), date: "", title: t("text") },
        { id: 4, img: img15, category: t("news"), date: "", title: t("text") },
    ];

    const smallNewsData = [
        { id: 4, img: img4, category: t("firenews"), date: "", title: t("shortnews") },
        { id: 5, img: img5, category: t("allnews"), date: "", title: t("shortnews") },
        { id: 6, img: img6, category: t("firenews"), date: "", title: t("shortnews") },
        { id: 7, img: img7, category: t("news"), date: "", title: t("shortnews") },
    ];

    const newsItems = [
        { img: img8, category: t("firenews"), date: '', title: t("interestings") },
        { img: img9, category: t("allnews"), date: '27 February 2020', title: t("interestings") },
        { img: img10, category: t("firenews"), date: '', title: t("interestings") },
        { img: img13, category: t("news"), date: '16 January 2022', title: t("interestings") },
        { img: img14, category: t("allnews"), date: '', title: t("interestings") }
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
                                            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase">{news.category}</span>
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
                                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase">{news.category}</span>
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
                        <div className="w-44 text-white bg-blue-600 text-dark text-center font-medium py-2">
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
                                <div className="relative overflow-hidden h-[300px]">
                                    <img className="w-full h-full object-cover" src={news.img} alt="news" />
                                    <div className="absolute bottom-0 p-3 w-full">
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

            <div className="container mx-auto px-4 py-8">   
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* News Detail */}
                            <div className="relative mb-3">
                                <img
                                    className="img-fluid w-full object-cover"
                                    src={img11}
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
                                        {t("block.subdesc")}
                                    </p>
                                    <br />
                                    <img
                                        className="img-fluid w-1/2 float-left mr-4 mb-2"
                                        src={img12}
                                        alt="news 1"
                                    />

                                    <p>
                                        {t("block.text1")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("block.text2")}
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