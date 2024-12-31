import React from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import './i18n/config';
import { ProductsProvider } from './context/DataProvider';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <AppRoutes />
      </ProductsProvider>
    </div>
  );
}

export default App;
