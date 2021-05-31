<template>
  <div
    class="
      border-b-2 border-gray-500 border-opacity-50
      h-12
      flex
      content-center
      items-center
      justify-between
      px-4
      font-semibold
      text-lg
    "
  >
    <div>
      <nuxt-link to="/"
        ><h2 class="text-xl py-1 px-2 hover:bg-gray-800 rounded-lg transition-colors">The Peace River Trio</h2></nuxt-link
      >
    </div>
    <div />
    <div>
      <nuxt-link
        to="/about"
        class="py-1 px-2 hover:bg-gray-800 rounded-lg transition-colors"
        >About</nuxt-link
      >
      <nuxt-link
        to="/blog"
        class="py-1 px-2 hover:bg-gray-800 rounded-lg transition-colors"
        >Blog</nuxt-link
      >
    </div>
  </div>
</template>
