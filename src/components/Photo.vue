<template>
  <ul>
    <li>title: {{ photo.title }}</li>
    <li><img v-bind:src="photo.url" v-bind:alt="photo.url"/></li>
  </ul>
</template>

<script>
export default {
    name: "Photo",
    props: ["photo"]
}
</script>

<style lang="scss" scoped>
img{
    max-width: 100px;
    max-height: 100px;
}
</style>