<template>
  <main>
    <section class="post container mt-3 mx-auto">
      <title-card :image="thumbnail">{{ title }}</title-card>
      <div class="post-content" v-html="html"></div>
    </section>
  </main>
</template>

<script>
import TitleCard from '~/components/TitleCard.vue'

export default {
  components: { TitleCard },
  async asyncData({ params }) {
    const post = await import(`~/content/blog/${params.slug}.md`)
    const attr = post.attributes
    const slug = params.slug

    const {
      author,
      authorlink,
      date,
      summary,
      thumbnail,
      title,
      type,
      update,
    } = attr

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }

    const publishedDate = new Date(date)
    const updatedDate = new Date(update)
    const published = publishedDate.toLocaleDateString('en-US', dateOptions)
    const updated = updatedDate.toLocaleDateString('en-US', dateOptions)

    return {
      title,
      author,
      authorlink,
      date,
      update,
      published,
      updated,
      type,
      thumbnail,
      summary,
      slug,
      html: post.html,
    }
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
