import React, { useEffect, useState } from 'react';
import Container from './Container';
import axios from 'axios';

const BestSelling = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((response) => {
        setInfo(response.data.products);
      });
  }, []);

  return (
    <section className="py-[70px]">
      <Container>
        <div>
          {/* Section Title */}
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">This Month</h3>
          </div>

          {/* Header + Button */}
          <div className="pt-[20px] pb-[60px] flex justify-between">
            <h3 className="font-inter font-semibold text-[36px] text-[#000000]">Best Selling Products</h3>
            <button className="rounded-[4px] py-[16px] px-[48px] font-poppins font-medium text-[16px] text-[#FAFAFA] bg-[#DB4444]">
              View All
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex flex-wrap justify-between">
            {info.slice(25, 29).map((item) => (
              <div key={item.id} className="w-[24%] group cursor-pointer pt-[40px] pb-[60px]">
                <div className="relative">
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-0 left-0">
                    <h3 className="py-[4px] px-[12px] bg-[#DB4444] inline-block font-poppins font-normal text-[12px] text-[#FAFAFA] rounded-[4px]">
                      {item.discountPercentage}%
                    </h3>
                  </div>

                  {/* Add to Cart Hover */}
                  <div className="bg-[#000000] absolute bottom-[70px] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-[40px] duration-200 ease-in-out">
                    <h3 className="py-[8px] text-[#FFFFFF] text-center font-poppins font-medium text-[16px]">
                      Add To Cart
                    </h3>
                  </div>

                  {/* Product Info */}
                  <div className="pt-[10px]">
                    <h3 className="font-poppins font-medium text-[16px] text-[#000000]">
                      {item.title}
                    </h3>
                    <p className="font-poppins font-medium text-[16px] text-[#DB4444] py-[8px]">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestSelling;
