<template>

  <div id="app">
    <Header :class="{'active':!headerIsFixed}" v-on:scroll="onResize" />
    <Banner :class="{'active':!IsBannerFixed}" v-on:scroll="onResize" />
    <Navigation :class="{'active':!isFixed}" v-on:scroll="onResize" />
    <Posts ref="navigation" />
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
      scrollPosition: null,
      isFixed: true,
      headerIsFixed: true,
      IsBannerFixed: true
    };
  },
  methods: {
    onResize() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= this.$refs.navigation.$el.offsetTop - 150) {
        this.isFixed = false;
        this.headerIsFixed = false;
        this.IsBannerFixed = false;
      } else {
        this.isFixed = true;
        this.headerIsFixed = true;
        this.IsBannerFixed = true;
      }
      if (document.documentElement.clientWidth < 768) {
        this.headerIsFixed = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onResize);
  },
  mounted() {
    window.addEventListener("scroll", this.onResize);
    window.addEventListener("resize", this.onResize);
    this.onResize();
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
  top: 65px;
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
  padding-top: 12px;
  top: 0;
  z-index: 5;
  @media (max-width: $MidlleWidth - 1px) {
    padding-top: 0;
  }
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
</style>
