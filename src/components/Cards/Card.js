import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <div class="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <Link class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to="/description">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://itbook.store/img/books/9781098121228.png" alt="product" />
    <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://bookish.pages.dev/img/hero-img2.jpg" alt="product" />
    
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </Link>
  <div class="mt-4 px-5 pb-5">
    <Link to="/description">
      <h5 class="text-xl tracking-tight text-slate-900">Python Data Science Handbook</h5>
    </Link>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">$449</span>
        <span class="text-sm text-slate-900 line-through">$699</span>
      </p>
    </div>
    <Link to="/" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</Link
    >
  </div>
</div>

  )
}
