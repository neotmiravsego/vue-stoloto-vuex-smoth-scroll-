<template>
  <div class="container-section" ref="wrapImg">
    <ul class="section-list">
      <li class="section-list__item" v-for="(item,index)  in section_data" :key="item.id">
        <h2 class="section-list__title" v-if="item.title_list">{{item.title_list}}</h2>
        <div class="wrap-content">
          <div class="wrap-title">
            <div
              class="section-img__wrap"
              :style="visibilityBlock && {transition:`${(index + 1.2) / 2}s `, opacity:1}"
              :class="{'active':visibilityBlock}"
              v-on:scroll="visImgItem"
            >
              <img :src="item.img" alt class="section-img" />
            </div>
            <p class="list__item-title">{{item.title}}</p>
          </div>
          <p class="list-item__content" v-html="item.content"></p>
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
  },
  data() {
    return {
      visibilityBlock: false
    };
  },
  methods: {
    visImgItem() {
      if (window.scrollY >= this.$refs.wrapImg.offsetTop - 400) {
        this.visibilityBlock = true;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.visImgItem);
  },
  mounted() {
    window.addEventListener("scroll", this.visImgItem);
    this.visImgItem();
  }
};
</script>

<style lang="scss" >
.wrap-content {
  position: relative;
}
.section-list__title {
  margin-bottom: 22px;
  position: relative;
  left: -105px;
  font-size: 30px;
  @media (max-width: $MidlleWidth - 1px) {
    left: -110px;
  }
  @media (max-width: $TableWidth - 1px) {
    width: 280px;
    font-size: 20px;
    left: 0px;
  }
}
.section-list__item {
  margin-bottom: 45px;
  padding-left: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  &:last-child {
    margin-bottom: 70px;
  }
  @media (max-width: $TableWidth) {
    margin-bottom: 22px;
    padding-left: 0;
    &:last-child {
      margin-bottom: 34px;
    }
  }
}
.section-img__wrap.active {
  left: -110px;
  @media (max-width: $TableWidth - 1px) {
    left: 0;
  }
}
.section-img__wrap {
  display: flex;
  position: absolute;
  left: -200px;
  top: 0;
  opacity: 0;
  @media (max-width: $TableWidth) {
    img {
      width: 35px;
      height: 35px;
    }
    left: -200px;
    top: 50%;
    transform: translateY(-50%);
    justify-content: center;
  }
}
.list__item-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  @media (max-width: $TableWidth) {
    margin-bottom: 8px;
    padding-left: 50px;
  }
}
.list-item__content {
  font-size: 18px;
  line-height: 26px;
  @media (max-width: $TableWidth) {
    margin-top: 12px;
  }
  a {
    color: #3670f9;
    text-decoration: underline;
  }
}
.wrap-title {
  position: relative;
}
</style>