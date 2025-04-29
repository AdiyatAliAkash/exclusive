import React, { useEffect, useState } from 'react';
import Container from './Container';
import Count from './Count';
import axios from 'axios';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, cursor: "pointer", display: "block", position: "absolute", top: "0", right: "0" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, cursor: "pointer", display: "block", zIndex: "10", position: "absolute", top: "0", right: "40px" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const FlashSales = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?sortBy=title&order=asc").then((response) => {
      setInfo(response.data.products);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="py-[140px]">
      <Container>
        <div className="pb-[76px] border-b-[1px] border-[#c2bfbf]">
          {/* Section Title */}
          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">Today's</h3>
          </div>

          <div className="flex items-center gap-[90px] pt-[24px]">
            <h3 className="font-inter font-semibold text-[36px] text-[#000000]">Flash Sales</h3>
            <div className="font-inter font-semibold text-[32px]">
              <Count />
            </div>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {info.slice(9, 30).map((item) => (
              <div key={item.id} className="w-[90%] group cursor-pointer pt-[40px] pb-[60px]">
                <div className="relative">
                  <div className="flex justify-center">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>

                  <div className="absolute top-0 left-0">
                    <h3 className="py-[4px] px-[12px] bg-[#DB4444] inline-block font-poppins font-normal text-[12px] text-[#FAFAFA] rounded-[4px]">
                      {item.discountPercentage}%
                    </h3>
                  </div>

                  <div className="bg-[#000000] absolute bottom-[70px] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-[40px] duration-200 ease-in-out">
                    <h3 className="py-[8px] text-[#FFFFFF] text-center font-poppins font-medium text-[16px]">
                      Add To Cart
                    </h3>
                  </div>

                  <div className="pt-[10px]">
                    <h3 className="font-poppins font-medium text-[16px] text-[#000000]">{item.title}</h3>
                    <p className="font-poppins font-medium text-[16px] text-[#DB4444] py-[8px]">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* View All Button */}
          <div className="text-center">
            <Link to="/product">
              <h3 className="font-poppins font-medium text-[16px] py-[16px] px-[48px] bg-[#DB4444] inline-block text-[#FAFAFA] rounded-[4px]">
                View All Products
              </h3>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
