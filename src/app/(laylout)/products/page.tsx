import React from 'react'
import { IProduct } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore trending products and accessories',
}

const Products = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=20&skip=40', {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  const productsData: IProduct[] = data.products

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">Our Products</h1>
          <p className="text-gray-500 mt-2">
            Handpicked items for your daily needs and lifestyle.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-md object-cover h-48 w-full mb-3"
              />
              <h2 className="font-medium text-lg mb-1 truncate">{product.title}</h2>
              <p className="text-sm text-gray-600">${product.price}</p>
              <p className="text-xs text-gray-500 mt-1">Brand: {product.brand}</p>
              <p className="text-xs text-gray-500">Category: {product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Products
