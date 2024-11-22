<script setup>
    import About from '@/components/About.vue';
    import CarouselPixelArt from '@/components/CarouselPixelArt.vue';
    import CarouselFurryArt from '@/components/CarouselFurryArt.vue';
    import HomeCommission from "@/components/HomeCommission.vue";
    import Divider from "@/components/Divider.vue";

</script>

<template>
    <main class="Home">
      <About />
      <Divider />
      <CarouselPixelArt />
      <Divider />
      <CarouselFurryArt />
      <HomeCommission />
    </main>
</template>

<style>

</style>