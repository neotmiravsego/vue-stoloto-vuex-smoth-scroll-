<template>
  <div class="container">
    <ul class="section-list">
      <li class="section-list__item" v-for="item in section_data" :key="item.id">
        <h2 class="section-list__title" v-if="item.title_list">{{item.title_list}}</h2>
        <div class="wrap-content">
          <p class="list__item-title">{{item.title}}</p>
          <p class="list-item__content" v-html="item.content"></p>
          <div class="section-img__wrap">
            <img :src="item.img" alt class="section-img" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    section_data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap-content {
  position: relative;
}
.section-list__title {
  margin-bottom: 22px;
}
.section-list__item {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 100px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 48px;
  }
}
.section-img__wrap {
  display: flex;
  position: absolute;
  left: -75px;
  top: 0;
}
.list__item-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
.list-item__content {
  font-size: 18px;
  line-height: 26px;
}
a {
  color: #3670f9;
}
</style>