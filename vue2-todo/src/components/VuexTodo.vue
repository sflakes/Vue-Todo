<template>
  <div>
    <h1>{{ title }}</h1>
    <br />
    <ul>
      <li v-for="teacher in teachers" :key="teacher.nama">
        {{ teacher.nama }}
      </li>
    </ul>

    <form action="" @submit.prevent>
        <label for="submit"></label>
        <input type="text">
        <button type="submit">Add</button>
        <button type="button">Delete</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["title", "teachers"]),
  },
};
</script>

<style>
</style>