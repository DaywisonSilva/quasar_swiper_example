<template>
  <q-page class="flex flex-center">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @mouseover="state.isHover = true"
      @mouseout="state.isHover = false"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :loop="true"
      class="slide"
      effect="cube"
    >
      <swiper-slide class="slide__item" v-slot="{ isActive }">
        {{ isActive }}
        <swiper
          :slides-per-view="1"
          :space-between="50"
          class="slideNested"
          @progress="progress"
          :autoplay="{
            delay: 790,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide class="slideNested__item"
            >Slide 1 - Nested</swiper-slide
          >
          <swiper-slide class="slideNested__item"
            >Slide 2 - Nested</swiper-slide
          >
          <swiper-slide class="slideNested__item"
            >Slide 3 - Nested</swiper-slide
          >
        </swiper>
      </swiper-slide>
      <swiper-slide class="slide__item">Slide 2</swiper-slide>
      <swiper-slide class="slide__item">Slide 3</swiper-slide>
    </swiper>
  </q-page>
</template>

<script>
import { defineComponent, reactive, ref, onMounted } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const state = reactive({
      isHover: false,
    });

    const swiper = ref("swiper");

    onMounted(() => {
      console.log(swiper);
    });

    function progress(swiper, progress) {
      // console.log(progress);
      // console.log("começou");
    }
    return { progress, state };
  },
});
</script>

<style>
.slide {
  width: 100%;
  max-width: 500px;
  height: 350px;
  padding: 20px;
  box-sizing: border-box;
}

.slide__item {
  width: 100%;
  height: 100%;
  background-color: rgb(236, 236, 236);
  border-radius: 15px;
  /* box-shadow: 10px 10px 15px #2222222c; */
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.slideNested {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.slideNested__item {
  background-color: greenyellow;
  border-radius: 15px;
}
</style>
