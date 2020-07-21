<template>
  <div class="navigation-container">
    <ul class="list-navigation desktop-navigation">
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
    </ul>
    <ul class="list-navigation slider-navigation">
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
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              speed: 300,
              slidesToShow: 4,
              centerMode: true,
              centerPadding: "0px",
              slidesToScroll: 1,
              focusOnSelect: true,
              infinite: true
            }
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.desktop-navigation {
  display: flex;
  padding: 0 20px;
  max-width: 1130;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  .list-navigation__item {
    padding: 0;
    @media (max-width: $DesktopWidth) {
      margin-right: 40px;
    }
  }
  @media (max-width: $MidlleWidth - 1px) {
    display: none;
  }
}
.slider-navigation {
  @media (min-width: $MidlleWidth) {
    display: none;
  }
}
.navigation-container {
  margin-bottom: 50px;
  padding: 17px 0;
  position: absolute;
  top: 640px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  transition: 0;
  @media (max-width: $DesktopWidth) {
    top: 530px;
  }
  @media (max-width: $MidlleWidth - 1px) {
    top: 384px;
  }
  @media (max-width: $TableWidth - 1px) {
    top: 170px;
  }
}
.list-navigation {
  margin: 0 auto;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
  }
  @media (max-width: $MidlleWidth - 1px) {
    justify-content: flex-start;
  }
  &__item {
    margin-right: 50px;
    display: flex;
    @media (max-width: $MidlleWidth - 1px) {
      width: 25%;
      white-space: nowrap;
    }
    &:last-child {
      margin: 0;
    }
    a {
      width: max-content;
      color: #919da3;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      outline: none;
      @media (max-width: $DesktopWidth) {
        line-height: 30px;
      }
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
.list-navigation__item {
  width: max-content;
}
</style>