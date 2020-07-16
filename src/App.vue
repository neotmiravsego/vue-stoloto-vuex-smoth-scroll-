<template>
  <div id="app">
    <Header :class="{'active':!positionHeader}" v-on:scroll="onResize" />
    <Banner :class="{'active':!positionBanner}" v-on:scroll="onResize" />
    <Navigation ref="navigation" :class="{'active':!positionNav}" v-on:scroll="onResize" />
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
      windowSize: null,
      positionNav: true,
      scrollPosition: null,
      positionHeader: true,
      positionBanner: true
    };
  },
  methods: {
    onResize() {
      this.scrollPosition = window.scrollY;
      if (document.documentElement.clientWidth > 1024) {
        this.onScrollDesktop();
      } else if (document.documentElement.clientWidth > 768) {
        this.onScrollTablet();
      } else {
        this.positionHeader = false;
        this.onScrollMobile();
      }
    },
    onScrollDesktop() {
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
    },
    onScrollTablet() {
      this.scrollPosition = window.scrollY;
      if (window.scrollY > 400) {
        this.positionHeader = false;
        this.positionNav = false;
        this.positionBanner = false;
      } else {
        this.positionNav = true;
        this.positionHeader = true;
        this.positionBanner = true;
      }
    },
    onScrollMobile() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 100) {
        this.positionNav = false;
        this.positionBanner = false;
      } else {
        this.positionNav = true;
        this.positionHeader = false;
        this.positionBanner = true;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onResize);
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @media (max-width: $MidlleWidth - 1px) {
    overflow: hidden;
    overflow-x: scroll;
  }
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
  @media (max-width: $TableWidth - 1px) {
    top: 30px;
  }
}
.social-list__item-wrap {
  &:nth-child(1) {
    .social-icon {
      @media (max-width: $TableWidth - 1px) {
        width: 7px;
        height: 13px;
      }
    }
  }
  &:nth-child(2) {
    .social-icon {
      @media (max-width: $TableWidth - 1px) {
        width: 13px;
        height: 10.74px;
      }
    }
  }
  &:nth-child(3) {
    .social-icon {
      @media (max-width: $TableWidth - 1px) {
        width: 15px;
        height: 9.29px;
      }
    }
  }
}
.header.active {
  top: 0;
  padding-top: 12px;
  z-index: 5;
  @media (max-width: $TableWidth - 1px) {
    padding-top: 0;
  }
  .social-list__item {
    opacity: 1;
    .social-icon {
      fill: #ed5e42;
    }
  }
  &::before {
    width: 100%;
    bottom: 0;
    left: 0;
    background: #ed5e42;
    z-index: -1;
    height: 69px;
    @media (max-width: $TableWidth - 1px) {
      top: 0;
      height: 40px;
    }
  }
}
// .container-banner.active {
//   margin-bottom: 120px;
// }
</style>
