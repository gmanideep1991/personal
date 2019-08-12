
<template>
  <b-col sm="3" class="sidebar">
    <div>
      <div>
        <div class="name">
          <span class="glasses">d</span>
          <br />
          <span class="first-name">Manideep</span>
          <br />
          <span class="last-name">Gattamaneni</span>
        </div>
        <hr />
        <div class="social-links">
          <ul class="list-inline">
            <li>
              <a href="https://github.com/gmanideep1991" target="blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/manideep-gattamaneni/" target="blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </li>
            <li>
              <a href="mailto:manideep.gattamaneni@gmail.com" target="blank">
                <font-awesome-icon :icon="['far', 'envelope']" />
              </a>
            </li>
          </ul>
        </div>
        <div class="download-resume">
          <a class="btn" href="../assets/files/manideep-gattamaneni-resume.pdf" target="blank">
            <i class="fa fa-download" aria-hidden="true"></i>
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div class="copyright">
        <div>Developed by</div>
        <div>Manideep Gattamaneni &copy; 2017</div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>
<style lang="less" >
@sidebar-white: #fdf3e7;
@link-highlight: #ffa930;
@theme-blue: #2a72b7;
@font-face {
  font-family: "geektastic accessories";
  src: url("../assets/fonts/geektastic_accessories.eot") format("eot"),
    url("../assets/fonts/geektastic_accessories.woff") format("woff"),
    url("../assets/fonts/geektastic_accessories.ttf") format("truetype"),
    url("../assets/fonts/geektastic_accessories.svg#geektasticaccessories")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
.sidebar {
  padding-top: 2rem;
  background-color: @theme-blue;
  color: @sidebar-white;
  hr {
    border-color: @link-highlight;
  }
  > div:first-child {
    div {
      text-align: center;
    }
  }
}
.social-links {
  li {
    display: inline-block;
    padding: 0 15px;
    font-size: 25px;
    a {
      color: inherit;
      text-decoration: inherit;
      cursor: pointer;
      .fa:hover {
        color: @link-highlight;
      }
    }
  }
}
.download-resume {
  margin: 40px 0;
  .btn {
    border: 2px solid @sidebar-white;
    color: inherit;
    cursor: pointer;
  }
  .btn:hover {
    border-color: @link-highlight;
    span,
    i {
      color: @link-highlight;
    }
  }
  span {
    text-transform: uppercase;
    padding: 0 5px;
  }
}
.name {
  line-height: 30px;
  :not(.glasses) {
    text-transform: uppercase;
  }
  .first-name {
    letter-spacing: 10px;
    font-size: 30px;
  }
  .glasses {
    font-family: "geektastic accessories";
    font-size: 40px;
  }
}
.copyright {
  text-align: center;
  padding-bottom: 2rem;
}
</style>


