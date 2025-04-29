import React from 'react'

const Paginate = ({ pageNumber, paginateClick, next, prev, currentPaage }) => {

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="inline-flex -space-x-px text-sm">
                    {pageNumber.length > 0 &&
                        <li>
                            <a onClick={prev} class="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>}

                    {pageNumber.map((item, i) => (
                        <li>
                            <a onClick={() => paginateClick(item)} class={`${currentPaage == i + 1 ? "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-[#fff] bg-[#1a1818] border" : "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-[#000] dark:hover:bg-gray-700 dark:hover:text-white"}`}>{item + 1}</a>
                        </li>
                    ))}
                    {pageNumber.length > 0 &&
                        <li>
                            <a onClick={next} class="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>}
                </ul>
            </nav>
        </div>
    )
}

export default Paginate