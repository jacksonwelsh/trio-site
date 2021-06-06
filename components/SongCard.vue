<template>
  <div
    :class="`flex items-center justify-center bg-gradient-to-tr text-center font-bold px-4 py-3 rounded-lg from-${color}-300 to-${color}-400 text-${color}-900 transform transition-all cursor-default hover:scale-110 xl:hover:scale-105`"
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
      'red',
      'yellow',
      'green',
      'blue',
      'indigo',
      'purple',
      'pink',
    ]
    const color = colors[this.songIndex % colors.length]
    return { color }
  },
}
</script>
