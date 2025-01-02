import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, IconButton, MenuItem, Modal, Select, Tooltip, Typography } from '@mui/material';
import styles from './SubCutegoriesPopup.module.scss';
import { Box, display, grid, Grid } from '@mui/system';
import { Product } from '../../types/productTree';
import { useProductContext } from '../../context/DataProvider';
import zIndex from '@mui/material/styles/zIndex';

const SubCutegoriesPopup = ({ title, isOpen, handleClose }: {
    title: string | null, isOpen: boolean;
    handleClose: () => void;
}) => {
    let [subSubCategories, setSubSubCategories] = useState<string[]>([]);
    const handleCardClick = (subCategory: string | null) => {
        console.log(`Card clicked: ${subCategory}`);
        const newSubSubCategories = ['burger', 'pizza', 'salad', 'falafel'];
        setSubSubCategories(newSubSubCategories);
    };

    const handleChange = () => {
        //TO DO go to declaration page
    };

    const [modalHeight, setModalHeight] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);
    const { products } = useProductContext();

    function getSubCategories(categoryName: string | null): (string | null)[] {
        if (!(!categoryName || typeof categoryName !== "string")) {
            const categorySubCategories = [
                ...new Set(
                    products
                        .filter(product => product.branch && product.branch === categoryName)
                        .map(product => product.category)
                ),
            ];
            return categorySubCategories;
        }
        return [];
    }

    function getsubCategoryProducts(subCategory: string | null): Product[] {
        return products.filter(product => product.category == subCategory);
    }
    const subCategories: (string | null)[] = getSubCategories(title);
    return (
        <Modal open={isOpen} onClose={handleClose} className={styles.modalStyle}>
            <Box className={styles.boxStyle} ref={modalRef} >
                <button className={styles.closeButton} onClick={handleClose}>
                    <img src='/icons/close.svg' alt="Close" style={{ width: "100%", height: "100%" }} />
                </button>
                <Typography className={styles.titleStyle}>
                    {title}
                </Typography>
                <Typography variant="body1" className={styles.gridContainer}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ gridTemplateColumns: "repeat(2, 1fr)" }}
                        className={styles.gridStyle}
                    >
                        {subCategories!.map((subCategory, subIndex) => {
                            const subCategoryProducts = getsubCategoryProducts(subCategory);

                            return (
                                <Tooltip title={subCategory}>
                                    <Select
                                        className={styles.selectStyle}
                                        onChange={(event) => handleChange()}
                                        displayEmpty
                                        value=''
                                        renderValue={() => subCategory || ""}
                                        IconComponent={() => (
                                            <img src="/icons/arrow-down.svg" alt="Arrow Icon"
                                                className={styles.iconStyle}
                                            />
                                        )}
                                        sx={{
                                            paddingLeft: '40px',
                                            '& .MuiSelect-select': {
                                                minWidth: '100% !important',
                                                zIndex: 100,
                                                paddingRight: '15px !important',
                                            }
                                        }}
                                    >
                                        {subCategoryProducts.map((product, index) => (
                                            <MenuItem key={index} value={product.name || ""}>
                                                {product.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Tooltip>
                            );
                        })}
                    </Grid>
                </Typography>

            </Box>
        </Modal>
    );
};

export default SubCutegoriesPopup;
