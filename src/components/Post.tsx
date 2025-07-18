import React from 'react'
import { IPost } from '@/types'

export const LoadingPosts = ({ cardsPerPage }: { cardsPerPage: number }) => {
  const loadingArray = Array(cardsPerPage).fill('')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loadingArray.map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl p-4 animate-pulse border border-gray-200 shadow-sm space-y-2"
        >
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          <div className="h-3 bg-gray-300 rounded w-4/5"></div>
        </div>
      ))}
    </div>
  )
}

const Post = ({ postsData }: { postsData: IPost[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {postsData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl p-4 border border-gray-200 shadow hover:shadow-md transition flex flex-col gap-2"
        >
          <h3 className="text-gray-800 font-semibold text-sm truncate">{item.title}</h3>
          <p className="text-gray-600 text-xs line-clamp-4">{item.body}</p>
          <div className="mt-auto pt-2 text-xs text-blue-500 cursor-pointer hover:underline">
            Read more
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Post)
