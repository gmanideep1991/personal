<template>
  <b-row class="social-links">
    <b-col>
      <ul class="list-inline">
        <li>
          <Icon
            :external-link="github"
            icon-prefix="fab"
            icon-name="github"
          ></Icon>
        </li>
        <li>
          <Icon
            :external-link="linkedIn"
            icon-prefix="fab"
            icon-name="linkedin"
          ></Icon>
        </li>
        <li>
          <Icon
            :external-link="mailto"
            icon-prefix="far"
            icon-name="envelope"
          ></Icon>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import Icon from "@/components/IconComponent.vue";
export default {
  name: "SocialLinksComponent",
  components: {
    Icon
  },
  props: {
    github: {
      type: String,
      default: ""
    },
    linkedIn: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    }
  },
  computed: {
    mailto() {
      return "mailto:" + this.email;
    }
  }
};
</script>

<style lang="less">
.social-links {
  padding: 40px 0 15px 0;
  li {
    display: inline-block;
    padding: 0 15px;
    font-size: 25px;
  }
}
</style>
