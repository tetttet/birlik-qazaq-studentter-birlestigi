import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import teamData from './Member.json'; 
import { useTranslation } from 'react-i18next';

const socialIcons = {
  facebook: <IoLogoFacebook className="w-6 h-6" />,
  twitter: <IoLogoTwitter className="w-6 h-6" />,
  instagram: <IoLogoInstagram className="w-6 h-6" />,
  linkedin: <IoLogoLinkedin className="w-6 h-6" />,
};

const ExecutiveTeam = () => {
    const { t } = useTranslation("news");
    const [teamMembers] = useState(teamData);

    return (
        <section className="bg-gray-100">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-black">
                    {t("ourteam.title")}
                </h1>
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-black">
                    {t("ourteam.desc")}
                </p>
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-black">
                    {t("ourteam.subdesc")}
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {teamMembers.map((teamMember, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-slate-400 rounded-xl"
                        >
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={teamMember.imgSrc} alt={teamMember.name} />
                            <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-black group-hover:text-black">
                                {teamMember.name}
                            </h1>
                            <p className="mt-2 text-gray-500 capitalize dark:text-black group-hover:text-black">{teamMember.role}</p>
                            <div className="flex mt-3 -mx-2">
                                {Object.entries(teamMember.socials).map(([platform, url], socialIndex) => (
                                    <Link
                                        to={url}
                                        key={socialIndex}
                                        className="mx-2 text-gray-600 dark:text-black hover:text-black dark:hover:text-black group-hover:text-black"
                                        aria-label={platform}
                                    >
                                        {socialIcons[platform]} 
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutiveTeam;
