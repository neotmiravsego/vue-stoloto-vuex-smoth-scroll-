<template>
  <div class="navigation-container">
    <ul class="list-navigation">
      <Slick ref="slick" :options="slickOptions">
        <li class="list-navigation__item">
          <a
            href="#whatWin"
            class="list-navigation__link"
            v-smooth-scroll="{ offset: -150}"
          >Что можно выиграть</a>
        </li>
        <li class="list-navigation__item">
          <a
            href="#where"
            class="list-navigation__link"
            v-smooth-scroll="{ offset: -150}"
          >Где купить билет</a>
        </li>
        <li class="list-navigation__item">
          <a
            href="#assPlay"
            class="list-navigation__link"
            v-smooth-scroll="{ offset: -150}"
          >Как играть</a>
        </li>
        <li class="list-navigation__item">
          <a
            href="#tours"
            class="list-navigation__link"
            v-smooth-scroll="{ offset: -150}"
          >Туры лотереи</a>
        </li>
        <li class="list-navigation__item">
          <a
            href="#result"
            class="list-navigation__link"
            v-smooth-scroll="{ offset: -150}"
          >Где узнать результаты</a>
        </li>
        <li class="list-navigation__item">
          <a
            href="#get"
            class="list-navigation__link"
            v-smooth-scroll="{ offset: -150}"
          >Как получить выигрыш</a>
        </li>
      </Slick>
    </ul>
  </div>
</template>
<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 6,
        variableWidth: true,
        focusOnSelect: true,
        arrows:false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              arrow: false,
              speed: 300,
              slidesToShow: 4,
              centerMode: false,
              centerPadding: "100px",
              slidesToScroll: 1,
              focusOnSelect: true,
              Infinity: false
            }
          }
        ]
      }
    };
  },

  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.navigation-container {
  position: absolute;
  top: 640px;
  margin-bottom: 50px;
  padding: 28px 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  transition: 0;
  @media (max-width: $MidlleWidth - 1px) {
    top: 384px;
    overflow: hidden;
    overflow-x: scroll;
  }
  @media (max-width: $TableWidth - 1px) {
    top: 170px;
  }
}
.list-navigation {
  max-width: 1080px;
  margin: 0 auto;
  @media (max-width: $MidlleWidth - 1px) {
    padding-left: 60px;
    justify-content: flex-start;
  }
  @media (max-width: $TableWidth - 1px) {
    padding-left: 15px;
  }
  &__item {
    margin-right: 52px;
    @media (max-width: $MidlleWidth - 1px) {
      width: 25%;
      white-space: nowrap;
    }
    &:last-child {
      margin: 0;
    }
    a {
      width: 40px;
      color: #919da3;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      outline: none;
      &:hover {
        color: #ed5e42;
      }
    }
  }
}
.slick-track {
  @media (max-width: $MidlleWidth - 1px) {
    .slick-track {
      justify-content: flex-start;
    }
  }
}
</style>