<template>
  <div class="swipe">
    <mt-swipe 
      :showIndicators="false"
      :auto="5000"
      :speed="2000"
      >
      <mt-swipe-item>
        <img src="../../assets/01.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/02.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/03.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/04.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.swipe{
  height: 300px;
}
</style>