import React from 'react';
import ProductCard from '../components/productCard'
import RecommendSection from '../components/RecommendSection';
import ApparelSection from '../components/ApparelSection';
import ElectronicSection from '../components/ElectronicSection';
import BookSection from '../components/BookSection';
import GrocerySection from '../components/GrocerySection';
import HomeCarousel  from './crousal/HomeCarousel';

const Home = ()=>{
    return(
        <div className='productCardContainer'>
            <HomeCarousel />
            <div className="productCardBg">
                <div className="circle orange-circle"></div>
                <div className="circle navy-circle"></div>
                <div className="content"></div>
            </div>
            <BookSection />
            <RecommendSection />
            <ApparelSection />
            <ElectronicSection />
            <GrocerySection />
        </div>
    )
}

export default Home;