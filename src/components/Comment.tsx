import React from 'react'
import { IComment } from '@/types'

export const LoadingComments = ({ cardsPerPage }: { cardsPerPage: number }) => {
  const loadingArray = Array(cardsPerPage).fill('')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {loadingArray.map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg p-4 animate-pulse flex flex-col gap-2 border"
        >
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/4"></div>
          <div className="flex justify-between mt-auto">
            <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
            <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Comment = ({ commentsData }: { commentsData: IComment[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {commentsData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-4 shadow hover:shadow-md transition flex flex-col justify-between border border-gray-200"
        >
          <p className="text-sm text-gray-700 mb-2 line-clamp-2">"{item.body}"</p>
          <div className="flex justify-between text-xs text-gray-500 mt-auto">
            <span>User: {item.user.username}</span>
            <span>Post ID: {item.postId}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Comment)
