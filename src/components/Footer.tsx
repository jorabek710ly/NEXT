import Link from 'next/link'
import React from 'react'
import { MailOutlined, PhoneOutlined, InstagramOutlined, SendOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-2">
            <PhoneOutlined /> +998 94 939 85 96
          </p>
          <p className="flex items-center gap-2">
            <SendOutlined /> Telegram: +998 94 939 85 96
          </p>
          <p className="flex items-center gap-2">
            <InstagramOutlined /> Insta: jorabek.710lv
          </p>
          <p className="flex items-center gap-2">
            <MailOutlined /> jorabekabdurashidov555@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/products" className="hover:text-blue-500">Products</Link></li>
            <li><Link href="/posts" className="hover:text-blue-500">Posts</Link></li>
            <li><Link href="/comments" className="hover:text-blue-500">Comments</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="https://dummyjson.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">DummyJSON API</a></li>
            <li><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Next.js</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">TailwindCSS</a></li>
            <li><a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Vercel Hosting</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <GithubOutlined /> <a href="https://github.com/" target="_blank" className="hover:text-blue-500">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <GlobalOutlined /> <a href="https://openai.com/" target="_blank" className="hover:text-blue-500">OpenAI</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; 2025 All rights reserved — Developed by Jorabek
      </div>
    </footer>
  )
}

export default React.memo(Footer)
