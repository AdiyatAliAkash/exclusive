import React, { useState } from 'react'
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import bank from '../assets/bank.png'
import { ToastContainer, toast } from 'react-toastify'

const CheckOut = () => {
    let data = useSelector((state) => state.buyProduct.sellItem)

    let { totalPrice, totalQuantity } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalQuantity += item.qun

        return acc
    }, { totalPrice: 0, totalQuantity: 0 })

    let [alert, setAlert] = useState("")
    let [alertShow, setAlertShow] = useState(false)
    let [a, setA] = useState("")

    let handleCode = (e) => {
        let code = e.target.value
        setA(code)

        if (code === "sale20") {
            setAlert("Coupon code applied successfully")
        } else {
            setAlert("Invalid coupon code")
        } if (code == "") {
            setAlert("")
        }

    }


    let handleApply = () => {
        setAlertShow(alert)
        setA("x")
    }

    // let handlePlace = () => {
    //     toast("Wow so easy!");
    //     setTimeout(() => {
    //         Navigate('/product')
    //     }, [1000])
    //     console.log("ami");
    // }
    let navigate = useNavigate()

    let handlePlace = () => {
        toast("Wow so easy!");
        setTimeout(() => {
            navigate('/product')
        }, [1000])
    }

    return (
        <section className="">
            <Container>
                <nav class="flex pt-[220px]" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center cursor-pointer">
                            Home
                        </li>
                        <span className='pl-[2px]'>/</span>
                        <li>
                            <div class="flex items-center cursor-pointer">
                                <Link to="/product">Products</Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h3 className='pt-[60px] font-inter font-medium text-[#000000] text-[36px]'>Billing Details</h3>
                <div className="flex justify-between pt-[40px] pb-[100px]">
                    <div className="">
                        <div className="w-[40%]">
                            <div className="">
                                <p className="pb-[8px] font-poppins font-normal text-[16px] text-[#999999]">First Name</p>
                                <input type="text" className='h-[50px] w-[470px] outline-none ont-poppins font-normal text-[16px] text-[#000000] border-[1px] border-[#a39d9d] pl-[20px]' placeholder='First Name' />
                            </div>
                            <div className="pt-[32px]">
                                <p className="pb-[8px] font-poppins font-normal text-[16px] text-[#999999]">Company Name</p>
                                <input type="text" className='h-[50px] w-[470px] outline-none ont-poppins font-normal text-[16px] text-[#000000] border-[1px] border-[#a39d9d] pl-[20px]' placeholder='Company Name' />
                            </div>
                            <div className="pt-[32px]">
                                <p className="pb-[8px] font-poppins font-normal text-[16px] text-[#999999]">Street Address*</p>
                                <input type="text" className='h-[50px] w-[470px] outline-none ont-poppins font-normal text-[16px] text-[#000000] border-[1px] border-[#a39d9d] pl-[20px]' placeholder='Street Address' />
                            </div>
                            <div className="pt-[32px]">
                                <p className="pb-[8px] font-poppins font-normal text-[16px] text-[#999999]">Town/City*</p>
                                <input type="text" className='h-[50px] w-[470px] outline-none ont-poppins font-normal text-[16px] text-[#000000] border-[1px] border-[#a39d9d] pl-[20px]' placeholder='Town/City' />
                            </div>
                            <div className="pt-[32px]">
                                <p className="pb-[8px] font-poppins font-normal text-[16px] text-[#999999]">Phone Number*</p>
                                <input type="text" className='h-[50px] w-[470px] outline-none ont-poppins font-normal text-[16px] text-[#000000] border-[1px] border-[#a39d9d] pl-[20px]' placeholder='Phone Number' />
                            </div>
                            <div className="pt-[32px]">
                                <p className="pb-[8px] font-poppins font-normal text-[16px] text-[#999999]">Email Address*</p>
                                <input type="text" className='h-[50px] w-[470px] outline-none ont-poppins font-normal text-[16px] text-[#000000] border-[1px] border-[#a39d9d] pl-[20px]' placeholder='Email Address' />
                            </div>
                        </div>
                        <div className="py-[24px] flex items-center gap-[16px]">
                            <input type="checkbox" name="" id="" className='w-[18px] h-[18px] cursor-pointer' />
                            <span className='font-poppins font-normal text-[16px] text-[#000000]'>Save this information for faster check-out next time</span>
                        </div>
                    </div>

                    <div className="w-[40%]">
                        <div className="">
                            {data.map((item) => (
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-[20px] items-center">
                                        <img className='w-[54px]' src={item.thumbnail} alt="" />
                                        <h3 className="font-poppins font-normal text-[#000000] text-[16px]">{item.title}</h3>
                                    </div>
                                    <div className="">
                                        <h3 className="">{item.price}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="py-[32px] font-poppins font-normal text-[16px] text-[#000000]">
                            <h3 className="pb-[16px] border-b-[1px] border-[#b8b4b4] flex justify-between">Subtotal <span className='font-poppins font-normal text-[#000000] text-[16px]'>${totalPrice}</span></h3>
                            <h3 className="py-[16px] border-b-[1px] border-[#b8b4b4] flex justify-between">Shipping: <span className='font-poppins font-normal text-[#000000] text-[16px]'>Free</span></h3>
                            <h3 className="pt-[16px] border-b-[1px] flex justify-between">Total: <span className='font-poppins font-normal text-[#000000] text-[16px]'>${totalPrice}</span></h3>
                        </div>

                        <div className="flex items-center justify-between pb-[32px]">
                            <div className="flex items-center gap-[16px]">
                                <input type="radio" name='title' className='w-[22px] h-[22px] cursor-pointer' />
                                <span className='font-poppins font-normal text-[16px] text-[#000000]'>Direct Bank Transfer</span>
                            </div>
                            <img src={bank} alt="" />
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <input type="radio" name='title' className='w-[22px] h-[22px] cursor-pointer' />
                            <h3 className="font-poppins font-normal text-[16px] text-[#000000]">Cash on delivery</h3>
                        </div>
                        <div className="pt-[32px]">
                            <input onChange={handleCode} className='border-[#000000] rounded-[4px] w-[300px] h-[56px] border-[1px] pl-[24px]' type="text" placeholder='Coupon Code' />
                            <a onClick={handleApply} className='cursor-pointer ml-[16px] py-[16px] px-[48px] bg-[#DB4444] rounded-[4px] text-[16px] font-medium text-[#FAFAFA] font-poppins'>Apply Coupon</a>
                        </div>

                        <span className='text-[#DB4444] text-[16px] font-poppins font-normal pl-[16px]'>{alertShow}</span>

                        <div className="pt-[32px] ">
                            <a onClick={handlePlace} className='cursor-pointer py-[16px] px-[48px] bg-[#DB4444] rounded-[4px] text-[16px] font-medium text-[#FAFAFA] font-poppins'>Place Order</a>
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
                </div>
            </Container>
        </section >
    )
}

export default CheckOut