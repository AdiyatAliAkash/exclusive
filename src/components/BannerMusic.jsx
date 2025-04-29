import React from 'react';
import Container from './Container';
import banner from '../assets/music.png';

const BannerMusic = () => {
  return (
    <section className="pt-[80px]">
      <Container>
        <img className="w-full" src={banner} alt="Music Banner" />
      </Container>
    </section>
  );
};

export default BannerMusic;
