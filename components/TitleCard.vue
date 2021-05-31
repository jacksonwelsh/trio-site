<template>
  <div class="bg-black rounded-4xl">
    <img
      class="rounded-4xl w-full gradient-mask-b-50% bg-yellow-500 bg-clip-border"
      :src="`/images/uploads/${image}`"
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
      The Peace River Trio
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
