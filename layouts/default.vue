<template>
  <div>
    <div class="min-h-screen px-2">
      <Nav />
      <Nuxt />
    </div>
    <!-- Footer -->
    <div
      class="
        border-t-2 border-gray-500 border-opacity-50
        h-12
        flex
        conent-center
        items-center
        justify-between
        px-4
        text-gray-300
      "
    >
      <div />
      <div>
        <p class="text-center">
          Designed and hosted by
          <a class="underline hover:text-white" href="//jacksonwel.sh"
            >Jackson Welsh</a
          >
        </p>
      </div>
      <div>
        <a href="/admin" class="px-2 py-1 hover:bg-gray-800 transition-colors rounded-lg">admin</a>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: { Nav },
  setup() {},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap');
</style>
