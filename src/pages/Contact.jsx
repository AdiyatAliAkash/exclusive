import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

const Contact = () => {
  return (
    <section className="pb-[100px] pt-[40px]">
      <Container>
        <div className="mb-8">
          <nav className="flex justify-center md:justify-start py-[30px]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-sm text-gray-500">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <h3 className="font-medium text-gray-800">Contact</h3>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row gap-[40px] items-start">
          {/* Left - Contact Info */}
          <div className="w-full md:w-[35%]">
            <div className="flex items-center gap-4 mb-4">
              <img src={phone} alt="Phone Icon" className="w-6 h-6" />
              <h3 className="font-poppins font-medium text-[18px] text-[#000000]">Call To Us</h3>
            </div>
            <p className="text-[14px] text-gray-700 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px] text-gray-700 mb-8">Phone: +8801611112222</p>

            <div className="border-t border-gray-300 pt-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={mail} alt="Mail Icon" className="w-6 h-6" />
                <h3 className="font-poppins font-medium text-[18px] text-[#000000]">Write To Us</h3>
              </div>
              <p className="text-[14px] text-gray-700 mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-[14px] text-gray-700">Email: customer@exclusive.com</p>
              <p className="text-[14px] text-gray-700 mt-2">Email: support@exclusive.com</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full md:w-[60%]">
            <form className="space-y-6 bg-white p-4 rounded shadow-md">
              <div className="relative w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div className="relative w-full group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
