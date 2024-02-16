import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const BookSection = () => {
  const [array,setArray] = useState([]);
  const xyz = async()=> {
    const response = await fetch('http://localhost:4500/api/product/findProductsByCategory',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({category: 'book'})
    });
    const data = await response.json();
    console.log(data);
    setArray(data);
  }
  useEffect(()=>{
    xyz();
  },[])
  return (
    <div className="productCardContainer">
      <h1 className="recommendedH1">Books</h1>
      {array.map((product,index)=>{
        {<ProductCard key={index} data={product} />}
      })}
    </div>
  );
};

export default BookSection;