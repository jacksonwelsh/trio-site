<template>
  <div class="sm:h-96 h-fit pb-6 pt-2 sm:py-0">
    <div class="bg-black rounded-4xl h-full">
      <div
        class="
          rounded-4xl
          w-full
          gradient-mask-b-50%
          h-full
          bg-gray-900 bg-cover bg-center
        "
        :style="`background-image: url(${image})`"
        v-lazy="image"
      />
      <h1
        class="
          absolute
          transform
          -translate-y-full
          pb-4
          text-6xl
          font-bold
          mt-auto
          md:ml-4
          px-2
          text-gray-100
        "
      >
        <slot />
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
