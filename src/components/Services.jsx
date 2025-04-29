import React from 'react'
import Container from './Container'
import delivery from '../assets/delivery.png'
import customer from '../assets/customer.png'
import mony from '../assets/mony.png'

const Services = () => {
  return (
    <section className="py-[140px]">
        <Container>
            <div className="flex justify-between">
                <div className="">
                    <img src={delivery} alt="" />
                </div>
                <div className="">
                    <img src={customer} alt="" />
                </div>
                <div className="">
                    <img src={mony} alt="" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Services