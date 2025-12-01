import { Link } from 'react-router-dom'
import React, { useState, useMemo } from 'react'
import cartIcon from '../assets/shopping-bag.png'
import filter from '../assets/filter.png'
import sortIcon from '../assets/arrow.png'
import discount from '../assets/discount.png'
import tag from '../assets/tag.png'
import samsungA06 from '../assets/shopwice/samsung-a06.webp'
import samsungTab from '../assets/shopwice/Samsung-Galaxy-Tab-S11-ultra.jpg'
import nikeAF1 from '../assets/shopwice/Nike-Air-Force-1-Low-White.jpg'
import nikeDunk from '../assets/shopwice/Nike-Dunk-Low-Retro-White-and-Black-Panda.png'
import tcl75 from '../assets/shopwice/tcl-75-inches-smart-tv-new.webp'
import westpointRice from '../assets/shopwice/Westpoint-WRCG-1817.B-Rice-Cooker.jpg'
import westpointFan from '../assets/shopwice/Westpoint-56inches-Ceiling-Fan-WCFUS-23111-jpg.avif'
import delronFridge from '../assets/shopwice/Delron-115-Litres-Display-Showcase-Fridge.webp'
import aventos from '../assets/shopwice/aventos-jpg.webp'
import avon from '../assets/shopwice/Avon-Far-Away-Rebel-Duo-Eau-de-Parfum-50ml-Body-Lotion-125ml-Notes-of-Chocolate-Toffee-and-Vanilla.jpg'
import hanslet from '../assets/shopwice/hanslet-tetd-lace-up-dervy-shoe.jpg'
import samsungZFlip from '../assets/shopwice/samsung-galaxy-z-flip-7_result-768x768.png'
import itel2163 from '../assets/shopwice/Itel-2163-Dual-Sim-With-Wireless-FM-Radio.jpg'
import itelA80 from '../assets/shopwice/itel-A80-white.png'
import playstation5 from '../assets/shopwice/playstation-5-console-digital-edition-slim-1tb-with-1-controller.webp'
import sonysoundbar from '../assets/shopwice/Sony-soundbar-ht-s100f.jpg'
import jblspeaker from '../assets/shopwice/JBL-Charge-5-Bluetooth-Speaker-2.jpg'
import nikelegend from '../assets/shopwice/Nike-Legend-Essential-2-1_result-768x768.png'
import nikeairmax from '../assets/shopwice/Nike-Air-Max-Infinity-2-Hasta-Athletic-Running-Shoes-5.webp'
import nikeSBDunk from '../assets/shopwice/Nike-Dunk-Low-Retro-Concord-sneaker-768x768.png'
import macbook2020 from '../assets/shopwice/Apple-2020-MacBook-Air-M1-13-inches-8GB-RAM-256GB-512GB-SSD-Storage-768x768.jpeg'
import iphone17 from '../assets/shopwice/Apple-iPhone-17-Pro-Max-Orange-front-and-back-for-Shopwice-Ghana-768x768.avif'
import airpods4 from '../assets/shopwice/Airpods-4_result.png'
import binatoneblender from '../assets/shopwice/1-68-1-680x680.jpg'
import binatoneiron from '../assets/shopwice/Binatone-Electric-Heavy-Steam-Iron-2200W.jpg'
import metaquest from '../assets/shopwice/Meta-Quest-2-—-Advanced-All-In-One-Virtual-Reality-Headset-b_result-768x768.png'
import mk1 from '../assets/shopwice/Mortal-Kombat-1-ps5_result.png'
import ps5pad from '../assets/shopwice/Sony-PS5-Dual-Sense-wireless-controller-white-768x772.webp'
import hpspectre from '../assets/shopwice/HP-Spectre-x360-2-in-1-Laptop-14-ef2023dx-7H4F0UA-768x768.png'
import samsungconditioner from '../assets/shopwice/Samsung-2.0HP-R410a-WindFree-Inverter-Air-Conditioner-768x768.webp'

