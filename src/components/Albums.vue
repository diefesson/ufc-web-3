<template>
  <ul v-for="album in albums" v-bind:key="album.id">
    <li>
      album
      <ul>
        <li>Title {{ album.title }}</li>
        <li>
          user
          <user v-bind:user="album.user" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import AlbumService from "../scripts/AlbumService.js";
import User from "./User.vue";

export default {
  name: "Albums",
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    this.updateAlbuns();
  },
  methods: {
    async updateAlbuns() {
      this.albums = await AlbumService.getAlbums();
      console.log(this.albums)
    },
  },
  components: { User },
};
</script>