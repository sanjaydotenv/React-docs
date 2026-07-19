import React, { useContext } from 'react'
import { MyContext } from './context/MyContext'

const Products = () => {

  const {productsData , setCartItems}  = useContext(MyContext)

  return (
    <div className='flex flex-wrap gap-10 '>
      {productsData.map((product) => {
        return <div key={product.id} className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="h-64 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count} Reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        <button onClick={() => setCartItems(prev => [...prev , product])} className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
      })}
    </div>
  )
}

export default Products
