<template>
  <ul>
    <li v-for="p in posts" :key="p.id">
      post
      <ul>
        <li>title: {{ p.title }}</li>
        <li>body: {{ p.body }}</li>
        <li>
          user:
          <user v-bind:user="p.user" />
        </li>
        <li>
          comments:
          <ul>
            <li v-for="c in p.comments" v-bind:key="c.id">
              comment:
              <comment v-bind:comment="c" />
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import PostService from "../scripts/service/PostService.js";
import User from "./User.vue";
import Comment from "./Comment.vue";

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
  components: { User, Comment },
};
</script>
