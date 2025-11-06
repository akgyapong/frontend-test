import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/shopping-bag.png'
import filter from '../assets/filter.png'
import sortIcon from '../assets/arrow.png'
import discount from '../assets/discount.png'



function ProductListing() {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false)
    const [selectedRange, setSelectedRange] = useState(null)
    const [minVal, setMinVal] = useState(0)
    const [maxVal, setMaxVal] = useState(1000)

    const filterRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setShowFilterDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const priceRanges = [
        { label: 'All Prices', min: 0, max: Infinity },
        { label: 'Under $25', min: 0, max: 25 },
        { label: '$25 to $50', min: 25, max: 50 },
        { label: '$50 to $100', min: 50, max: 100 },
        { label: '$100 to $500', min: 100, max: 500 },
        { label: 'Above $500', min: 500, max: Infinity }
    ]

    function applyPriceFilter(range) {
        if (range) {
            setSelectedRange(range.label)
            setMinVal(range.min === 0 ? 0 : range.min)
            setMaxVal(range.max === Infinity ? 1000 : range.max)
        } else {
            // apply custom
            setSelectedRange(`$${minVal} - $${maxVal}`)
        }
        setShowFilterDropdown(false)
    }

    function clearFilter() {
        setSelectedRange(null)
        setMinVal(0)
        setMaxVal(1000)
    }

    return (
        <div className="bg-gray-700 w-full h-screen flex flex-col justify-start items-center sm:hidden">
        <div className="w-full h-16 bg-white flex justify-center items-center gap-5">
        <input type="search" name="" id="" className="border-2 border-gray-900 rounded-2xl p-2 w-60 outline-none hover:bg-gray-300 cursor-default" placeholder="Search Products....." />
        <Link to="/cart"><img className="w-6 h-6" src={cartIcon} alt='Cart Icon'/></Link>
        </div>
        <div className="w-full h-12 bg-gray-200 flex justify-around items-center mt-4 gap-4">
                        <div className="relative" ref={filterRef}>
                            <button onClick={() => setShowFilterDropdown(v => !v)} className="border-2 w-30 rounded-xl flex justify-center items-center gap-2 p-2">
                                <img className="w-7" src={filter} alt="Filter Icon" />
                                <h3 className="text-md font-semibold">Filter</h3>
                            </button>

                            <div className={`${showFilterDropdown ? 'flex' : 'hidden'} absolute left-0 mt-2 w-72 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-20 p-3 flex-col gap-2`}>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-semibold">Price Ranges</h4>
                                    <ul className="flex flex-col">
                                        {priceRanges.map((r, idx) => (
                                            <li key={idx} onClick={() => applyPriceFilter(r)} className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                                                {r.label}{r.max === Infinity && r.min > 0 ? ` ($${r.min}+)` : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t pt-2 mt-1">
                                    <h4 className="font-semibold">Custom range</h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <input aria-label="Min price" type="number" className="w-20 p-1 border rounded" value={minVal} onChange={e => setMinVal(Number(e.target.value))} />
                                        <span className="text-sm">—</span>
                                        <input aria-label="Max price" type="number" className="w-20 p-1 border rounded" value={maxVal} onChange={e => setMaxVal(Number(e.target.value))} />
                                        <button onClick={() => applyPriceFilter(null)} className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">Apply</button>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">You can also use the number inputs as a slider-like control.</div>
                                </div>

                                <div className="flex justify-between mt-2">
                                    <button onClick={clearFilter} className="text-sm text-red-600">Clear</button>
                                    <button onClick={() => setShowFilterDropdown(false)} className="text-sm text-gray-700">Close</button>
                                </div>
                            </div>
                        </div>

            <button onClick={() => {
                const menu = document.getElementById('price-dropdown');
                if (menu.style.display === 'flex') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'flex';
                }
            }} className=" relative border-2 w-30 rounded-xl flex justify-center items-center gap-2 p-2">
            <img className="w-7" src={discount} alt="Filter Icon" />
            <h3 className="text-md font-semibold">Price</h3>
            </button>
            <div id="price-dropdown" className=" hidden absolute top-33 right-47 w-38 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="flex flex-col justify-center w-full items-center">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Price: Low - High</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Price: High - Low</li>

                </ul>
            </div>



            <button onClick={() => {
                const menu = document.getElementById('sort-dropdown');
                if (menu.style.display === 'flex') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'flex';
                }
            }} className=" relative border-2 w-30 rounded-xl flex justify-center items-center gap-2 p-2">
            <img className="w-7" src={sortIcon} alt="Sort Icon" />
            <h3 className="text-md font-semibold">Sort</h3>
            </button>
            <div id="sort-dropdown" className=" hidden absolute top-33 right-1 w-38 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="flex flex-col justify-center w-full items-center">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Featured</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Best Selling</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Newest Arrivals</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Rating: High - Low</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Rating: Low - High</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Name: A - Z</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer w-full">Name: Z - A</li>

                </ul>
            </div>

        </div>





    </div>
  )
}


export default ProductListing

