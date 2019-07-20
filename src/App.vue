<template>
  <b-container fluid id="app">
    <router-view />
  </b-container>
</template>
<style lang="less">
@link-highlight: #ffa930;

a {
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  .fa:hover {
    color: @link-highlight;
  }
}
body {
  font-family: "Open Sans Condensed", sans-serif;
}
</style>
