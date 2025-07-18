"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserOutlined } from '@ant-design/icons'

const Header = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', name: 'Home' },
    { href: '/products', name: 'Products' },
    { href: '/comments', name: 'Comments' },
    { href: '/posts', name: 'Posts' },
    { href: '/recipes', name: 'Recipes' },
  ]

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-blue-500 text-sm font-medium transition ${
                  pathname === item.href ? 'border-b-2 border-blue-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href="/login">
            <button
              className={`flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full hover:border-blue-500 hover:text-blue-500 transition ${
                pathname === '/login' ? 'border-blue-500 text-blue-500' : 'text-gray-700'
              }`}
            >
              <UserOutlined />
              <span className="text-sm">Login</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header)
