<template>
  <div class="container mx-auto mt-3">
    <title-card :image="pageData.img">{{ pageData.title }}</title-card>
    <div class="post-content mt-4 px-2" v-html="pageData.html"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    async function awaitImport() {
      const wholeMD = await import(`~/content/about.md`)
      return {
        ...wholeMD.attributes,
        html: wholeMD.html,
      }
    }

    const data = await awaitImport()

    return { pageData: data }
  },
}
</script>

<style>
.post-content p {
  @apply my-2;
}

.post-content a {
  @apply underline text-gray-300 hover:text-white;
}

.post-content h1 {
  @apply text-5xl pb-2 my-4 font-bold border-b-2 border-gray-500 border-opacity-50;
}

.post-content h2 {
  @apply text-4xl my-4 font-bold;
}

.post-content h3 {
  @apply text-3xl my-4 font-bold;
}

.post-content h4 {
  @apply text-2xl mt-4 mb-2 font-semibold;
}

.post-content h5 {
  @apply text-xl mt-4 mb-2 font-semibold;
}

.post-content h6 {
  @apply text-lg mt-4 mb-2 font-semibold;
}

ul {
  @apply list-disc ml-4 my-4
}

ol {
  @apply list-decimal ml-4 my-4
}

pre {
  @apply bg-black my-4 p-4 rounded-lg
}
</style>
