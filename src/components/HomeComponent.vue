<template>
  <b-row class="home justify-content-center align-items-center">
    <b-col>
      <b-row>
        <b-col>
          <h2>Hello & Welcome</h2>
        </b-col>
      </b-row>
      <b-row class="i-am">
        <b-col>
          <h2>I am</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1 class="name">{{ name }}</h1>
        </b-col>
      </b-row>
      <SocialLinks
        :github="github"
        :linked-in="linkedIn"
        :email="email"
      ></SocialLinks>
      <b-row class="download-resume">
        <b-col>
          <a
            class="btn"
            href="./manideep-gattamaneni-resume.pdf"
            target="blank"
          >
            <span>View Resume (PDF)</span>
          </a>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import SocialLinks from "@/components/SocialLinksComponent.vue";
import personal from "@/static/personal.json";
export default {
  name: "HomeComponent",
  components: {
    SocialLinks
  },
  data: function() {
    return {
      github: personal.socialLinks.github,
      linkedIn: personal.socialLinks.linkedIn,
      email: personal.socialLinks.email,
      name: personal.name
    };
  }
};
</script>

<style lang="less" scoped>
@highlight-color: #fa3;
@primary-text-color: #e3e3e3;
.home {
  background-color: #1d1d1d;
  color: @primary-text-color;
  min-height: 100vh;
  text-align: center;
}
.i-am {
  padding-top: 20px;
  letter-spacing: 6px;
}
.name {
  &:before {
    content: "";
    display: block;
    background: @primary-text-color;
    width: 30%;
    height: 2px;
    margin: 0 auto 5px;
  }
  &:after {
    content: "";
    display: block;
    background: @primary-text-color;
    width: 30%;
    height: 2px;
    margin: 5px auto 0;
  }
}
.download-resume {
  a {
    color: @primary-text-color;
    border-color: @primary-text-color;
    &:hover {
      color: @highlight-color;
      border-color: @highlight-color;
      background-color: transparent;
    }
  }
}
@media (max-width: 576px) {
  .name {
    font-size: 2.5rem;
    &:after {
      width: 100%;
    }
    &:before {
      width: 100%;
    }
  }
}
</style>
