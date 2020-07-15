<template>
  <div id="app">
    <Header :class="{'active':!positionHeader}" v-on:scroll="onScroll" />
    <Banner :class="{'active':!positionBanner}" v-on:scroll="onScroll" />
    <Navigation ref="navigation" :class="{'active':!positionNav}" v-on:scroll="onScroll" />
    <Posts />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Posts from "./components/Posts";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Footer,
    Banner,
    Posts
  },
  data() {
    return {
      scrollPosition: null,
      positionNav: true,
      positionHeader: true,
      positionBanner: true
    };
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 570) {
        this.positionNav = false;
        this.positionHeader = false;
        this.positionBanner = false;
      } else {
        this.positionNav = true;
        this.positionHeader = true;
        this.positionBanner = true;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  position: relative;
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
button {
  cursor: pointer;
}
.navigation-container.active {
  position: fixed;
  top: 60px;
  width: 100%;
  background: white;
  z-index: 1;
}
.header.active {
  top: 0;
  padding-top: 12px;
  z-index: 5;
  .social-list__item {
    opacity: 1;
    .social-icon {
      fill: #ED5E42;
    }
  }
  &::before {
    width: 100%;
    bottom: 0;
    left: 0;
    background: #ed5e42;
    z-index: -1;
    height: 69px;
  }
}
// .container-banner.active {
//   margin-bottom: 120px;
// }
</style>
