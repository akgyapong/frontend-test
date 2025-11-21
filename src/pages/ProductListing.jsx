import { Link } from 'react-router-dom'
import React, { useState, useMemo } from 'react'
import cartIcon from '../assets/shopping-bag.png'
import filter from '../assets/filter.png'
import sortIcon from '../assets/arrow.png'
import discount from '../assets/discount.png'
import tag from '../assets/tag.png'

const ProductListing = () => {
  // Product catalog
  const products = [
    { id: 1, name: "Wireless Earbuds", price: 49.99, image: "/img/earbuds.jpg", category: "Electronics", subcategory: "Mobile Accessories", rating: 4.5, brand: "SoundMax", inStock: true },
    { id: 2, name: "Smartwatch Pro", price: 129.99, image: "/img/smartwatch.jpg", category: "Electronics", subcategory: "Mobile Accessories", rating: 4.3, brand: "TechWear", inStock: true },
    { id: 3, name: "Gaming Mouse", price: 29.99, image: "/img/mouse.jpg", category: "Computers & Accessories", subcategory: "Keyboards & Mice", rating: 4.7, brand: "GamePro", inStock: false },
    { id: 4, name: "Mechanical Keyboard", price: 79.99, image: "/img/keyboard.jpg", category: "Computers & Accessories", subcategory: "Keyboards & Mice", rating: 4.6, brand: "ClickMaster", inStock: true },
    { id: 5, name: "4K Monitor", price: 299.99, image: "/img/monitor.jpg", category: "Computers & Accessories", subcategory: "Monitors", rating: 4.4, brand: "ViewPlus", inStock: true },
    { id: 6, name: "Office Chair", price: 149.99, image: "/img/chair.jpg", category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.2, brand: "ComfortSeat", inStock: true },
    { id: 7, name: "Bluetooth Speaker", price: 39.99, image: "/img/speaker.jpg", category: "Electronics", subcategory: "Audio", rating: 4.1, brand: "SoundMax", inStock: true },
    { id: 8, name: "Laptop Stand", price: 24.99, image: "/img/stand.jpg", category: "Computers & Accessories", subcategory: "Laptop Bags & Accessories", rating: 4.8, brand: "ErgoTech", inStock: false },
    { id: 9, name: "Portable SSD 1TB", price: 119.99, image: "/img/ssd.jpg", category: "Computers & Accessories", subcategory: "Storage Devices", rating: 4.9, brand: "FastDrive", inStock: true },
    { id: 10, name: "Backpack Pro", price: 59.99, image: "/img/backpack.jpg", category: "Computers & Accessories", subcategory: "Laptop Bags & Accessories", rating: 4.3, brand: "TravelGear", inStock: true },
    { id: 11, name: "Running Shoes", price: 89.99, image: "/img/shoes.jpg", category: "Fashion", subcategory: "Footwear", rating: 4.5, brand: "RunFast", inStock: true },
    { id: 12, name: "Fitness Band", price: 34.99, image: "/img/band.jpg", category: "Electronics", subcategory: "Mobile Accessories", rating: 4.0, brand: "FitLife", inStock: true },
    { id: 13, name: "LED Desk Lamp", price: 19.99, image: "/img/lamp.jpg", category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.6, brand: "BrightHome", inStock: true },
    { id: 14, name: "Wireless Charger", price: 14.99, image: "/img/charger.jpg", category: "Electronics", subcategory: "Mobile Accessories", rating: 4.2, brand: "PowerUp", inStock: false },
    { id: 15, name: "Coffee Maker", price: 69.99, image: "/img/coffeemaker.jpg", category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.7, brand: "BrewMaster", inStock: true },
    { id: 16, name: "Air Fryer", price: 99.99, image: "/img/airfryer.jpg", category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.4, brand: "CookEasy", inStock: true },
    { id: 17, name: "Electric Kettle", price: 24.99, image: "/img/kettle.jpg", category: "Home & Kitchen", subcategory: "Home Appliances", rating: 4.3, brand: "QuickBoil", inStock: true },
    { id: 18, name: "Water Bottle Steel", price: 12.99, image: "/img/bottle.jpg", category: "Computers & Accessories", subcategory: "Laptop Bags & Accessories", rating: 4.8, brand: "HydroFlask", inStock: true },
    { id: 19, name: "Sunglasses Classic", price: 22.99, image: "/img/sunglasses.jpg", category: "Fashion", subcategory: "Accessories", rating: 4.1, brand: "SunStyle", inStock: true },
    { id: 20, name: "Graphic T-Shirt", price: 15.99, image: "/img/tshirt.jpg", category: "Fashion", subcategory: "Clothing", rating: 4.2, brand: "UrbanWear", inStock: false },
    { id: 21, name: "Wireless Headphones", price: 89.99, image: "/img/headphones.jpg", category: "Electronics", subcategory: "Audio", rating: 4.7, brand: "SoundMax", inStock: true },
  ];

  // Category structure
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

  // Brands extracted from products
  const brands = [...new Set(products.map(product => product.brand))].sort();

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
    let filtered = products.filter(p => {
      // Category/Subcategory filtering
      const categoryMatch = !selectedCategory || p.category === selectedCategory
      const subcategoryMatch = !selectedSubcategory || p.subcategory === selectedSubcategory || p.subcategory === selectedSubcategory.replace(/ & /g, ' & ')
      
      // Price filtering
      const minPrice = priceRange.min ? parseFloat(priceRange.min) : 0
      const maxPrice = priceRange.max ? parseFloat(priceRange.max) : Infinity
      const priceMatch = p.price >= minPrice && p.price <= maxPrice
      
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
        filtered.sort((a, b) => (b.price / 10 + b.rating) - (a.price / 10 + a.rating))
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
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price)
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
  }, [selectedCategory, selectedSubcategory, priceRange, sortOption, selectedBrands, ratingFilter, availabilityFilter])

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
                  ${priceRange.min || 0} - ${priceRange.max || '∞'}
                  <button onClick={() => setPriceRange({ min: '', max: '' })} className="hover:text-orange-900">×</button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-md p-6 border border-gray-200 h-fit sticky top-4">
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
                  Showing {sortedAndFilteredProducts.length} of {products.length} products
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
                        <div className="w-40 h-40 mb-4 flex items-center justify-center bg-gray-50 rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="max-w-full max-h-full object-contain" 
                            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/160x160?text=No+Image' }} 
                          />
                        </div>
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-base font-semibold text-gray-800 text-center mb-2 line-clamp-2 h-12 flex items-center justify-center">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                        <span aria-hidden>★★★★☆</span>
                        <span className="text-gray-600 text-xs ml-1">{product.rating}</span>
                      </div>
                      
                      <div className="flex items-center justify-between w-full mt-2">
                        <div className="text-gray-800 font-bold text-lg">${product.price.toFixed(2)}</div>
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