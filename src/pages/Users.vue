<template>
  <h2>User list</h2>
  <ul>
    <li v-if="!posts.length">Loading...</li>
    <li v-for="post in posts" :key="post.id">{{post.id}} {{ post.title }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const {data } = await this.axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    this.posts = data
  },
};
</script>

<style>
</style>