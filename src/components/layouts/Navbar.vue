<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }" class="nav-item">Home</router-link>
    <router-link :to="{ name: 'Users' }" class="nav-item">Users</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav{
  display: flex;
  align-items: center;
  justify-content: center;
  &-item{
    padding: .5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0.5rem;
    &:hover{
      background-color: #ccc;
      color: #fff;

    }
  }
}
</style>