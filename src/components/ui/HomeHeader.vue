<template>
  <header>
    <b-container>
      <b-row  class="headerRow" align-h="center" align-v="center">
        <b-col>
          <div class="text">
            <h1>VueCommerce</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              harum ipsum unde inventore.
            </p>
          </div>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
@import "../../assets/style.scss";
header {
  background-image: url("../../assets/imgs/header.jpg");
  background-size: cover;
  border: 1px solid dodgerblue;
  height: 65vh;
  overflow: hidden;
  .image {
    img {
      width: 100vw;
      height: 100%;
    }
  }
  .text {
    @include centerContent;
    flex-direction: column;
    height: 100%;
    p{
        text-align: center;
        color: #eee;
    }
  }
  .container,
  .headerRow {
    height: 100%;
  }
  h1{
    color: $beage;
  }
}
</style>