<template>
  <footer class="footer">
    <div class="logo-footer">
      <img src="../../assets/img/lifehacker.svg" alt class="img-footer" />
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  position: relative;
  height: 60px;
  background-color: black;
  @media (max-width: $TableWidth) {
    height: 90px;
  }
}
.logo-footer {
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
  width: max-content;
  @media (max-width: $TableWidth) {
    display: flex;
    align-items: flex-end;
    left: 20px;
    right: 0;
    bottom: 0;
  }
}
</style>