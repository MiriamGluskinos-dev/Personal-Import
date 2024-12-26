import React, { MouseEventHandler } from 'react';
import styles from './PageLink.module.scss';
import { useTranslation } from 'react-i18next';

const PageLink = ({ onClick } : { onClick: MouseEventHandler<HTMLAnchorElement> }) => {
  const { t } = useTranslation();
  return <div className={styles.linkContainer}>
    <a href='#' onClick={onClick} className={styles.linkStyle}>{t('goToAllCategories')}
      <img src='/icons/external-link hover.svg' alt='' className={styles.iconStyle}></img>

    </a>
  </div>;
};

export default PageLink;
