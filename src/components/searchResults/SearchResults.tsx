import React from "react";
import { Card, Typography } from "@mui/material";
import styles from './SearchResults.module.scss'

const SearchResults = () => {
    return (
        <Card className={styles.resultsContainer}>
            <Typography>
<text>מוצגים 20 פרטים עבור “קסדה לאופניים חשמליים”</text>
            </Typography>
        </Card>
    )
};

export default SearchResults;