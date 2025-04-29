import React, { useEffect, useState } from 'react';
import Container from './Container';
import Slider from "react-slick";
import banner from "../assets/banner.jpg";
import axios from 'axios';
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const [category, setCategory] = useState([]);
  const [categoryShow, setCategoryShow] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const info = response.data.products;
      const uniqueCategories = [...new Set(info.map((item) => item.category))];
      setCategory(uniqueCategories);
    });
  }, []); // ✅ only run once

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section>
      <Container>
        <div className="flex justify-between">
          {/* Category Sidebar */}
          <div className="py-[40px] w-[25%]">
            <p
              onClick={() => setCategoryShow(!categoryShow)}
              className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]"
            >
              Woman’s Fashion
              <span className="ml-[50px]">
                {categoryShow === true ? <FaAngleDown /> : <FaAngleRight />}
              </span>
            </p>

            {categoryShow && (
              <ul>
                {category.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {/* Static Categories */}
            {[
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Sports & Outdoor",
              "Groceries & Pets"
            ].map((cat, idx) => (
              <div className="pt-[16px]" key={idx}>
                <p className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]">{cat}</p>
              </div>
            ))}
          </div>

          {/* Slider */}
          <div className="w-[75%]">
            <Slider {...settings}>
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i}>
                  <img className="w-full" src={banner} alt={`Banner Slide ${i + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
