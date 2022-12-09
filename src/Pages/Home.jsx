import React from 'react';
import Header from '../ComponentsPage/header';
import Catalog from '../ComponentsPage/catalog'
import MainPage from '../ComponentsPage/mainPage';
import AboutUs from '../ComponentsPage/aboutUs';
import AboutLida from '../ComponentsPage/aboutLida';
import Review from '../ComponentsPage/review';
import Footer from '../ComponentsPage/footer';

export default function HomePage() {
    return (
    <div>
        <Header />
        <MainPage />
        <AboutLida />
        <Review />
        <AboutUs />
        <Catalog />
        <Footer />
    </div>
    );
}
