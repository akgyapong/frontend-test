
import { Link } from 'react-router-dom'
import React, { useState, useMemo } from 'react'
import cartIcon from '../assets/shopping-bag.png'
import filter from '../assets/filter.png'
import sortIcon from '../assets/arrow.png'
import discount from '../assets/discount.png'
import tag from '../assets/tag.png'


const ProductListing = () => {

// Product catalog: each product includes a main category and a subcategory
const products = [
    { id: 1, name: "Wireless Earbuds", price: 49.99, image: "/img/earbuds.jpg", category: "Electronics", subcategory: "Mobile Accessories" },
    { id: 2, name: "Smartwatch Pro", price: 129.99, image: "/img/smartwatch.jpg", category: "Electronics", subcategory: "Mobile Accessories" },
    { id: 3, name: "Gaming Mouse", price: 29.99, image: "/img/mouse.jpg", category: "Computers & Accessories", subcategory: "Keyboards & Mice" },
    { id: 4, name: "Mechanical Keyboard", price: 79.99, image: "/img/keyboard.jpg", category: "Computers & Accessories", subcategory: "Keyboards & Mice" },
    { id: 5, name: "4K Monitor", price: 299.99, image: "/img/monitor.jpg", category: "Computers & Accessories", subcategory: "Monitors" },
    { id: 6, name: "Office Chair", price: 149.99, image: "/img/chair.jpg", category: "Home & Kitchen", subcategory: "Home Appliances" },
    { id: 7, name: "Bluetooth Speaker", price: 39.99, image: "/img/speaker.jpg", category: "Electronics", subcategory: "Audio" },
    { id: 8, name: "Laptop Stand", price: 24.99, image: "/img/stand.jpg", category: "Computers & Accessories", subcategory: "Laptop Bags & Accessories" },
    { id: 9, name: "Portable SSD 1TB", price: 119.99, image: "/img/ssd.jpg", category: "Computers & Accessories", subcategory: "Storage Devices" },
    { id: 10, name: "Backpack Pro", price: 59.99, image: "/img/backpack.jpg", category: "Computers & Accessories", subcategory: "Laptop Bags & Accessories" },
    { id: 11, name: "Running Shoes", price: 89.99, image: "/img/shoes.jpg", category: "Fashion", subcategory: "Footwear" },
    { id: 12, name: "Fitness Band", price: 34.99, image: "/img/band.jpg", category: "Electronics", subcategory: "Mobile Accessories" },
    { id: 13, name: "LED Desk Lamp", price: 19.99, image: "/img/lamp.jpg", category: "Home & Kitchen", subcategory: "Home Appliances" },
    { id: 14, name: "Wireless Charger", price: 14.99, image: "/img/charger.jpg", category: "Electronics", subcategory: "Mobile Accessories" },
    { id: 15, name: "Coffee Maker", price: 69.99, image: "/img/coffeemaker.jpg", category: "Home & Kitchen", subcategory: "Home Appliances" },
    { id: 16, name: "Air Fryer", price: 99.99, image: "/img/airfryer.jpg", category: "Home & Kitchen", subcategory: "Home Appliances" },
    { id: 17, name: "Electric Kettle", price: 24.99, image: "/img/kettle.jpg", category: "Home & Kitchen", subcategory: "Home Appliances" },
    { id: 18, name: "Water Bottle Steel", price: 12.99, image: "/img/bottle.jpg", category: "Computers & Accessories", subcategory: "Laptop Bags & Accessories" },
    { id: 19, name: "Sunglasses Classic", price: 22.99, image: "/img/sunglasses.jpg", category: "Fashion", subcategory: "Accessories" },
    { id: 20, name: "Graphic T-Shirt", price: 15.99, image: "/img/tshirt.jpg", category: "Fashion", subcategory: "Clothing" },
    { id: 21, name: "Wireless Headphones", price: 89.99, image: "/img/headphones.jpg", category: "Electronics", subcategory: "Audio" },
];

// Category structure follows your taxonomy. Each category has a list of subcategories.
const categories = [
    {
        name: 'Electronics',
        subs: [
            'Mobile Phones & Tablets',
            'Mobile Accessories',
            'Audio',
            'Power Banks',
            'Memory Cards',
            'Chargers & Cables',
        ]
    },
    {
        name: 'Computers & Accessories',
        subs: [
            'Laptops',
            'Desktops',
            'Printers & Scanners',
            'Monitors',
            'Keyboards & Mice',
            'Storage Devices',
            'Laptop Bags & Accessories'
        ]
    },
    {
        name: 'Home & Kitchen',
        subs: [
            'Home Appliances',
            'Cookers & Ovens',
            'Refrigerators'
        ]
    },
    {
        name: 'Fashion',
        subs: [
            'Clothing',
            'Footwear',
            'Accessories'
        ]
    }
]

    // Component state: track selected category/subcategory for filtering
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubcategory, setSelectedSubcategory] = useState(null)

    // Compute filteredProducts from the products array. useMemo avoids recomputing on unrelated renders.
    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            if (selectedSubcategory) {
                // show only items that match the selected subcategory
                return p.subcategory === selectedSubcategory || p.subcategory === selectedSubcategory.replace(/ & /g, ' & ')
            }
            if (selectedCategory) {
                // match product category to selectedCategory
                return p.category === selectedCategory
            }
            // no filter -> show all
            return true
        })
    }, [selectedCategory, selectedSubcategory])

  return (
    <div className='sm:hidden p-3 flex flex-col gap-4'>
        <div className="flex justify-center items-center gap-4 p-5">
            <input className='border-1 w-full border-gray-500 px-10  h-11 text-left  rounded-3xl' type="search" name="" id="" placeholder="Search Products" />
            <Link to="/cart"><img className='w-8 h-8 ' src={cartIcon} alt="cart" /></Link>
        </div>
        <div className="flex justify-around h-10 w-full items-center gap-2 ">
            <div className='w-full h-full flex gap-3 cursor-pointer justify-center items-center rounded-xl border-1 border-gray-400 hover:bg-gray-200'>
                <button>
                <img className="w-5" src={filter} alt="filter" />
                </button>
                <h3 className='text-gray-800'>Filter</h3>
            </div>
            <div onClick={() => {
                const fil_menu = document.getElementById('sort-menu');
                if(fil_menu.style.display === 'flex'){
                    fil_menu.style.display = 'none';
                }
                else{
                    fil_menu.style.display = 'flex';                }
            }} className='w-full relative h-full flex gap-3 cursor-pointer justify-center items-center rounded-xl border-1 border-gray-400 hover:bg-gray-200'>
                <button>
                <img className="w-7" src={sortIcon} alt="sort" />
                </button>
                <h3 className='text-gray-800'>Sort</h3>
            </div>
            <div onClick={() => {
                const price_menu = document.getElementById('price-menu');
                if(price_menu.style.display === 'flex'){
                    price_menu.style.display = 'none';
                }
                else{
                    price_menu.style.display = 'flex';
                }
            }}
             className='w-full relative h-full flex gap-3 cursor-pointer justify-center items-center rounded-xl border-1 border-gray-400 hover:bg-gray-200'>
                <button>
                <img className="w-5" src={tag} alt="filter" />
                </button>
                <h3 className='text-gray-800'>Price</h3>
            </div>
        </div>
            <div id="sort-menu" className="hidden bg-gray-200 w-full h-max rounded-lg flex-col gap-4 p-2 mt-2 shadow-sm">
                <h3 className="hover:bg-gray-300  p-1 w-full text-center">Featured</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Best Selling</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center"> Newest Arrivals</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Name: A -&gt; Z</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Name: Z -&gt; A</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Rating: High -&gt; Low</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Rating: Low -&gt; High</h3>
            </div>
            
            {/* Price menu - mirrors Sort menu format and includes presets + min/max inputs */}
            <div id="price-menu" className="hidden bg-gray-200 w-full h-max rounded-lg flex-col gap-4 p-2 mt-2 shadow-sm">
                <h3 className="hover:bg-gray-300  p-1 w-full text-center">All Prices</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Under $25</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">$25 to $50</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">$50 to $100</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">$100 to $500</h3>
                <h3 className="hover:bg-gray-300 p-1 w-full text-center">Above $500</h3>

                <div className="w-full border-t border-gray-300 mt-1 pt-2 flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2">
                        <label className="text-sm">Min</label>
                        <input id="price-min" type="number" min="0" placeholder="0" className="w-20 p-1 rounded-md text-sm border border-gray-400" />
                        <span className="text-sm">—</span>
                        <label className="text-sm">Max</label>
                        <input id="price-max" type="number" min="0" placeholder="500" className="w-20 p-1 rounded-md text-sm border border-gray-400" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <button onClick={(e) => {
                            // small inline handler: close menu after apply. Actual filtering logic should be wired into app state.
                            e.stopPropagation();
                            const menu = document.getElementById('price-menu');
                            if(menu) menu.style.display = 'none';
                        }} className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm">Apply</button>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            // reset inputs
                            const min = document.getElementById('price-min');
                            const max = document.getElementById('price-max');
                            if(min) min.value = '';
                            if(max) max.value = '';
                        }} className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">Reset</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {/* Layout: sidebar + product grid. On small screens the sidebar stacks above (tailwind classes can be adjusted). */}
                <div className="flex gap-4">
                    {/* Sidebar: categories and subcategories */}
                    <aside className="w-44 bg-white border border-gray-200 rounded-md p-2">
                        <h4 className="font-semibold mb-2">Shopwice Categories</h4>
                        <div className="flex flex-col gap-1">
                            {categories.map(cat => (
                                <div key={cat.name}>
                                    <button
                                        onClick={() => { setSelectedCategory(cat.name); setSelectedSubcategory(null) }}
                                        className={`w-full text-left p-1 rounded ${selectedCategory === cat.name ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}>
                                        {cat.name}
                                    </button>
                                    <div className="pl-3 mt-1 flex flex-col gap-1">
                                        {cat.subs.map(sub => (
                                            <button key={sub}
                                                onClick={() => { setSelectedCategory(cat.name); setSelectedSubcategory(sub) }}
                                                className={`text-sm text-left p-1 rounded ${selectedSubcategory === sub ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}>
                                                {sub}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button onClick={() => { setSelectedCategory(null); setSelectedSubcategory(null) }} className="mt-2 text-sm text-blue-600">Clear filters</button>
                        </div>
                    </aside>

                    {/* Product grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-gray-800 font-medium">Showing {filteredProducts.length} products</h3>
                            <p className="text-sm text-gray-600">Grid view</p>
                        </div>

                        <div id="listingobj" className="grid grid-cols-3 gap-3">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="flex flex-col items-center text-center p-2">
                                    <div className="w-20 h-20 mb-1 flex items-center justify-center">
                                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/120x120?text=No+Image'}} />
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-800 w-full truncate">{product.name}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                                        <span aria-hidden>★★★★☆</span>
                                        <span className="text-gray-600 text-xs">4.6</span>
                                    </div>
                                    <div className="text-gray-800 font-semibold text-sm mt-1">${product.price.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProductListing

