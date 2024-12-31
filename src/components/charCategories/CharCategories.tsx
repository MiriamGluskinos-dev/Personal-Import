import React from 'react';
import styles from './CharCategories.module.scss';
import { Checkbox } from '@igds/react'
import IconCategoryItem from '../iconCategoryItem/IconCategoryItem';
import { ProductsProvider, useProductContext } from '../../context/DataProvider';
import { Product } from '../../types/productTree';

function getProductsByCategoryLetter(products: Product[] ,letter: string) {
  if (!letter || typeof letter !== "string" || letter.length !== 1) {
    throw new Error("Please provide a single letter as input.");
  }
  const filtered = products.filter(product =>
    product.category && product.category!.startsWith(letter)
  );
  const uniqueCategories = new Set<string | null>();
    return filtered.filter((product) => {
      if (!uniqueCategories.has(product.category)) {
        uniqueCategories.add(product.category);
        return true;
      }
      return false;
    });
}
const CharCategories = ({ letter }: { letter: string }) => {
  const { products } = useProductContext();
  const charProducts = getProductsByCategoryLetter(products ,letter);
  return (
    <>
      <div className={styles.letterContainer}>
        <text className={styles.letterStyle}>{letter}</text>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
          <line x1="1" y1="1" x2="28" y2="1" stroke="#0068F5" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      {charProducts.map((product: Product) => (
        <div className={styles.iconCategoryItemContainer} key={product.id}>
          <IconCategoryItem text={product.category} iconPath='/icons/וטרינריה ובעלי חיים.svg' />
        </div>
      ))}
    </>
  );
};

export default CharCategories;
