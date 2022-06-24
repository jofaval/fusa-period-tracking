<script setup lang="ts">
import constants from './constants/home.constants'
</script>
<template>
  <h1 class="text-3xl font-bold underline">{{ $t(constants.TITLE) }}</h1>
  <el-button type="primary">Default</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
