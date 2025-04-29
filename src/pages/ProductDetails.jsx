import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Container from '../components/Container'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/ProductSlice';
import { checkOut } from '../components/checkOute';

const ProductDetails = () => {

    let dispatch = useDispatch()
    let productId = useParams({})
    let [singleProduct, setSingleProduct] = useState({})
    let navigate = useNavigate()
    let [count, setCount] = useState(1)

    let singleData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data);
        })
    }


    useEffect(() => {
        singleData()
    }, [])

    let handleCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))
        toast("Wow so easy!");
        setTimeout(() => {
            navigate('/cart')
        }, [1000])
    }

    let handleCheckOut = (item)=> {
        dispatch(checkOut({ ...item, qun: 1 }))
        
        toast("Wow so easy!");
        setTimeout(() => {
            navigate('/check-out')
        }, [1000])
    }

    let handlePlus = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    let handleMinus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <section className="pb-[90px]">
            <Container>
                <div className="">
                    <nav class="flex py-[50px]" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                Account
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <span className="">/</span>
                                    <Link to="/product">
                                        <h3 className="px-[5px]">Shop</h3>
                                    </Link>
                                    <span className="">/</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <h3 className="">Gaming</h3>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="flex justify-between py-[120px]">
                    <div className="w-[50%] pl-[100px] pt-[60px]">
                        <img className='' src={singleProduct.thumbnail} alt="singleProduct.thumbnail" />
                    </div>

                    <div className="w-[50%]">
                        <h3 className="font-inter font-semibold text-[24px] text-[#000000]">{singleProduct.title}</h3>
                        <h3 className="font-inter font-normal text-[24px] text-[#000000] pb-[24px]">${singleProduct.price}</h3>
                        <p className='w-[70%] pb-[24px] font-poppins font-semibold text-[14px] text-[#000000]'>{singleProduct.description}</p>
                        <div className="w-[80%] h-[1px] bg-[#525050]"></div>
                        <p className='py-[24px] font-inter font-normal text-[20px]'>Colours:</p>

                        <div className="flex gap-4">
                            <p className='pb-[30px] font-inter font-normal text-[20px]'>Size:</p>
                            <div className="w-[32px] h-[32px] border-[1px] rounded-[4px] border-[#00000080] flex items-center justify-center">
                                <p>Xl</p>
                            </div>
                            <div className="w-[32px] h-[32px] border-[1px] rounded-[4px] border-[#00000080] flex items-center justify-center">
                                <p className="">S</p>
                            </div>
                            <div className="w-[32px] h-[32px] border-[1px] rounded-[4px] border-[#00000080] flex items-center justify-center">
                                <p className="">M</p>
                            </div>
                            <div className="w-[32px] h-[32px] border-[1px] rounded-[4px] border-[#00000080] flex items-center justify-center">
                                <p className="">XL</p>
                            </div>
                        </div>

                        <div className="rounded-[4px] h-[44px] w-[140px] flex border-[1px] border-[#00000080]">
                            <div onClick={handleMinus} className="w-[40px] h-[44px] border-r-[1px] border-[#00000080] flex items-center justify-center"><FaMinus /></div>
                            <div className="w-[60px] h-[44px] flex items-center justify-center font-poppins font-medium text-[20px]">{count}</div>
                            <div onClick={handlePlus} className="w-[40px] h-[44px] border-l-[1px] border-[#00000080] flex items-center justify-center"><FaPlus /></div>
                        </div>

                        <div className="pt-[24px]">
                            <a onClick={()=> handleCheckOut(singleProduct)} className="rounded-[4px] py-[12px] px-[48px] bg-[#DB4444] cursor-pointer text-[#FAFAFA] font-poppins font-medium text-[16px] ">Buy Now</a>
                            <a onClick={() => handleCart(singleProduct)} className="cursor-pointer ml-[20px] rounded-[4px] py-[12px] px-[48px] bg-[#DB4444] text-[#FAFAFA] font-poppins font-medium text-[16px] ">Add To Cart</a>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </Container>
        </section>
    )
}

export default ProductDetails