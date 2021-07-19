<template>
  <ul>
    <li>name: {{ comment.name }}</li>
    <li>email: {{ comment.email }}</li>
    <li>body: {{ comment.body }}</li>
  </ul>
</template>

<script>
export default {
  name: Comment,
  props: ["comment"],
};
</script>