import React from 'react';
import styles from './GeneralCategories.module.scss';
import { Checkbox } from '@igds/react'
import CategoryItem from '../categoryItem/CategoryItem';
import { useTranslation } from 'react-i18next';

const GeneralCategories = () => {
  const categories: string[] = ['white', 'blue', 'red'];
  const { t } = useTranslation();

  return (
    <div className={styles.categoriesContainer}>
      <text className={styles.categoriesTitle}>{t('moreCategoriesTitle')}</text>
      {
        categories.map((category) => (
          <CategoryItem text={category} checked={false} />

        ))
      }
    </div>
  );
};

export default GeneralCategories;
