import React from 'react';
import styles from './CharCategories.module.scss';
import { Checkbox } from '@igds/react'
import IconCategoryItem from '../iconCategoryItem/IconCategoryItem';

const CharCategories = ({ letter, letterItems }: { letter: string, letterItems: string[] }) => {
  return (
    <>
      <div className={styles.letterContainer}>
        <text className={styles.letterStyle}>{letter}</text>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
          <line x1="1" y1="1" x2="28" y2="1" stroke="#0068F5" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      {letterItems.map((letterItem: string) => (
        <div className={styles.iconCategoryItemContainer} key={letterItem}>
          <IconCategoryItem text={letterItem} iconPath='/icons/וטרינריה ובעלי חיים.svg' />
        </div>
      ))}
    </>
  );
};

export default CharCategories;
