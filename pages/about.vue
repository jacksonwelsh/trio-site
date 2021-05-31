<template>
  <div>
    <title-card :img="pageData.img">{{ pageData.title }}</title-card>

  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    async function awaitImport() {
      const wholeMD = await import(`~/content/about.md`)
      return {
        ...wholeMD.attributes,
      }
    }

    const data = await awaitImport()

    return { pageData: data }
  },
}
</script>
