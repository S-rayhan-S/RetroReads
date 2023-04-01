import React from 'react'

export default function About() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
          <p className="text-center font-bold text-green-500 md:text-left">Who we are</p>
  
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Operational since 1967</h1>
  
          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus accusamus esse cum, praesentium laudantium enim pariatur magnam accusantium illum animi? Quos quisquam at laborum eius?</p>
        </div>
        <div>
          <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt=" by Martin Sanchez" className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>
  
          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis a suscipit similique cum obcaecati maxime, fugit officia sunt. Laudantium est repellendus, necessitatibus totam, deleniti distinctio aliquid assumenda dolore voluptas molestiae perspiciatis temporibus ex ea.</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
