import React from 'react'
import { IComment } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comments',
  description: 'User comments and opinions',
}

const Comments = async () => {
  const response = await fetch('https://dummyjson.com/comments?limit=30', {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  const commentsData: IComment[] = data.comments

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">User Comments</h1>
          <p className="text-gray-500 mt-2">
            Real feedback and opinions from users.
          </p>
        </header>

        <div className="space-y-4">
          {commentsData.map((comment) => (
            <div
              key={comment.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-gray-200"
            >
              <p className="text-sm text-gray-700 mb-2">"{comment.body}"</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>User: {comment.user.username}</span>
                <span>Post ID: {comment.postId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Comments
