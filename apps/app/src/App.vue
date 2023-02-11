<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="exp">
    <div id="menu">
      <template v-for="index in 3" :key="index">
        <template v-if="index === 1">
          <RouterLink to="/">Experience 1</RouterLink>
        </template>
        <template v-else>
          <RouterLink :to="'/experience' + index">Experience {{ index }}</RouterLink>
        </template>
      </template>
    </div>
    <div id="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
#exp {
  display: flex;
  min-height: 100vh;
}

#menu {
  background: grey;
  width: 200px;
  max-height: 100vh;
  padding: 20px;
}

#menu>a {
  display: block;
}

#view {
  width: calc(100% - 200px);
  padding: 20px;
}
</style>