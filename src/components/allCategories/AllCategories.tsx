import React, { useTransition } from 'react';
import styles from './AllCategories.module.scss';
import Title from '../title/Title';
import { useTranslation } from 'react-i18next';
import CharCategories from '../charCategories/CharCategories';
import { Typography } from '@mui/material';
import { useProductContext } from '../../context/DataProvider';
import { Product } from '../../types/productTree';


const AllCategories = () => {
  const { t } = useTranslation();
  function generateAlphabet(language: string): string[] {
    const languageAlphabets: { [key: string]: RegExp } = {
      en: /[A-Z]/g, // English (Capital letters only)
      he: /[\u05D0-\u05EA]/g, // Hebrew (Letters from א to ת)
      ru: /[\u0400-\u04FF]/g, // Russian (Cyrillic characters)
      ar: /[\u0621-\u064A]/g, // Arabic (Letters from ا to ي)
    };

    const alphabetRegex = languageAlphabets[language] || languageAlphabets.he;
    const alphabet: string[] = [];

    switch (language) {
      case 'he':
        for (let i = 0x05D0; i <= 0x05EA; i++) {
          const char = String.fromCharCode(i);
          if (char.match(alphabetRegex)) {
            alphabet.push(char);
          }
        }
        break;

      case 'en':
        for (let i = 0x0041; i <= 0x005A; i++) {
          const char = String.fromCharCode(i);
          if (char.match(alphabetRegex)) {
            alphabet.push(char);
          }
        }
        break;

      case 'ar':
        for (let i = 0x0621; i <= 0x064A; i++) {
          const char = String.fromCharCode(i);
          if (char.match(alphabetRegex)) {
            alphabet.push(char);
          }
        }
        break;

      default:
        for (let i = 32; i < 255; i++) {
          const char = String.fromCharCode(i);
          if (char.match(alphabetRegex)) {
            alphabet.push(char);
          }
        }
    }

    return alphabet;
  }
  function getLetterCategories(products: Product[], letter: string) {
    if (!(!letter || typeof letter !== "string" || letter.length !== 1)) {
      const filtered = [
        ...new Set(
          products.filter(product =>
            product.branch && product.branch!.startsWith(letter))
            .map(product => product.branch)
        )];
      const uniqueCategories = new Set<string | null>();
      return filtered.filter((category) => {
        if (!uniqueCategories.has(category)) {
          uniqueCategories.add(category);
          return true;
        }
        return false;
      });
    }
  }

  const { i18n } = useTranslation();
  const { products } = useProductContext();
  const alphabet: string[] = generateAlphabet(i18n.language);
  return (
    <>
      <Typography className={styles.allCategoriesTitle}>
        {t('searchByCategory')}
      </Typography>
      <div className={styles.gridContainer}>
        {alphabet.map((letter: string, index: number) => {
          // Dynamically filter products based on the letter
          const letterCategories = getLetterCategories(products, letter);
          if (letterCategories && letterCategories?.length > 0)
            return (
              <div key={index} className={styles.gridItem}>
                <CharCategories letter={letter} letterCategories={letterCategories} />
              </div>
            );
        })}
      </div>
    </>
  );

};

export default AllCategories;
