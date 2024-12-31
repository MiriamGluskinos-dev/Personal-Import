import React, { useEffect, useState } from "react";
import Title from "../components/title/Title";
import Search from "../components/search/Search";
import PageLink from "../components/pageLink/PageLink";
import styles from './SearchPage.module.scss';
import { useTranslation } from "react-i18next";
import CategoriesArea from "../components/categoriesArea/CategoriesArea";
import AllCategories from "../components/allCategories/AllCategories";
import { useProductContext } from '../context/DataProvider';
import SearchResults from "../components/searchResults/SearchResults";

export default function SearchPage() {
    const { t } = useTranslation();
    const [isLinkClicked, setIsLinkClicked] = useState(false);

    const handleLinkClick = () => {
        setIsLinkClicked(true);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const { searchProducts } = useProductContext();
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300); // 300ms debounce

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);
    const results = searchProducts(debouncedQuery);


    return (
        <div className={styles.backgroundImage}>
            {
                !isLinkClicked && (
                    <div>
                        <Title title={t('personalImportTitle')} subTitle={t('personalImportSubTitle')} />
                        <Search />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search products..."
                        />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <CategoriesArea />
                            {/* <SearchResults results={results} querySearch={searchQuery} /> */}
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
