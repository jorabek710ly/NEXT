import React from 'react'
import { IPost } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Latest posts and articles',
}

const Posts = async () => {
  const response = await fetch('https://dummyjson.com/posts?limit=20', {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  const postsData: IPost[] = data.posts

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">Latest Posts</h1>
          <p className="text-gray-500 mt-2">Articles & stories shared by users</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {postsData.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between"
            >
              <h2 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">{post.body}</p>
              <div className="mt-auto">
                <p className="text-xs text-gray-500">User ID: {post.userId}</p>
                <p className="text-xs text-gray-500 truncate">
                  Tags: {post.tags.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Posts
