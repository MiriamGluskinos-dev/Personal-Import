import React from 'react';
import styles from './SearchResultsCategories.module.scss';
import CategoryItem from '../categoryItem/CategoryItem';
import { useTranslation } from 'react-i18next';

const SearchResultsCategories = () => {
  const categories: string[] = ['apple', 'banana', 'cherry'];
  const { t } = useTranslation();

  return (
    <div className={styles.categoriesContainer}>
      <text className={styles.categoriesTitle}>{t('categoriesTitle')}</text>
      {
        categories.map((category) => (
          <CategoryItem text={category} checked={false} />

        ))
      }
    </div>
  );
};

export default SearchResultsCategories;
