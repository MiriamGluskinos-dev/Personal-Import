import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DataStructure, Product } from '../types/productTree';
import mockData from '../productsTree.json';

interface ProductContextType {
    products: Product[];
    searchProducts: (query: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [data] = useState<DataStructure>(mockData);
    const [products, setProducts] = useState<Product[]>(data.products);

    const searchProducts = (query: string): Product[] => {
        if (!query.trim()) return products; // Return all products if the query is empty

        const lowerCaseQuery = query.toLowerCase();

        return products.filter(product => {
            return (
                product.name?.toLowerCase().includes(lowerCaseQuery) ||
                product.category?.toLowerCase().includes(lowerCaseQuery) ||
                product.branch?.toLowerCase().includes(lowerCaseQuery) ||
                product.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseQuery))
            );
        });
    };

    return (
        <ProductContext.Provider value={{ products, searchProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
