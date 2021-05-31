<template>
  <main class="container mx-auto mt-3">
    <title-card image="/images/uploads/trio_banner.jpeg">The Peace River Trio</title-card>
    <h2 class="text-3xl font-bold mt-4">News & Upcoming Events</h2>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <PostCard
        v-for="(blog, index) in blogList"
        :key="index"
        :post-info="blog"
      />
    </section>
  </main>
</template>

<script>
import blogs from '~/content/blogs.json'
import PostCard from '~/components/PostCard.vue'
import TitleCard from '~/components/TitleCard.vue'

export default {
  components: {
    PostCard,
    TitleCard
  },
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const wholeMD = await import(`~/content/blog/${blog.slug}.md`)
      return {
        attributes: wholeMD.attributes,
        link: blog.slug,
      }
    }

    const blogList = await Promise.all(
      blogs.map((blog) => awaitImport(blog))
    ).then((res) => {
      return {
        blogList: res,
      }
    })

    return blogList
  },
}
</script>
