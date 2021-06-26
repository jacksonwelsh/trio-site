<template>
  <div class="container mx-auto mt-3">
    <title-card :image="pageData.img">{{ pageData.title }}</title-card>
    <div class="post-content mt-4 px-2">
      <p>
        The Peace River Trio is a musical tribute to the great Folk Music
        artists of the ‘50s, ‘60s and ‘70s. Sing along to the music made famous
        by Peter Paul and Mary, the Kingston Trio, Joan Baez, Ian & Sylvia, John
        Denver, the New Christy Minstrels, and many more!
      </p>

      <!-- This centers the image and spaces out the names under the image -->
      <div class="flex justify-center">
        <div class="lg:w-2/3">
          <!-- Replace the URL in the src="" section to change the image -->
          <img
            alt="John Welsh, Marsha Carpenter, and Dave Heveron"
            class="rounded-lg"
            src="/images/gallery/004.jpeg"
          />
          <div class="flex justify-between">
            <span>John Welsh</span>
            <span>Marsha Carpenter</span>
            <span>Dave Heveron</span>
          </div>
        </div>
      </div>

      <p>
        These three local musicians jammed together for several years before
        deciding they wanted to form a trio to share some great Folk music with
        others who remember when music was really, really good!
      </p>

      <p>
        This is the music you remember, with lyrics you can understand and
        melodies you can sing along with... which we encourage our audiences to
        do!
      </p>

      <h2 class="text-center font-semibold text-2xl">
        Our audiences enjoy and sing along with the trio:
      </h2>
      <div
        class="
          grid
          mx-auto
          grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
          mt-2
          mb-4
        "
      >
        <song-card
          v-for="(song, index) of songs"
          :key="index"
          :song-title="song"
          :song-index="index"
        />
      </div>
      <p class="text-center font-bold py-2 text-xl">
        ...And many, many, more of your favorite folk songs!
      </p>
      <h2 class="text-center font-semibold text-2xl">
        What people are saying:
      </h2>

      <div class="grid mx-auto grid-cols-1 lg:grid-cols-3 gap-4 mt-2 mb-4">
        <testimonial
          v-for="testimonial of testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SongCard from '~/components/SongCard.vue'
import Testimonial from '~/components/Testimonial.vue'

export default {
  components: { SongCard, Testimonial },
  async asyncData({ app }) {
    async function awaitImport() {
      const wholeMD = await import(`~/content/about.md`)
      return {
        ...wholeMD.attributes,
        html: wholeMD.html,
      }
    }

    const data = await awaitImport()
    const songs = [
      'Puff the Magic Dagon',
      'Tom Dooley',
      'Today',
      'Jamaica Farewell',
      'If I Had a Hammer',
      'The Last Thing on My Mind',
      'The Night They Drove Ole Dixie Down',
      'Where Have All the Flowers Gone',
      'Sixteen Tons',
      'Folsom Prison',
      'The Boxer',
      'Midnight Special',
      'Leaving on a Jet Plane',
      "I'd Like To Teach the World To Sing",
    ]

    const testimonials = [
      {
        id: 1,
        content:
          'My husband and I have been to see the Peace River Trio three times... and if they were playing tomorrow we would go again!',
        author: 'Elizabeth Harter',
      },
      {
        id: 2,
        content:
          'This is the music you never get tired of. Our favorite songs were any song that Dave played the mandolin on.',
        author: 'Jack and Mary Melton',
      },
      {
        id: 3,
        content:
          'The Peace River Trio had the entire audience singing along with these songs you know by heart. They ended the show with This Land is Your Land... Perfect!',
        author: 'Honorable Paul Stamoulis',
      },
    ]

    return { pageData: data, songs, testimonials }
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

ul {
  @apply list-disc ml-4 my-4;
}

ol {
  @apply list-decimal ml-4 my-4;
}

pre {
  @apply bg-black my-4 p-4 rounded-lg;
}
</style>
