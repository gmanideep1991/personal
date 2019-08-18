<template>
  <a class="icon" :href="externalLink" target="blank">
    <font-awesome-icon :icon="[iconPrefix, iconName]" />
  </a>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    externalLink: {
      type: String,
      default: ""
    },
    iconPrefix: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
.icon {
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  &:hover {
    color: #fa3;
  }
}
</style>
