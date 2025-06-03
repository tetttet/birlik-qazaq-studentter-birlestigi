import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp, IoMdSearch } from 'react-icons/io';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import styles from './HeaderBar.module.css';

const HeaderBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const { t } = useTranslation();

    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className={styles['headerbar']}>
            <div className={styles['headerbar-breadcrumb-wrapper']}>
                <div className={styles['headerbar-breadcrumb']}>
                    Turkey &gt; <Link to="/">{t('header.home')}</Link> &gt; <Link to="#">{t('header.goAbroad')}</Link> &gt; {t('header.volunteering')}
                </div>
            </div>

            <div className={styles['headerbar-header']}>
                <div className={styles['headerbar-logo']}>
                    <div>Birlik</div>
                    <div>Qazaq</div>
                    <div>Studentter</div>
                    <div>Birlestigi</div>
                </div>

                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t('header.searchPlaceholder')}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-[300px] sm:w-[400px] group-hover:w-[500px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-1 focus:border-primary h-[45px]"
                    />
                    <IoMdSearch
                        onClick={handleSearch}
                        className="text-black-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 cursor-pointer"
                    />
                </div>
                <div className={styles['headerbar-questions']}>{t('header.questions')}</div>
            </div>

            <div className={styles['headerbar-navMenu']}>
                {/* About Us */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('aboutUs')}>
                    <Link to="/about">{t('header.aboutUs')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'aboutUs' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'aboutUs' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="/about">{t('header.ourMission')}</Link>
                            <Link to="/about">{t('header.history')}</Link>
                            <Link to="/about">{t('header.team')}</Link>
                        </div>
                    )}
                </div>

                {/* Get Involved */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('getInvolved')}>
                    <Link to="/connection">{t('header.getInvolved')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'getInvolved' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'getInvolved' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="/connection">{t('header.volunteer')}</Link>
                            <Link to="/connection">{t('header.donate')}</Link>
                            <Link to="/connection">{t('header.partner')}</Link>
                        </div>
                    )}
                </div>

                {/* News */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('news')}>
                    <Link to="/news">{t('header.news')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'news' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'news' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="/news">{t('header.latestUpdates')}</Link>
                            <Link to="/news">{t('header.pressReleases')}</Link>
                        </div>
                    )}
                </div>

                {/* Events */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('events')}>
                    <Link to="/events">{t('header.events')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'events' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'events' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="/events">{t('header.upcomingEvents')}</Link>
                            <Link to="/events">{t('header.pastEvents')}</Link>
                        </div>
                    )}
                </div>

                {/* Stories */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('stories')}>
                    <Link to="#">{t('header.stories')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'stories' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'stories' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.successStories')}</Link>
                            <Link to="/raider">{t('header.personalExperiences')}</Link>
                        </div>
                    )}
                </div>

                {/* Accounts */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('accounts')}>
                    <Link to="#">{t('header.accounts')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'accounts' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'accounts' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="#">{t('header.createAccount')}</Link>
                            <Link to="#">{t('header.login')}</Link>
                            <Link to="#">{t('header.forgotPassword')}</Link>
                        </div>
                    )}
                </div>

                {/* Contact */}
                <div className={styles['headerbar-navItem']} onClick={() => toggleDropdown('contact')}>
                    <Link to="/contact">{t('header.contact')}</Link>
                    <span className={styles['headerbar-dropdownIcon']}>
                        {openDropdown === 'contact' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    {openDropdown === 'contact' && (
                        <div className={styles['headerbar-dropdown']}>
                            <Link to="/contact">{t('header.contactUs')}</Link>
                            <Link to="/contact">{t('header.support')}</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
