import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { decrement, increment, productRemove } from '../components/ProductSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {

  let data = useSelector((state) => state.Product.cartItem)
  let dispatch = useDispatch()
  let handleDelete = (i) => {
    dispatch(productRemove(i))
  }

  let handleUp = (i) => {
    dispatch(increment(i))
  }

  let handleDown = (i) => {
    dispatch(decrement(i))
  }

  let {totalPrice, totalQuantity} = data.reduce((acc, item)=> {
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
    
    return acc
  }, {totalPrice:0, totalQuantity:0})


  return (
    <section className='pb-[140px]'>
      <Container>
        <nav class="flex pt-[90px] pb-[50px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <Link to="/product">
                  Shop
                </Link>
              </div>
            </li>
          </ol>
        </nav>

        <ul className='flex justify-between pb-[64px] font-poppins font-normal text-[16px] text-[#000000]'>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>

        {data.length > 0 ?
          <div className="">
            {data.map((item, i) => (
              <ul className="flex p-[10px] items-center justify-between">
                <li className="w-[20%] font-bold p-[10px] flex justify-between items-center">
                  <div onClick={() => handleDelete(i)}>
                    <ImCross />
                  </div>
                  <div className="thumb w-[20%]">
                    <img
                      src={item.thumbnail}
                      alt="sample"
                      className="w-full"
                    />
                  </div>
                  <h2 className="w-[65%]">{item.title}</h2>
                </li>
                <li className="w-[21%] font-bold p-[10px]">
                  {item.price}
                </li>
                <li className=" font-bold p-[10px] relative px-[50px]">
                  <h2 className="text-left px-[20px]">{item.qun}</h2>
                  <div className="arrows flex flex-col absolute top-[50%] right-0 translate-y-[-50%]">
                    <div className="pr-[40px]">
                      <div onClick={() => handleUp(i)} className="">
                        <TfiArrowCircleUp />
                      </div>
                      <div onClick={() => handleDown(i)} className="">
                        <TfiArrowCircleDown />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="w-[20%] flex justify-end">
                  ${(item.price * item.qun).toFixed(2)}
                </li>
              </ul>
            ))}
            <div className="flex justify-between pt-[80px]">
              <div className="">
                <input className='border-[#000000] rounded-[4px] w-[300px] h-[56px] border-[1px] pl-[24px] capitalize' type="text" placeholder='Coupon Code' />
                <a className='ml-[16px] py-[16px] px-[48px] bg-[#DB4444] rounded-[4px] text-[16px] font-medium text-[#FAFAFA] font-poppins'>Apply Coupon</a>
              </div>
              <div className="w-[470px] h-[324px] border-[1px] border-[#000000] rounded-[4px] p-[24px]">
                <h3 className='font-poppins font-medium text-[20px] text-[#000000]'>Cart Total</h3>
                <div className="flex justify-between mt-[24px] pb-[16px] font-poppins font-normal text-[16px] border-b-[1px] border-[#bebbbb]">
                  <h3 className=''>Subtotal:</h3>
                  <p className="">${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mt-[24px] font-poppins font-normal text-[16px] border-b-[1px] border-[#bebbbb] pb-[16px]">
                  <h3 className=''>Shipping:</h3>
                  <p className="">Free</p>
                </div>
                <div className="flex justify-between mt-[24px] font-poppins font-normal text-[16px]">
                  <h3 className=''>Total:</h3>
                  <p className="">${totalPrice}</p>
                </div>
              </div>
            </div>
          </div> : <div className="text-center pb-[20px]">
            <h3 className="py-[2px] px-[14px] bg-[#d8d8d8] inline-block">No Product</h3>
          </div>}
      </Container>
    </section>
  )
}

export default CartPage