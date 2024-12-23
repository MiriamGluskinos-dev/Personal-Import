import React from 'react';
import styles from './CategoriesArea.module.scss';
import { Checkbox } from '@igds/react'
import SearchResultsCategories from '../searchResultsCategories/SearchResultsCategories';
import GeneralCategories from '../generalCategories/GeneralCategories';
import PageLink from '../pageLink/PageLink';

const CategoriesArea = () => {
  return <div className={styles.categoriesAreaStyle}>
    <SearchResultsCategories></SearchResultsCategories>
    <GeneralCategories />
    <PageLink/>
  </div>
};

export default CategoriesArea;
