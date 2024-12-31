import React from "react";
import { Card, Typography } from "@mui/material";
import styles from './SearchResults.module.scss'
import { Product } from "../../types/productTree";
import { useTranslation } from "react-i18next";

const SearchResults = ({ results, querySearch }: { results: Product[], querySearch: string }) => {
    const { t } = useTranslation();
    const resultsCount = results.length;
    console.log(t('searchResultsTitle', { resultsCount, querySearch }));
    return (
        <Card className={styles.resultsContainer}>
            <Typography className={styles.titleContainerStyle}>
                <text className={styles.titleStyle}>{t('searchResultsTitle', { resultsCount, querySearch })}</text>
            </Typography>
            <br></br>
            <Typography className={styles.resultsContainerStyle}>
                {results.map((product) => (
                    <div style={{ display: 'flex', gap: '4px' }}>
                    <text className={styles.resultsBoldStyle} >{product.name}</text><text className={styles.resultsStyle}> / {product.branch}</text>
                </div>
                ))}
            </Typography>
        </Card>
    )
};

export default SearchResults;