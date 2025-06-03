import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReturnButtonTop } from './Component';

const GalleryItem = ({ src, alt, size }) => (
  <div className={`md:p-2 p-1 ${size}`}>
    <img
      alt={alt}
      className="w-full object-cover h-full object-center block"
      src={src}
    />
  </div>
);

const Gallery = () => {
  const images = [
    { src: "/assets/Turkey/turkey1.jpg", alt: "gallery 1", size: "w-1/2" },
    { src: "/assets/Turkey/turkey2.jpg", alt: "gallery 2", size: "w-1/2" },
    { src: "/assets/Turkey/turkey3.jpeg", alt: "gallery 3", size: "w-full" },
    { src: "/assets/Turkey/turkey4.jpeg", alt: "gallery 4", size: "w-full" },
    { src: "/assets/Turkey/turkey5.jpeg", alt: "gallery 5", size: "w-1/2" },
    { src: "/assets/Turkey/turkey6.jpeg", alt: "gallery 6", size: "w-1/2" }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            {images.slice(0, 3).map((image, index) => (
              <GalleryItem key={index} src={image.src} alt={image.alt} size={image.size} />
            ))}
          </div>
          <div className="flex flex-wrap w-1/2">
            {images.slice(3).map((image, index) => (
              <GalleryItem key={index + 3} src={image.src} alt={image.alt} size={image.size} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Introduction = () => {
  const { t } = useTranslation("raider");

  const introText = [
    { key: 'Inroduction.welcome', className: 'text-2xl font-semibold text-center mb-4' },
    { key: 'Inroduction.intro', className: 'mb-2 text-lg leading-relaxed' },
    { key: 'Inroduction.life', className: 'mb-2 text-lg leading-relaxed' },
    { key: 'Inroduction.citizen', className: 'mb-2 text-lg font-semibold' },
    { key: 'Inroduction.honor', className: 'mb-2 text-lg leading-relaxed' },
    { key: 'Inroduction.opportunity', className: 'mb-2 text-lg leading-relaxed' }
  ];

  return (
    <>
      <ReturnButtonTop />
      <div className="p-12 rounded-lg text-gray-700 mt-10">
        {introText.map((text, index) => (
          <p key={index} className={text.className}>
            {t(text.key)}
          </p>
        ))}
        <Gallery />
      </div>
    </>
  );
};

export default Introduction;
