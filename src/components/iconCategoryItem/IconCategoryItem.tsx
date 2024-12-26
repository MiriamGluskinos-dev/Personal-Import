import React from 'react';
import styles from './IconCategoryItem.module.scss';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';


const IconCategoryItem = ({ text, iconPath }: { text: string, iconPath: string }) => {
  return (
    <MenuItem className={styles.menuItem}>
      <ListItemIcon>
        <img src={iconPath} />
      </ListItemIcon>
      <Typography variant="inherit">{text}</Typography>
    </MenuItem>
  );
};

export default IconCategoryItem;
