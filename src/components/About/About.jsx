import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import { Link } from "react-router-dom";

import Image from "../../assets/about/about1.jpg";

const About = () => {
    const { t } = useTranslation(); // Используем t для перевода

    return (
        <div className={styles.aboutUs}>
            <div className={styles.about}>
                <img src={Image} alt="About us" className={styles.pic} />
                <div className={styles.text}>
                    <h3>Birlik <span>Q</span>azaq Jastary</h3>
                    <h5>
                        {t("about.heading1")} <span>{t("about.heading2")}</span>
                    </h5>
                    <p>
                        {t("about.description")}
                    </p>
                    <div className={styles.data}>
                        <Link to="" className={styles.aboutBtn}>
                            {t("about.button")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
