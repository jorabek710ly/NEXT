import React from 'react'
import { IRecipe } from '@/types'
import RecipeCard from '@/components/Recipe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Fresh recipes and meal ideas',
}

const Recipes = async () => {
  const response = await fetch('https://dummyjson.com/recipes?limit=20', {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  const recipesData: IRecipe[] = data.recipes

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">Discover Recipes</h1>
          <p className="text-gray-500 mt-2">
            Handpicked dishes for your daily cooking inspiration.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipesData.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="rounded-md object-cover h-48 w-full mb-3"
              />
              <h2 className="font-medium text-lg mb-1">{recipe.name}</h2>
              <p className="text-sm text-gray-500">Serving {recipe.servings}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Recipes
