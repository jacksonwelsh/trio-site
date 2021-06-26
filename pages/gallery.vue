<template>
  <div class="container mx-auto mt-3">
    <title-card image="/images/hero/prt_perf.jpeg">Gallery</title-card>
    <div class="grid lg:grid-cols-2 gap-4 h-full mt-4">
      <gallery-item>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fthepeacerivertrio%2Fvideos%2F833645150369651%2F&show_text=false&width=560&t=0"
          class="h-full w-full object-contain"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </gallery-item>
      <gallery-item>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthepeacerivertrio%2Fvideos%2F234016531194044%2F&show_text=false&width=560&t=0"
          class="h-full w-full object-contain"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </gallery-item>
      <div v-for="image of images" :key="image">
        <img :src="image" class="h-full w-full object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryItem from '~/components/GalleryItem.vue'
export default {
  components: {
    GalleryItem,
  },
  data() {
    let images = []
    for (let i = 1; i < 8; ++i)
      images.push(`/images/gallery/${i.toString().padStart(3, '0')}.jpeg`)
    return {
      images,
    }
  },
  setup() {},
}
</script>
