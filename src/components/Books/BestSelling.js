import React from "react";
import Card from "../Cards/Card";
import Search from "../Search/Search";

export default function BestSelling() {
  return (
    <section class="bg-white text-gray-700">
      <Search/>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl my-5 font-bold text-center text-gray-900">Best Selling</h2>
    <div class="grid grid-cols-2 gap-6 lg:mt-10 lg:grid-cols-4 lg:gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  </div>
</section>

  );
}
