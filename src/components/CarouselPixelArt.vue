<script setup>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
</script>
<script>
    import 'vue3-carousel/dist/carousel.css';
    import pixelArtList from "@/assets/pixelartlist.json";

    export default {
      data() {
        return {
          pixelArts: pixelArtList,
        };
      },
    };
</script>

<template>
    <section id="pixelArtSlider" class="blue-container">
        <div class="flexbox">
            <article>
                <h2>/pixel art</h2>
                <p>
                    Here is my best <strong>pixel art</strong> features made on Aseprite.
                </p>
            </article>
            <Carousel itemsToShow="4" :wrapAround="true" :autoplay="3000">
                <Slide v-for="item in pixelArts" :key="item.id">
                    <img :src="`/img/pixelart/${item.src}`" :alt="item.alt">
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <div class="button-container">
            <a href="/pixelart" class="blue-button">More</a>
        </div>
    </section>
</template>

<style>
    #pixelArtSlider{
        padding: 5em;
        transition: all .2s ease-out;
    }
    #pixelArtSlider:hover{
        transform: translate(-5px, -5px);
        box-shadow: inset 0 100rem 100rem -100rem yellow; 
    }

    #pixelArtSlider .flexbox{
        display: flex;
        flex-direction: column;
    }

    #pixelArtSlider article{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        padding: 2rem;
    }

    #pixelArtSlider .button-container{
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
    #pixelArtSlider button.carousel__pagination-button::after
    {
        background-color: #95DEFF;
    }
    #pixelArtSlider button.carousel__pagination-button:hover::after
    {
        background-color: yellow;
    }
    .carousel__prev, .carousel__next
    {
        background: #004B6B;
        border-radius: 50%;
    }
    #pixelArtSlider svg.carousel__icon
    {
        fill: #95DEFF;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 1300px){
        #pixelArtSlider .flexbox{
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
        #pixelArtSlider{
            height: 100%;
            padding: 2.5em;
        }
        #pixelArtSlider article{
            padding: 1rem;
        }
        .carousel__slide
        {
            width: 200px;
            height: 200px;
        }
    }
    @media screen and (max-width: 768px){
        #pixelArtSlider
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