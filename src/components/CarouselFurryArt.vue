<script setup>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
</script>
<script>
  import 'vue3-carousel/dist/carousel.css';
  import furryArtList from "@/assets/furryartlist.json";

  export default {
    data() {
      return {
        furryArts: furryArtList,
      };
    },
  };
</script>

<template>
    <section id="furryArtSlider" class="pink-container">
        <div class="flexbox">
            <article>
                <h2>/furry art</h2>
                <p>
                    Here is my best <strong>furry art</strong> features made on CLIP STUDIO PAINT.
                </p>
            </article>
            <Carousel itemsToShow="4" :wrapAround="true" :autoplay="3000">
                <Slide v-for="item in furryArts" :key="item.id">
                    <img :src="`/img/furryart/${item.src}`" :alt="item.alt">
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <div class="button-container">
            <a href="/furryart" class="pink-button">More</a>
        </div>
    </section>
</template>

<style>
    #furryArtSlider{
        margin-top: 2em;
        padding: 5em;
        transition: all .2s ease-out;
    }
    #furryArtSlider:hover{
        transform: translate(-5px, -5px);
        box-shadow: inset 0 100rem 100rem -100rem yellow; 
    }

    #furryArtSlider .flexbox{
        display: flex;
        flex-direction: column;
    }

    #furryArtSlider article{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        padding: 2rem;
    }

    #furryArtSlider .button-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__slide
    {
        width: 400px;
        height: 400px;
    }

    .carousel__slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* RETOUCHE DU CSS DE VUE-CAROUSEL */
    .carousel
    {
        padding-bottom: 20px;
        width: 100%;
        height: 100%;
    }
    .carousel__track
    {
        gap: 20px;
    }
    #furryArtSlider button.carousel__pagination-button::after
    {
        background-color: #DC86B9;
    }
    button.carousel__pagination-button:hover::after
    {
        background-color: yellow;
    }
    #furryArtSlider .carousel__prev,
    #furryArtSlider .carousel__next
    {
        background: #750037;
        border-radius: 50%;
    }
    #furryArtSlider svg.carousel__icon
    {
        fill: #DC86B9;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 1300px){
        #furryArtSlider .flexbox{
            flex-direction: column;
            align-items: center;
        }
        .carousel__slide
        {
            width: 300px;
            height: 300px;
        }

    }
    @media screen and (max-width: 900px){
        #furryArtSlider{
            height: 100%;
            padding: 2.5em;
        }
        #furryArtSlider article{
            padding: 1rem;
        }
        .carousel__slide
        {
            width: 200px;
            height: 200px;
        }
    }
    @media screen and (max-width: 768px){
        #furryArtSlider
        {
            margin: 2em 0;
        }
    }
    @media screen and (max-width: 700px){
        .carousel__slide
        {
            width: 10em;
            height: 10em;
        }
    }

</style>