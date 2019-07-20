<template>
  <b-row class="home">
    <Sidebar />
    <HelloWorld
      msg="Welcome to my personal website. This is process of moving to Vue.js + TypeScript app."
    />
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  components: {
    Sidebar,
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
