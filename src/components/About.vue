<script setup>
    const titleSection = "/About me";
</script>

<template>
    <section id="about">
        <div class='img-sizing'>
            <img src="../assets/img/image.webp" alt="Illustration" />
        </div>
        <article class='pink-container'>
            <h2>{{ titleSection }}</h2>
            <p>
                My name is Aloïs, I'm a <strong>french pixel and furry artist</strong>.
                I've always designed characters, since my childhood. And it has never left me!
            </p>
            <p>
                I have a taste for <strong>cyberpunk / steampunk / retrofuturistic aesthetics</strong>.
                I work mainly on Aseprite and CLIP STUDIO PAINT, sometimes on Krita.
                You can find here some of my arts I'm proud of. Hope you enjoy!
            </p>
        </article>
    </section>

</template>

<style>
    #about{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        margin: 3em;
    }

    #about article{
        width: 50%;
        padding: 3em;
    }

    #about .img-sizing{
        width: 40em;
    }
    #about .img-sizing img{
        width: 100%;
        object-fit: contain;
        box-sizing: border-box;
    }

    #about p{
        margin: 2rem;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 1300px){
        #about{
            flex-direction: column;
            align-items: center;
        }
        #about article{
            width: 100%;
            padding: 2em;
        }
        #about .img-sizing{
            width: 500px;
        }
    }
    @media screen and (max-width: 900px){
        /* #about article{
            padding: 2em;
        }
        #about p{
            margin: 1em;
        } */
    }
    @media screen and (max-width: 768px){
        #about p
        {
            margin: 10px;
        }
        #about .img-sizing{
            width: 400px;
        }
        #about
        {
            margin: unset;
        }
    }
    @media screen  and (max-width: 500px) {
        #about .img-sizing{
            width: 300px;
        }
    }
    @media screen and (max-width: 375px){
        #about .img-sizing{
            width: 200px;
        }
    }
</style>