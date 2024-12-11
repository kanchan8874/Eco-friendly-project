// import Link from 'next/link';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <><header className="mb-8 border-b">
    <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
      {/* logo - start */}
      <a
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
      >
        <div>
          <h1>hii</h1>
        </div>
 

      </a>
      {/* logo - end */}
      {/* nav - start */}
      <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        <Link href="/" className="text-lg font-semibold text-indigo-500">
          Home
        </Link>
        <Link
          href="/contact-us"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Contact
        </Link>
        <Link
          href="/about-us"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          About
        </Link>
        <Link
          href="/login"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Login
        </Link>
        <a
          href="/addProduct"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          AddProduct
        </a>
        <Link
          href="/manageProduct"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Manage
        </Link>
      </nav>
      {/* nav - end */}
      {/* buttons - start */}
      <div className="flex divide-x border-r sm:border-l">
        <a
          href="#"
          className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="hidden text-xs font-semibold text-gray-500 sm:block">
            Wishlist
          </span>
        </a>
        <Link
          href="/signup"
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="hidden text-xs font-semibold text-gray-500 sm:block">
            Account
          </span>
        </Link>
        <a
          href="#"
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="hidden text-xs font-semibold text-gray-500 sm:block">
            Cart
          </span>
        </a>
        <button
          type="button"
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden text-xs font-semibold text-gray-500 sm:block">
            Menu
          </span>
        </button>
      </div>
      {/* buttons - end */}
    </div>
  </header>
      
    </>
  )
}
export default Navbar;

