import React, { useState } from "react";
import Title from "../components/title/Title";
import Search from "../components/search/Search";
import PageLink from "../components/pageLink/PageLink";
import styles from './SearchPage.module.scss';
import { useTranslation } from "react-i18next";
import CategoriesArea from "../components/categoriesArea/CategoriesArea";
import AllCategories from "../components/allCategories/AllCategories";
import SearchResults from "../components/searchResults/SearchResults";
import { display } from "@mui/system";

export default function SearchPage() {
    const { t } = useTranslation();
    const [isLinkClicked, setIsLinkClicked] = useState(false);

    const handleLinkClick = () => {
        setIsLinkClicked(true);
    };

    return (
        <div className={styles.backgroundImage}>
            {
                !isLinkClicked && (
                    <div>
                        <Title title={t('personalImportTitle')} subTitle={t('personalImportSubTitle')} />
                        <Search />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <CategoriesArea />
                            <SearchResults />
                        </div>
                        <PageLink onClick={handleLinkClick} />
                    </div>
                )
            }

            {
                isLinkClicked && (
                    <AllCategories />
                )
            }
        </div>

    )
}
