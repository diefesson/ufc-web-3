<template>
  <div class="posts">
    <ul class="post" v-for="post in posts" :key="post.id">
      <li>
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
  </div>
</template>

<script>
import PostService from "../scripts/PostService.js";
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
      console.log(this.posts);
    },
  },
  components: { User },
};
</script>
