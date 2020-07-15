<template>
  <div class="container-banner">
    <div class="loto-box"></div>
  </div>
</template>

<style lang="scss" scoped>
.container-banner{
  height: 640px;
  width: 100%;
  background-image: url("../../assets/img/bg-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}
.loto-box {
  margin: 0 auto;
  background-image: url("../../assets/img/box-banner.png");
  width: 490px;
  height: 308px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.loto-box:hover {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px, 0) rotate(0deg);
  }
  10% {
    transform: translate(-10px, 0px) rotate(0deg);
  }
  10% {
    transform: translate(-10px, 0px) rotate(0deg);
  }
  30% {
    transform: translate(10px, 0) rotate(0deg);
  }
  40% {
    transform: translate(10px, 0) rotate(0deg);
  }
  50% {
    transform: translate(-10px, 0) rotate(0deg);
  }
  60% {
    transform: translate(-10px, 0) rotate(0deg);
  }
  70% {
    transform: translate(10px, 0) rotate(0deg);
  }
  80% {
    transform: translate(-10px, 0) rotate(0deg);
  }
  90% {
    transform: translate(10px, 0) rotate(0deg);
  }
  100% {
    transform: translate(10px, -2px) rotate(0deg);
  }
}
</style>