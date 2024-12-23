import React from 'react';
import styles from './CategoryItem.module.scss';
import { Checkbox } from '@igds/react'

const CategoryItem = ({ text, checked }: { text: string, checked: boolean }) => {
  return <Checkbox labeltext={text} checked={checked} className={styles.categoryStyle}></Checkbox>
};

export default CategoryItem;
