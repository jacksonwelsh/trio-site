<template>
  <div class="bg-black rounded-4xl">
    <img
      class="rounded-4xl w-full gradient-mask-b-50% h-1/3 bg-gray-900"
      v-lazy="`/images/uploads/${image}`"
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
        ml-6
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
