import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, IconButton, Modal, Typography } from '@mui/material';
import styles from './SubCutegoriesPopup.module.scss';
import { Box, display, grid, Grid } from '@mui/system';

const SubCutegoriesPopup = ({ title, isOpen, handleClose }: {
    title: string, isOpen: boolean;
    handleClose: () => void;
}) => {
    const subCategories: string[] = ['panda', 'lion', 'dog', 'monkey'];
    let [subSubCategories, setSubSubCategories] = useState<string[]>([]);
    const handleCardClick = (subCategory: string) => {
        console.log(`Card clicked: ${subCategory}`);
        const newSubSubCategories = ['burger', 'pizza', 'salad', 'falafel'];
        setSubSubCategories(newSubSubCategories);
    };

    const [modalHeight, setModalHeight] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current) {
            const height = modalRef.current.scrollHeight + 32;
            setModalHeight(height);
        }
    }, [subCategories, subSubCategories]);
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
                    <Grid spacing={2} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }} className={styles.gridStyle}>
                        {subCategories.map((subCategory) => (
                            <Card className={styles.subCategoryStyle}
                                onClick={() => handleCardClick(subCategory)}>
                                <CardContent className={styles.subCategoryContentStyle}>
                                    <Typography className={styles.cardText}>
                                        {subCategory}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Grid spacing={2} sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }} className={styles.gridStyle}>
                        {subSubCategories.map((subSubCategory) => (
                            <Card className={styles.subSubCategoryStyle} key={subSubCategory}>
                                <CardContent>
                                    <Typography>{subSubCategory}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    );
};

export default SubCutegoriesPopup;
