<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      post
      <ul>
        <li>title: {{ post.title }}</li>
        <li>body: {{ post.body }}</li>
        <li>
          user
          <user v-bind:user="post.user" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import PostService from "../scripts/service/PostService.js";
import User from "./User.vue";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.updatePosts();
  },
  methods: {
    async updatePosts() {
      this.posts = await PostService.getPosts();
    },
  },
  components: { User },
};
</script>
