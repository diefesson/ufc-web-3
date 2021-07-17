<template>
  <div class="posts">
    <ul class="post" v-for="post in posts" :key="post.id">
      <li>
        Post
        <ul>
          <li>title: {{ post.title }}</li>
          <li>body: {{ post.body }}</li>
        </ul>
      </li>
      <li>
        User
        <ul>
          <li>name: {{ post.user.name }}</li>
          <li>username: {{ post.user.username }}</li>
          <li>email: {{ post.user.email }}</li>
          <li>Address:
            <ul>
              <li>street: {{post.user.address.street}}</li>
              <li>suite: {{post.user.address.suite}}</li>
              <li>city: {{post.user.address.city}}</li>
              <li>zipcode: {{post.user.address.zipcode}}</li>
              <li>geo: {{post.user.address.geo.lat}}, {{post.user.address.geo.lng}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import PostService from "../scripts/PostService.js";

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
};
</script>
