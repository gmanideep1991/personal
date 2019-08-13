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
          <h1 class="name">Manideep Gattamaneni</h1>
        </b-col>
      </b-row>
      <b-row class="social-links">
        <b-col>
          <ul class="list-inline">
            <li>
              <a href="https://github.com/gmanideep1991" target="blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/manideep-gattamaneni/"
                target="blank"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </li>
            <li>
              <a href="mailto:manideep.gattamaneni@gmail.com" target="blank">
                <font-awesome-icon :icon="['far', 'envelope']" />
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
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
export default {
  name: "HomeComponent",
  data() {
    return {
      pdfURL: "./manideep-gattamaneni-resume.pdf"
    };
  }
};
</script>

<style lang="less" scoped src="./Home.less"></style>
