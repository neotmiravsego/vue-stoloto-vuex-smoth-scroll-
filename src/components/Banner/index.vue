<template>

  <div class="container-banner">
    <div class="loto-box"></div>
  </div>
  
</template> 

<style lang="scss" scoped>
.container-banner {
  position: relative;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 640px;
  width: 100%;
  background-image: url("../../assets/img/bg-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: $DesktopWidth - 1px) {
    height: 512px;
  }
  @media (max-width: $MidlleWidth - 1px) {
    height: 385px;
  }
  @media (max-width: $TableWidth - 1px) {
    height: 160px;
  }
}
.loto-box {
  margin: 0 auto;
  width: 490px;
  height: 308px;
  background-image: url("../../assets/img/box-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: $MidlleWidth - 1px) {
    width: 294.15px;
    height: 185.03px;
  }
  @media (max-width: $TableWidth - 1px) {
    width: 122px;
    height: 75px;
    background-position: top;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
  }
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