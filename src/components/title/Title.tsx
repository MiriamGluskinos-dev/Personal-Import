import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Title.module.scss';

const Title = ({text}: {text:string}) => {
  const { t } = useTranslation();
  return <div className={styles.titleContainer}>
    <h1 className={styles.title}>{t(text)}</h1>
    <h2 className={styles.subTitle}>{t('personalImportSubTitle')}</h2>
  </div>
};

export default Title;
