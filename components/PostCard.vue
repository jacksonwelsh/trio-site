<template>
  <div>
    <nuxt-link :to="`/blog/${postInfo.link}`">
      <div
        class="
          w-full
          p-4
          my-4
          rounded-lg
          border-2 border-gray-800
          bg-gray-800
          hover:bg-gray-900
          transition-colors
        "
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <h2 class="text-2xl font-bold">{{ postInfo.attributes.title }}</h2>
            <p>
              {{ postInfo.attributes.summary }}
            </p>
          </div>
          <div class="flex w-full justify-center lg:justify-end">
            <img :src="postInfo.attributes.thumbnail" class="rounded-lg max-h-full h-48" />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    postInfo: {
      type: Object,
      required: true,
    },
  },
  setup() {},
}
</script>
