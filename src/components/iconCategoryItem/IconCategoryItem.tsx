import React, { MouseEventHandler, useState } from 'react';
import styles from './IconCategoryItem.module.scss';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SubCutegoriesPopup from '../subCutegoriesPopup/SubCutegoriesPopup';

const IconCategoryItem = ({
  category,
  iconPath,
}: {
  category: string | null;
  iconPath: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MenuItem className={styles.menuItem} onClick={handleOpenModal}>
        <ListItemIcon>
          <img src={iconPath} alt={category ?? ''} />
        </ListItemIcon>
        <Typography className={styles.categoryTeaxtStyle} variant="inherit">
          {category}
        </Typography>
      </MenuItem>
      <SubCutegoriesPopup title={category} isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default IconCategoryItem;