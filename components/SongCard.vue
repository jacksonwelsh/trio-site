<template>
  <div
    :class="[
      'flex items-center justify-center bg-gradient-to-tr text-center font-bold px-4 py-3 rounded-lg transform transition-all cursor-default',
      color,
    ]"
  >
    {{ songTitle }}
  </div>
</template>

<script>
export default {
  props: {
    songTitle: {
      type: String,
      required: true,
    },
    songIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    const colors = [
      ['from-red-300', 'to-red-400', 'text-red-900'],
      ['from-yellow-300', 'to-yellow-400', 'text-yellow-900'],
      ['from-green-300', 'to-green-400', 'text-green-900'],
      ['from-blue-300', 'to-blue-400', 'text-blue-900'],
      ['from-indigo-300', 'to-indigo-400', 'text-indigo-900'],
      ['from-purple-300', 'to-purple-400', 'text-purple-900'],
      ['from-pink-300', 'to-pink-400', 'text-pink-900'],
    ]
    const color = colors[this.songIndex % colors.length]
    return { color }
  },
}
</script>
