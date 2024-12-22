import React from "react";
import Title from "../components/title/Title";
import Search from "../components/search/Search";
import PageLink from "../components/pageLink/PageLink";
import styles from './SearchPage.module.scss';
import { useTranslation } from "react-i18next";

export default function SearchPage() {
    const {t} = useTranslation();
    return (
        <div className={styles.backgroundImage}>search page
            <Title text={t('personalImportTitle')}/>
            <Search/>
            <PageLink/>
        </div>
    )
}