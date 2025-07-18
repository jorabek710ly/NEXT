import React from 'react'
import { IProduct } from '@/types'
import Image from 'next/image'

export const LoadingProducts = ({ cardPerPage }: { cardPerPage: number }) => {
  const loadingArray = Array(cardPerPage).fill('')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loadingArray.map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl overflow-hidden animate-pulse border border-gray-200 shadow-sm"
        >
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Product = ({ productsData }: { productsData: IProduct[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-md transition group"
        >
          <div className="relative overflow-hidden">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-40 object-contain transition duration-200 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
              ${item.price}
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-800 text-sm font-semibold truncate">{item.title}</p>
            <span className="text-xs text-gray-500 block mt-1">Category: {item.category || 'N/A'}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Product)
