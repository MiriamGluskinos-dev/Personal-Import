import React from 'react';
import styles from './CharCategories.module.scss';
import IconCategoryItem from '../iconCategoryItem/IconCategoryItem';
import { Product } from '../../types/productTree';

const CharCategories = ({ letter, letterCategories }: { letter: string , letterCategories:(string | null)[]}) => {
  return (
    <>
      <div className={styles.letterContainer}>
        <text className={styles.letterStyle}>{letter}</text>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
          <line x1="1" y1="1" x2="28" y2="1" stroke="#0068F5" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      {letterCategories!.map((category: (string | null)) => (
        <div className={styles.iconCategoryItemContainer} key={category}>
          <IconCategoryItem category={category} iconPath='/icons/וטרינריה ובעלי חיים.svg' />
        </div>
      ))}
    </>
  );
};

export default CharCategories;
