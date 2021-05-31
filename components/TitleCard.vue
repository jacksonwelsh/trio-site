<template>
  <div class="bg-black rounded-4xl">
    <div
      class="rounded-4xl w-full gradient-mask-b-50% h-96 bg-gray-900 bg-cover bg-center"
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
