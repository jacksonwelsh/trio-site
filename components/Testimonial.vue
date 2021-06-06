<template>
  <div class="border-2 border-gray-300 border-opacity-50 hover:border-opacity-100 transition-all rounded-lg p-4 flex items-center">
    <div>
      <p class="text-center">"{{ testimonial.content }}"</p>
      <p class="text-right">
        <em>{{ testimonial.author }}</em>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
}
</script>
