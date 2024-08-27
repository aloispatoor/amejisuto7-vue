<script setup>
    const pixelArts = [
        {
            name: 'avatar',
            src: "/img/pixelart/avatar.webp",
            alt: 'pixel art: Robot in a synthwave style',
            id: 0
        },
        {
            name: 'geminipolis',
            src: "/img/pixelart/Geminipolis1.webp",
            alt: 'pixel art: Bridge in a night city',
            id: 1
        },
        {
            name: 'burtalistJP',
            src: "/img/pixelart/j_p.webp",
            alt: 'pixel art: Bear avatar face to a brutalist architecture town in the night',
            id: 2
        },
        {
            name: 'narxys',
            src: "/img/pixelart/pa_5.webp",
            alt: 'pixel art: Samoyed avatar face to a summer synthwave aesthetic',
            id: 3
        },
        {
            name: 'silver',
            src: '/img/pixelart/pa_10.webp',
            alt: 'pixel art: Sheep avatar face to a cyber punk city',
            id: 4
        },
        {
            name: 'bowie',
            src: '/img/pixelart/pa_12.webp',
            alt: 'pixel art: Dog avatar face to a solar punk aesthetic',
            id: 5
        },
        {
            name: 'plane',
            src: '/img/pixelart/pa_8.webp',
            alt: 'pixel art: plane taking off',
            id: 6
        },
        {
            name: 'rubyusrubysa',
            src: '/img/pixelart/pa_9.webp',
            alt: 'pixel art: Rubyus and Rubysa face to a steampunk aesthetic',
            id: 7
        },
    ];
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
            <div class="imgslider">
                <img v-for="item in pixelArts" :key="item.id" :src="item.src" :alt="item.alt">
            </div>
        </div>
        <div class="button-container">
                <a href="/pixelart" class="blue-button">More</a>
        </div>
    </section>
</template>

<style>
    #pixelArtSlider{
        margin: 8em;
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

    #pixelArtSlider .imgslider 
    {
        display: flex;
        gap: 20px;
        overflow-y: hidden;
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

    .imgslider img{
        width: 400px;
        height: 400px;
        object-fit: cover;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 1300px){
        #pixelArtSlider .flexbox{
            flex-direction: column;
            align-items: center;
        }
        .imgslider{
            width: 30vw;
            height: 50vh;
        }

        #pixelArtSlider .button-container{
            margin-top: 5em;
        }
    }
    @media screen and (max-width: 900px){
        #pixelArtSlider{
            height: 100%;
            margin: 5em;
            padding: 2.5em;
        }
        #pixelArtSlider article{
            padding: 1rem;
        }

        .imgslider{
            width: 50vw;
            height: 50vh;
        }
    }
    @media screen and (max-width: 700px){
        .imgslider{
            width: 60vw;
            height: 60vh;
        }

        #pixelArtSlider{
            margin: 2em;
        }
    }

</style>