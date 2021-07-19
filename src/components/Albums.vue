<template>
  <ul>
    <li v-for="a in albums" v-bind:key="a.id">
      album
      <ul>
        <li>Title {{ a.title }}</li>
        <li>
          user
          <user v-bind:user="a.user" />
        </li>
        <li>
          photos:
          <ul>
            <li v-for="p in a.photos" v-bind:key="p.id">
              photo:
              <photo v-bind:photo="p" />
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import AlbumService from "../scripts/service/AlbumService.js";
import User from "./User.vue";
import Photo from "./Photo.vue";

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
    },
  },
  components: { User, Photo },
};
</script>