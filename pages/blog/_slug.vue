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