const ProductListing = () => {
  // Product catalog
  const products = [
    { id: 1, name: "Samsung Galaxy A06 Dual SIM 6GB RAM 128GB ROM with 5000mAh Battery Capacity", price: 'GHS 1,790.00', image: samsungA06, category: "Electronics", subcategory: "Mobile Phones & Tablets", rating: 4.5, brand: "Samsung", inStock: true },
    { id: 2, name: "Samsung Galaxy Tab S11 Ultra 5G 12GB 256GB Ai Tablet 14.6 inches", price: 'GHS 18,900.00', image: samsungTab, category: "Electronics", subcategory: "Mobile Phones & Tablets", rating: 4.3, brand: "Samsung", inStock: true },
    { id: 3, name: "Nike Air Force 1 Low White", price: 'GHS 2,760.00', image: nikeAF1, category: "Fashion", subcategory: "Footwear", rating: 4.7, brand: "Nike", inStock: false },
    { id: 4, name: "Nike SB Dunk Low Retro White and Black Panda", price: 'GHS 2,179.99', image: nikeDunk, category: "Fashion", subcategory: "Footwear", rating: 4.6, brand: "Nike", inStock: true },
    { id: 5, name: "TCL 75P755 LED UHD 4K 75″ Smart Android Television", price: 'GHS 17,999.99', image: tcl75, category: "Electronics", subcategory: "Televisions", rating: 4.4, brand: "Tlc", inStock: true },
    { id: 6, name: "Westpoint WRCG-1817.B Rice Cooker", price: 'GHS 509.99', image: westpointRice, category: "Home & Kitchen", subcategory: "Cookers & Ovens", rating: 4.2, brand: "Westpoint", inStock: true },
    { id: 7, name: "Westpoint 56″ Ceiling Fan WCFUS-2311", price: 'GHS 309.99', image: westpointFan, category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.1, brand: "Westpoint", inStock: true },
    { id: 8, name: "Delron 115 Litres – Display Showcase Fridge", price: 'GHS 24.99', image: delronFridge, category: "Home & Kitchen", subcategory: "Refrigerators", rating: 4.8, brand: "Delron", inStock: false },
    { id: 9, name: "AVENTOS PERFUME FOR MEN", price: 'GHS 119.99', image: aventos, category: "Fashion", subcategory: "Accessories", rating: 4.9, brand: "Aventos", inStock: true },
    { id: 10, name: "Avon Far Away Rebel Set of 50ML and 125ML Body Lotion", price: 'GHS 59.99', image: avon, category: "Fashion", subcategory: "Accessories", rating: 4.3, brand: "Avon", inStock: true },
    { id: 11, name: "Hanslet Tetd Brogue Derby Shoe", price: 'GHS 289.99', image: hanslet, category: "Fashion", subcategory: "Footwear", rating: 4.3, brand: "Hanslet", inStock: true },
    { id: 12, name: "Samsung Galaxy Z Flip 7 12GB RAM 256GB ROM 6.9 inches Super AMOLED Screen Display", price: 'GHS 18,159.99', image: samsungZFlip, category: "Electronics", subcategory: "Mobile Phones & Tablets", rating: 4.3, brand: "Samsung", inStock: true },
    { id: 13, name: "Itel 2163 Dual Sim With Wireless and FM Radio", price: 'GHS 159.99', image: itel2163, category: "Electronics", subcategory: "Mobile Phones & Tablets", rating: 4.3, brand: "Itel", inStock: true },
    { id: 14, name: "Itel A80 3GB(+ 5GB Extended) RAM", price: 'GHS 1,159.99', image: itelA80, category: "Electronics", subcategory: "Mobile Phones & Tablets", rating: 4.3, brand: "Itel", inStock: true },
    { id: 15, name: "Playstation 5 Console Digital Edition Slim 1TB ", price: 'GHS 7,159.99', image: playstation5, category: "Electronics", subcategory: "Consoles & Games", rating: 4.3, brand: "Playstation", inStock: true },
    { id: 16, name: "Sony Soundbar HT S100F", price: 'GHS 2,159.99', image: sonysoundbar, category: "Electronics", subcategory: "Audio", rating: 4.3, brand: "Sony", inStock: true },
    { id: 17, name: "JBL Charge 5 Bluetooth Speaker", price: 'GHS 1,159.99', image: jblspeaker, category: "Electronics", subcategory: "Audio", rating: 4.3, brand: "JBL", inStock: true },
    { id: 18, name: "Nike Legend Black University Red Essential 2 Training Sneaker", price: 'GHS 1,259.99', image: nikelegend, category: "Fashion", subcategory: "Footwear", rating: 4.3, brand: "Nike", inStock: true },
    { id: 19, name: "Nike Air Max Infinity 2 Hasta Athletic Running Sneaker", price: 'GHS 2,159.99', image: nikeairmax, category: "Fashion", subcategory: "Footwear", rating: 4.3, brand: "Nike", inStock: true },
    { id: 20, name: "Nike SB Dunk Low Retro Concord Sneaker", price: 'GHS 2,759.99', image: nikeSBDunk, category: "Fashion", subcategory: "Footwear", rating: 4.3, brand: "Nike", inStock: true },
    { id: 21, name: "Apple 2020 MacBook Air M1 13 inches 8GB RAM, 256GB 512GB SSD Storage", price: 'GHS 13,159.99 - GHS 16, 500.00', image: macbook2020, category: "Computers & Accessories", subcategory: "Laptops", rating: 4.3, brand: "Apple", inStock: true },
    { id: 22, name: "Apple iPhone 17 Pro Max e-SIM Factory Unlocked 12GB 256GB 5G, 6.9 inches with iOS 26 A19 Pro Chipset 6 Core GPUr", price: 'GHS 27,159.99', image: iphone17, category: "Electronics", subcategory: "Mobile Phones & Tablets", rating: 4.3, brand: "Apple", inStock: true },
    { id: 23, name: "Apple AirPods 4 Active Noise Cancellation", price: 'GHS 4,159.99', image: airpods4, category: "Electronics", subcategory: "Audio", rating: 4.3, brand: "Apple", inStock: true },
    { id: 24, name: "Binatone BLG - 605SS Blender", price: 'GHS 1,159.99', image: binatoneblender, category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.3, brand: "Binatone", inStock: true },
    { id: 25, name: "Binatone Electric Heavy Steam Iron 2200W", price: 'GHS 1,159.99', image: binatoneiron, category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.3, brand: "Binatone", inStock: true },
    { id: 26, name: "Meta Quest 2 256GB", price: 'GHS 1,159.99', image: metaquest, category: "Electronics", subcategory: "Consoles & Games", rating: 4.3, brand: "Meta", inStock: true },
    { id: 27, name: "Mortal Kombat 1 - PS5", price: 'GHS 1,159.99', image: mk1, category: "Electronics", subcategory: "Consoles & Games", rating: 4.3, brand: "Playstation", inStock: true },
    { id: 28, name: "Sony PS5 Dual Sense wireless controller", price: 'GHS 1,159.99', image: ps5pad, category: "Electronics", subcategory: "Consoles & Gaming", rating: 4.3, brand: "Sony", inStock: true },
    { id: 29, name: "HP Spectre X360 2-in-1 Laptop 14″ Core i7 16GB RAM 1TB SSD", price: 'GHS 24,159.99', image: hpspectre, category: "Computers & Accessories", subcategory: "Laptops", rating: 4.3, brand: "HP", inStock: true },
    { id: 30, name: "Samsung 2.0HP R410a WindFree Inverter Air Conditioner", price: 'GHS 16,159.99', image: samsungconditioner, category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.3, brand: "Samsung", inStock: true }
  ];

  // Category structure
  const categories = [
    {
      name: 'Electronics',
      subs: [
        'Mobile Phones & Tablets',
        'Mobile Accessories',
        'Consoles & Games',
        'Audio',
        'Power Banks',
        'Memory Cards',
        'Chargers & Cables',
        'Televisions',
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

  // Normalize prices and extract brands
  const normalizedProducts = useMemo(() => {
    return products.map(product => {
      const priceNum = typeof product.price === 'string'
        ? parseFloat(product.price.replace(/[^0-9.-]+/g, ''))
        : Number(product.price || 0)

      return {
        ...product,
        priceNum: Number.isFinite(priceNum) ? priceNum : 0
      }
    })
  }, [products])

  // Format numbers with comma separators and two decimals
  const formatCurrency = (value) => {
    const num = Number(value)
    if (!Number.isFinite(num)) return value
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const brands = [...new Set(normalizedProducts.map(product => product.brand))].sort();

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [sortOption, setSortOption] = useState('featured')
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [showPriceMenu, setShowPriceMenu] = useState(false)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [openCategories, setOpenCategories] = useState({})
  
  // Filter states
  const [selectedBrands, setSelectedBrands] = useState([])
  const [ratingFilter, setRatingFilter] = useState(0)
  const [availabilityFilter, setAvailabilityFilter] = useState('all')

  // Toggle category dropdown
  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }))
  }

  // Handle brand selection
  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  // Handle rating filter
  const handleRatingFilter = (rating) => {
    setRatingFilter(rating === ratingFilter ? 0 : rating)
  }

  // Handle availability filter
  const handleAvailabilityFilter = (availability) => {
    setAvailabilityFilter(availability)
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedBrands([])
    setRatingFilter(0)
    setAvailabilityFilter('all')
    setPriceRange({ min: '', max: '' })
    setSelectedCategory(null)
    setSelectedSubcategory(null)
    setSortOption('featured')
  }

  // Sort products based on selected option
  const sortedAndFilteredProducts = useMemo(() => {
    let filtered = normalizedProducts.filter(p => {
      // Category/Subcategory filtering
      const categoryMatch = !selectedCategory || p.category === selectedCategory
      const subcategoryMatch = !selectedSubcategory || p.subcategory === selectedSubcategory || p.subcategory === selectedSubcategory.replace(/ & /g, ' & ')
      
      // Price filtering
      const minPrice = priceRange.min ? parseFloat(priceRange.min) : 0
      const maxPrice = priceRange.max ? parseFloat(priceRange.max) : Infinity
      const priceMatch = p.priceNum >= minPrice && p.priceNum <= maxPrice
      
      // Brand filtering
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand)
      
      // Rating filtering
      const ratingMatch = ratingFilter === 0 || p.rating >= ratingFilter
      
      // Availability filtering
      const availabilityMatch = 
        availabilityFilter === 'all' || 
        (availabilityFilter === 'in-stock' && p.inStock) ||
        (availabilityFilter === 'out-of-stock' && !p.inStock)
      
      return categoryMatch && subcategoryMatch && priceMatch && brandMatch && ratingMatch && availabilityMatch
    })

    // Apply sorting
    switch (sortOption) {
      case 'featured':
        // Default order - keep original order
        break
      case 'best-selling':
        // Simulate best selling by rating/price (you can replace with actual sales data)
        filtered.sort((a, b) => (b.priceNum / 10 + b.rating) - (a.priceNum / 10 + a.rating))
        break
      case 'newest':
        // Newest first (higher IDs are newer)
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'price-low-high':
        filtered.sort((a, b) => a.priceNum - b.priceNum)
        break
      case 'price-high-low':
        filtered.sort((a, b) => b.priceNum - a.priceNum)
        break
      case 'rating-high-low':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'rating-low-high':
        filtered.sort((a, b) => a.rating - b.rating)
        break
      default:
        break
    }

    return filtered
  }, [normalizedProducts, selectedCategory, selectedSubcategory, priceRange, sortOption, selectedBrands, ratingFilter, availabilityFilter])

  const handlePriceApply = () => {
    const minInput = document.getElementById('price-min')
    const maxInput = document.getElementById('price-max')
    setPriceRange({
      min: minInput.value,
      max: maxInput.value
    })
    setShowPriceMenu(false)
  }

  const handlePriceReset = () => {
    const minInput = document.getElementById('price-min')
    const maxInput = document.getElementById('price-max')
    if(minInput) minInput.value = ''
    if(maxInput) maxInput.value = ''
    setPriceRange({ min: '', max: '' })
  }

  const handlePricePreset = (preset) => {
    switch(preset) {
      case 'under-25':
        setPriceRange({ min: '', max: '25' })
        break
      case '25-50':
        setPriceRange({ min: '25', max: '50' })
        break
      case '50-100':
        setPriceRange({ min: '50', max: '100' })
        break
      case '100-500':
        setPriceRange({ min: '100', max: '500' })
        break
      case 'above-500':
        setPriceRange({ min: '500', max: '' })
        break
      default:
        setPriceRange({ min: '', max: '' })
    }
    setShowPriceMenu(false)
  }

  const handleSortSelect = (option) => {
    setSortOption(option)
    setShowSortMenu(false)
  }

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName)
    setSelectedSubcategory(null)
    // Auto-open the category when selected
    if (!openCategories[categoryName]) {
      setOpenCategories(prev => ({
        ...prev,
        [categoryName]: true
      }))
    }
  }

  const handleSubcategorySelect = (categoryName, subcategory) => {
    setSelectedCategory(categoryName)
    setSelectedSubcategory(subcategory)
  }

  // Count active filters
  const activeFilterCount = 
    (selectedBrands.length > 0 ? 1 : 0) +
    (ratingFilter > 0 ? 1 : 0) +
    (availabilityFilter !== 'all' ? 1 : 0) +
    (priceRange.min || priceRange.max ? 1 : 0)

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section - Centered */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 px-4">
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative">
              <input 
                className='w-full border-2 border-gray-300 px-12 h-14 text-lg rounded-full shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300' 
                type="search" 
                placeholder="Search products, brands, and categories..." 
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <Link to="/cart" className="relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500">
            <img className='w-6 h-6' src={cartIcon} alt="cart" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </Link>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {/* Filter Button */}
          <div className='relative group'>
            <div 
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className='flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 border border-gray-200 hover:border-orange-300'
            >
              <img className="w-5" src={filter} alt="filter" />
              <h3 className='text-gray-800 font-medium'>Filter</h3>
              {activeFilterCount > 0 && (
                <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </div>
            
            {/* Filter Menu */}
            {showFilterMenu && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl z-20 flex-col p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-800">Filters</h3>
                  <button 
                    onClick={clearAllFilters}
                    className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Brand</h4>
                  <div className="max-h-40 overflow-y-auto">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-3 mb-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Customer Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <button
                        key={rating}
                        onClick={() => handleRatingFilter(rating)}
                        className={`flex items-center gap-2 w-full p-2 rounded-lg transition-colors duration-200 ${
                          ratingFilter === rating ? 'bg-orange-50 text-orange-700' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">& above</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Availability</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Products' },
                      { value: 'in-stock', label: 'In Stock' },
                      { value: 'out-of-stock', label: 'Out of Stock' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="availability"
                          value={option.value}
                          checked={availabilityFilter === option.value}
                          onChange={() => handleAvailabilityFilter(option.value)}
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowFilterMenu(false)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Apply Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Sort Button */}
          <div className='relative group'>
            <div 
              onClick={() => setShowSortMenu(!showSortMenu)}
              className='flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 border border-gray-200 hover:border-orange-300'
            >
              <img 
                className="w-5 transform transition-transform duration-300" 
                src={sortIcon} 
                alt="sort" 
                style={{ transform: showSortMenu ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
              <h3 className='text-gray-800 font-medium'>Sort</h3>
            </div>
            
            {/* Sort Menu */}
            {showSortMenu && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-20 flex-col p-3 border border-gray-200">
                <h3 
                  onClick={() => handleSortSelect('featured')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'featured' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Featured
                </h3>
                <h3 
                  onClick={() => handleSortSelect('best-selling')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'best-selling' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Best Selling
                </h3>
                <h3 
                  onClick={() => handleSortSelect('newest')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'newest' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Newest Arrivals
                </h3>
                <h3 
                  onClick={() => handleSortSelect('name-asc')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'name-asc' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Name: A → Z
                </h3>
                <h3 
                  onClick={() => handleSortSelect('name-desc')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'name-desc' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Name: Z → A
                </h3>
                <h3 
                  onClick={() => handleSortSelect('price-low-high')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'price-low-high' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Price: Low → High
                </h3>
                <h3 
                  onClick={() => handleSortSelect('price-high-low')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'price-high-low' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Price: High → Low
                </h3>
                <h3 
                  onClick={() => handleSortSelect('rating-high-low')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'rating-high-low' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Rating: High → Low
                </h3>
                <h3 
                  onClick={() => handleSortSelect('rating-low-high')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    sortOption === 'rating-low-high' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Rating: Low → High
                </h3>
              </div>
            )}
          </div>

          {/* Price Button */}
          <div className='relative group'>
            <div 
              onClick={() => setShowPriceMenu(!showPriceMenu)}
              className='flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 border border-gray-200 hover:border-orange-300'
            >
              <img className="w-5" src={tag} alt="price" />
              <h3 className='text-gray-800 font-medium'>Price</h3>
            </div>
            
            {/* Price Menu */}
            {showPriceMenu && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl z-20 flex-col p-4 border border-gray-200">
                <h3 
                  onClick={() => handlePricePreset('all')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    !priceRange.min && !priceRange.max ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  All Prices
                </h3>
                <h3 
                  onClick={() => handlePricePreset('under-25')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    priceRange.max === '25' && !priceRange.min ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Under $25
                </h3>
                <h3 
                  onClick={() => handlePricePreset('25-50')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    priceRange.min === '25' && priceRange.max === '50' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  $25 to $50
                </h3>
                <h3 
                  onClick={() => handlePricePreset('50-100')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    priceRange.min === '50' && priceRange.max === '100' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  $50 to $100
                </h3>
                <h3 
                  onClick={() => handlePricePreset('100-500')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    priceRange.min === '100' && priceRange.max === '500' ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  $100 to $500
                </h3>
                <h3 
                  onClick={() => handlePricePreset('above-500')}
                  className={`p-3 rounded-lg w-full text-left transition-colors duration-200 cursor-pointer ${
                    priceRange.min === '500' && !priceRange.max ? 'bg-orange-50 text-orange-700 font-medium' : 'hover:bg-orange-50'
                  }`}
                >
                  Above $500
                </h3>

                <div className="w-full border-t border-gray-200 mt-2 pt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 block mb-1">Min Price</label>
                      <input 
                        id="price-min" 
                        type="number" 
                        min="0" 
                        placeholder="0" 
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                        className="w-full p-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200" 
                      />
                    </div>
                    <span className="text-gray-400 mt-5">—</span>
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 block mb-1">Max Price</label>
                      <input 
                        id="price-max" 
                        type="number" 
                        min="0" 
                        placeholder="500" 
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                        className="w-full p-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200" 
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button 
                      onClick={handlePriceApply}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex-1"
                    >
                      Apply
                    </button>
                    <button 
                      onClick={handlePriceReset}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex-1"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Close menus when clicking outside */}
        {(showSortMenu || showPriceMenu || showFilterMenu) && (
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => {
              setShowSortMenu(false)
              setShowPriceMenu(false)
              setShowFilterMenu(false)
            }}
          />
        )}

        {/* Active Filters Display */}
        {(selectedBrands.length > 0 || ratingFilter > 0 || availabilityFilter !== 'all' || priceRange.min || priceRange.max) && (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-700">Active Filters:</h4>
              <button 
                onClick={clearAllFilters}
                className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedBrands.map(brand => (
                <span key={brand} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {brand}
                  <button onClick={() => handleBrandToggle(brand)} className="hover:text-orange-900">×</button>
                </span>
              ))}
              {ratingFilter > 0 && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {ratingFilter}+ Stars
                  <button onClick={() => setRatingFilter(0)} className="hover:text-orange-900">×</button>
                </span>
              )}
              {availabilityFilter !== 'all' && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {availabilityFilter === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                  <button onClick={() => setAvailabilityFilter('all')} className="hover:text-orange-900">×</button>
                </span>
              )}
              {(priceRange.min || priceRange.max) && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {`GHS ${priceRange.min ? formatCurrency(priceRange.min) : '0.00'} - GHS ${priceRange.max ? formatCurrency(priceRange.max) : '∞'}`}
                  <button onClick={() => setPriceRange({ min: '', max: '' })} className="hover:text-orange-900">×</button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-md p-6 border border-gray-200 h-fit lg:sticky lg:top-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-lg text-gray-800">Categories</h4>
              {(selectedCategory || selectedSubcategory) && (
                <button 
                  onClick={() => { 
                    setSelectedCategory(null); 
                    setSelectedSubcategory(null);
                    setOpenCategories({});
                  }} 
                  className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200"
                >
                  Clear all
                </button>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <div key={cat.name} className="border-b border-gray-100 last:border-b-0 pb-2 last:pb-0">
                  <button
                    onClick={() => toggleCategory(cat.name)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      selectedCategory === cat.name 
                        ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <span className="font-medium">{cat.name}</span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        openCategories[cat.name] ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Subcategories - Only show when category is open */}
                  {openCategories[cat.name] && (
                    <div className="pl-2 mt-2 flex flex-col gap-1 animate-fadeIn">
                      {cat.subs.map(sub => (
                        <button 
                          key={sub}
                          onClick={() => handleSubcategorySelect(cat.name, sub)}
                          className={`text-sm text-left p-2 rounded-lg transition-colors duration-200 ${
                            selectedSubcategory === sub 
                              ? 'bg-orange-100 text-orange-700 font-medium' 
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-gray-800 font-bold text-xl">
                  {selectedCategory ? selectedCategory : 'All Products'}
                  {selectedSubcategory && ` / ${selectedSubcategory}`}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Showing {sortedAndFilteredProducts.length} of {normalizedProducts.length} products
                  {sortOption !== 'featured' && ` • Sorted by ${sortOption.replace('-', ' ')}`}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-200">
                <span className="text-gray-600 text-sm">Grid view</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            {sortedAndFilteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-200">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1m4 0h-4" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                <button 
                  onClick={clearAllFilters}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedAndFilteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden group"
                  >
                    <div className="p-4 flex flex-col items-center">
                      <div className="relative">
                        <div className="w-full h-48 sm:h-56 mb-4 flex items-center justify-center bg-gray-50 rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                          <img 
                            src={product.image || 'https://via.placeholder.com/320x240?text=No+Image'} 
                            alt={product.name} 
                            className="w-full h-full object-contain" 
                            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/320x240?text=No+Image' }} 
                          />
                        </div>
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xs md:text-sm font-semibold text-gray-800 text-center mb-1 line-clamp-2 leading-tight min-h-[3.25rem] break-words">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-center w-full gap-1 text-yellow-500 text-sm mb-2">
                        <span aria-hidden>★★★★☆</span>
                        <span className="text-gray-600 text-xs ml-1">{product.rating}</span>
                      </div>
                      
                      <div className="flex items-center justify-center w-full mt-2 gap-3">
                        <div className="text-gray-800 font-bold text-lg">{`GHS ${formatCurrency(product.priceNum)}`}</div>
                        <button 
                          className={`p-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg ${
                            product.inStock 
                              ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!product.inStock}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ProductListing