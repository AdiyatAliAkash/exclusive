import React, { useEffect, useState } from 'react';
import Container from './Container';
import axios from 'axios';

const OurProduct = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?sortBy=title&order=asc").then((response) => {
      setInfo(response.data.products);
    });
  }, []);

  return (
    <section className="pt-[81px] pb-[140px]">
      <Container>
        <div>
          {/* Section Header */}
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">Our Products</h3>
          </div>

          <div className="pt-[20px] pb-[60px]">
            <h3 className="font-inter font-semibold text-[36px] text-[#000000]">Explore Our Products</h3>
          </div>

          {/* Product Grid */}
          <div className="flex justify-between flex-wrap">
            {info.slice(15, 23).map((item) => (
              <div key={item.id} className="w-[24%] group cursor-pointer pt-[40px] pb-[60px]">
                <div className="relative">
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>

                  {/* Discount Label */}
                  <div className="absolute top-0 left-0">
                    <h3 className="py-[4px] px-[12px] bg-[#DB4444] inline-block font-poppins font-normal text-[12px] text-[#FAFAFA] rounded-[4px]">
                      {item.discountPercentage}%
                    </h3>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="bg-[#000000] absolute bottom-[70px] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-[40px] duration-200 ease-in-out">
                    <h3 className="py-[8px] text-[#FFFFFF] text-center font-poppins font-medium text-[16px]">
                      Add To Cart
                    </h3>
                  </div>

                  {/* Product Info */}
                  <div className="pt-[10px]">
                    <h3 className="font-poppins font-medium text-[16px] text-[#000000]">{item.title}</h3>
                    <p className="font-poppins font-medium text-[16px] text-[#DB4444] py-[8px]">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="font-poppins font-medium text-[16px] py-[16px] px-[48px] bg-[#DB4444] inline-block text-[#FAFAFA] rounded-[4px]">
              View All Products
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProduct;
