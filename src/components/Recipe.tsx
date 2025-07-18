import React from 'react'
import { IRecipe } from '@/types'
import Image from 'next/image'

export const LoadingRecipes = ({ cardPerPage }: { cardPerPage: number }) => {
  const loadingArray = Array(cardPerPage).fill('')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loadingArray.map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl overflow-hidden animate-pulse border border-gray-200"
        >
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Recipe = ({ recipesData }: { recipesData: IRecipe[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipesData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition border border-gray-200"
        >
          <div className="overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={250}
              className="w-full h-40 object-cover hover:scale-105 transition duration-200"
            />
          </div>
          <div className="p-4 flex flex-col gap-1">
            <p className="text-gray-700 text-sm font-semibold">{item.name}</p>
            <span className="text-xs text-gray-500">Servings: {item.servings}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Recipe)
