<template>
  <b-row class="home">
    <Sidebar />
    <HelloWorld />
  </b-row>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "home",
  components: {
    Sidebar,
    HelloWorld
  }
};
</script>
