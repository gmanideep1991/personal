<template>
  <b-col sm="9" class="main-content">
    <h1 class="hello">
      Hello!
      <span class="emoji wave-hand animated"></span>
    </h1>
    <h2 class="tagline">
      I'm
      <b>Manideep</b>, a
      <span class="changeText">Software Engineer</span>
      <span class="emoji technologist"></span> who is trying to learn and solve everyday problems.
    </h2>
    <section class="row background section">
      <div class="col-sm-2 text-uppercase text-right title font-weight-bold">Background</div>
      <div class="col-sm-10 content">
        <p>
          I'm currently working at cerner corporation in kansas city. I work in a platform team that provides the ability for organizations
          and individual users to create personalized/dashboard applications. I have developed different
          web applications from wireframes to full responsive web pages. I've also had the privilege of
          working with a startup called Squareoffs.
        </p>
        <p>
          <b>When i'm not working</b> i like to travel , play games preferably outdoor. Additionally, i love
          playing
          <a
            href="https://www.catan.com/"
            title="catan"
            target="blank"
          >catan</a> if you need any extra players hit me up.
        </p>
      </div>
    </section>
    <section class="row skills section">
      <div class="col-sm-2 text-uppercase text-right title font-weight-bold">Skills</div>
      <div class="col-sm-10 content">
        <div class="row">
          <div class="col-sm-4 text-left">
            <div class="title font-weight-bold text-uppercase">languages</div>
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS/Less</li>
              <li>.Net</li>
              <li>SQL</li>
            </ul>
          </div>
          <div class="col-sm-4 text-left">
            <div class="title font-weight-bold text-uppercase">frameworks/libraries</div>
            <ul>
              <li>React.js (Beginner)</li>
              <li>Jquery</li>
              <li>Bootstrap</li>
              <li>Jasmine</li>
              <li>Junit</li>
            </ul>
          </div>
          <div class="col-sm-4 text-left">
            <div class="title font-weight-bold text-uppercase">tools</div>
            <ul>
              <li>GIT/SVN & Github</li>
              <li>Maven</li>
              <li>Chrome Dev Tools</li>
              <li>JIRA & Jenkins</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="row experience section">
      <div class="col-sm-2 text-uppercase text-right title font-weight-bold">Experience</div>
      <div class="col-sm-10 content">
        <section class="jobs">
          <div class="job">
            <div class="title font-weight-bold">
              <a
                href="https://www.cerner.com/"
                title="cerner corporation"
                target="blank"
              >Cerner Corporation</a>
            </div>
            <div class="content row">
              <div class="col-sm-6 text-left">Associate Senior Software Engineer</div>
              <div class="col-sm-6 text-right">September 2017 - Present</div>
            </div>
            <div class="content row">
              <div class="col-sm-6 text-left">Software Engineer</div>
              <div class="col-sm-6 text-right">October 2015 - September 2017</div>
            </div>
          </div>
          <div class="job">
            <div class="title font-weight-bold">
              <a href="https://www.thoughtlab.com/" title="thoughtlab" target="blank">Thoughtlab</a>
            </div>
            <div class="content row">
              <div class="col-sm-6 text-left">Web Developer</div>
              <div class="col-sm-6 text-right">September 2014 - October 2015</div>
            </div>
          </div>
          <div class="job">
            <div class="title font-weight-bold">
              <a href="https://www.squareoffs.com/" title="squareoffs" target="blank">Squareoffs</a>
            </div>
            <div class="content row">
              <div class="col-sm-6 text-left">Front-End Developer (Volunteer)</div>
              <div class="col-sm-6 text-right">June - August 2014</div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="row online-degree section">
      <div class="col-sm-2 text-uppercase text-right title font-weight-bold">Online Degree</div>
      <div class="col-sm-10 content">
        <section class="jobs">
          <div class="job">
            <div class="title font-weight-bold">
              <a href="https://www.udacity.com/" title="Udacity" target="blank">Udacity</a>
            </div>
            <div class="content row">
              <div class="col-sm-6 view-certificate text-left">
                Front-End Web Developer Nanodegree
                <a
                  href="../assets/files/front-end-web-developer-certificate.pdf"
                  class="btn"
                  title="view certificate"
                  target="blank"
                >
                  <i class="fa fa-certificate"></i>
                  <span>view</span>
                </a>
              </div>
              <div class="col-sm-6 text-right">October 2016</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </b-col>
</template>

<script>
export default {
  name: "HelloWorld"
};
(function() {
  var texts = ["Web Developer", "Front-end Developer", "Software Engineer"];
  var count = 0;
  function changeText() {
    document.getElementsByClassName("changeText")[0].textContent = texts[count];
    count < texts.length - 1 ? count++ : (count = 0);
  }
  setInterval(changeText, 5000);
})();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@sidebar-white: #fdf3e7;
@link-highlight: #ffa930;
@theme-blue: #2a72b7;

.main-content {
  padding: 2rem;
  .hello {
    margin-bottom: 1rem;
  }
  .tagline {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .seciton:first-child {
    padding: 2rem 2rem;
  }
  .section {
    padding: 1rem 2rem;
    .title {
      color: @theme-blue;
    }
    &.skills {
      ul {
        list-style: none;
        padding-top: 1rem;
        padding-left: 0px;
        margin-bottom: 0px;
      }
    }
    .job {
      padding-bottom: 1em;
    }
  }
}

.wave-hand {
  background-image: url(../assets/images/wave.png);
  margin-left: 10px;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
}

.wave-hand.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.wave-hand.wave {
  -webkit-animation-name: wave;
  animation-name: wave;
}

.emoji {
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.technologist {
  background-image: url(../assets/images/technologist.png);
  width: 1.5rem;
  height: 1.5rem;
}

.view-certificate {
  .btn {
    border: 2px solid @theme-blue;
    color: inherit;
    cursor: pointer;
    padding: 0.01rem 0.5rem;
    margin-left: 0.5rem;
    span,
    i {
      color: @theme-blue;
    }
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
  }
}
.mobile-view {
  display: none;
}
</style>
