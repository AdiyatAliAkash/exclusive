import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { ApiData } from '../components/ContextApi'
import Post from '../components/pagination/Post'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Paginate from '../components/pagination/Paginate'


const ProductPage = () => {
  let data = useContext(ApiData)
  let [findCategory, setFindCategory] = useState([])
  let [categoryShow, setCategoryShow] = useState(true)
  let [categoryFilter, setCategoryFilter] = useState([])
  let [show, setShow] = useState("")
  let [brandShow, setBrandShow] = useState(false)
  let [findBrand, setFindBrand] = useState([])

  let [currentPaage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)
  let lastPage = currentPaage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = data.slice(firstPage, lastPage)
  let pageNumber = []

  for (let i = 0; i < Math.ceil(categoryFilter.length > 0 ? categoryFilter : data.length / perPage); i++) {
    pageNumber.push(i)
  }


  let paginateClick = (state) => {
    setCurrentPage(state + 1)
  }

  let next = () => {
    if (currentPaage < pageNumber.length) {
      setCurrentPage(currentPaage + 1)
    }
  }

  let prev = () => {
    if (currentPaage > 1) {
      setCurrentPage(currentPaage - 1)
    }
  }



  let handleCategory = (citem) => {
    let cateFilter = data.filter((item) => item.category == citem)
    setCategoryFilter(cateFilter)
    setShow("show")
  }

  let handleBrand = (bitem) => {
    let bFilter = data.filter((item) => item.brand == bitem)
    setCategoryFilter(bFilter)
  }



  useEffect(() => {
    setFindCategory([...new Set(data.map((item) => item.category))])
    setFindBrand([...new Set(data.map((item)=> item.brand))])
  }, [data])

  

  let handleShow = () => {
    setCategoryFilter('')
  }

  let cateHide = () => {
    setShow('')
  }


  return (
    <section className="pb-[124px]">
      <Container>
        <div className="flex">
          <div className="font-poppins w-[20%] pt-[151px]">
            <div onClick={cateHide} className="flex items-center cursor-pointer">
              <p className='flex items-center gap-3 font-bold text-[20px] text-[#262626] pb-[5px]' onClick={() => setCategoryShow(!categoryShow)}>Shop by Category {categoryShow == false ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
            </div>

            {show == "show" ? <h3 onClick={handleShow} className='inline-block px-[20px] py-[2px] text-[14px] font-medium bg-[#DB4444] text-[#fff] font-inter cursor-pointer rounded-[5px]'>show all</h3> : ""}

            {categoryShow &&
              <ul className='overflow-y-scroll h-[300px]'>
                {findCategory.map((item) => (
                  <li className='cursor-pointer font-normal text-[16px] py-[12px] text-[#000000] capitalize' onClick={() => handleCategory(item)}>{item}</li>
                ))}
              </ul>}

            <div className="flex items-center cursor-pointer">
              <p className='flex items-center gap-[46px] font-bold text-[20px] text-[#262626] pb-[5px]' onClick={() => setBrandShow(!brandShow)}>Shop by Brand
                {brandShow == false ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </div>

            {brandShow &&
              <ul className='overflow-y-scroll h-[300px]'>
                {findBrand.map((item)=> (
                  <li onClick={()=> handleBrand(item)} className='cursor-pointer font-normal text-[16px] py-[12px] text-[#000000] capitalize'>{item}</li>
                ))}
              </ul>
            }

          </div>


          <div className="w-[80%] pt-[100px]">
            <Post allPage={allPage} categoryFilter={categoryFilter} />
            <div className="text-center">
              <Paginate pageNumber={pageNumber} paginateClick={paginateClick} next={next} prev={prev} currentPaage={currentPaage} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductPage