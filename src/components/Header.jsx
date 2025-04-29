import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <header className="py-[15px] bg-[#000000]">
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="mx-auto text-[#FAFAFA] font-normal font-poppins text-[14px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <span className="font-bold text-[14px] text-[#FAFAFA]">ShopNow</span>
          </h3>

          <div className="text-end text-[#fff]">
            <label htmlFor="language-select" className="sr-only">Language</label>
            <select
              id="language-select"
              className="bg-transparent w-[78px] text-[#FAFAFA]"
              aria-label="Select Language"
            >
              <option className="bg-[#000000] text-white">English</option>
              <option className="bg-[#000000] text-white">Bangla</option>
              <option className="bg-[#000000] text-white">Spanish</option>
            </select>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
