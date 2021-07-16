<template >
  <div id="home">
    <posts />
    <albuns />
    <todos />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import Albuns from "@/components/Albuns.vue";
import Todos from "@/components/Todos.vue";

export default {
  name: "Home",
  components: { Posts, Albuns, Todos },
};
</script>

<style lang="scss">
#home {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  height: fit-content;
  width: 100%;
}

#home > * {
  flex-grow: 1;
}
</style>