<template>
  <div class="navigation-container">
    <ul class="list-navigation">
      <li class="list-navigation__item">
        <a href="#where" class="list-navigation__link" v-smooth-scroll="{ offset: -150}">Где купить билет</a>
      </li>
      <li class="list-navigation__item">
        <a href="#assPlay" class="list-navigation__link" v-smooth-scroll="{ offset: -150}">Как играть</a>
      </li>
      <li class="list-navigation__item">
        <a href="#tours" class="list-navigation__link" v-smooth-scroll="{ offset: -150}">Туры лотереи</a>
      </li>
      <li class="list-navigation__item">
        <a href="#result" class="list-navigation__link" v-smooth-scroll="{ offset: -150}">Где узнать результаты</a>
      </li>
      <li class="list-navigation__item">
        <a href="#get" class="list-navigation__link" v-smooth-scroll="{ offset: -150}">Как получить выигрыш</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.navigation-container {
  position: absolute;
  top: 640px;
  margin-bottom: 50px;
  padding: 28px 0;
  left: 50%;
  transform: translateX(-50%);
  width:100%;
  transition: 0;
}
.list-navigation {
  display: flex;
  justify-content: center;
  &__item {
    margin-right: 52px;
    &:last-child {
      margin: 0;
    }
    a {
      color: #919DA3;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      &:hover {
        color: #ED5E42;
      }
    }
  }
}
</style>