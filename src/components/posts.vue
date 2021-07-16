<template>
  <div>
    <div v-for="post in posts" :key="post.id">{{ post.id }}</div>
  </div>
</template>

<script>
import PostRepository from "@/scripts/PostRepository.js";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.updatePosts()
  },
  methods:{
      async updatePosts(){
          this.posts = await PostRepository.getPosts()
          console.log(this.posts)
      }
  }
};
</script>
