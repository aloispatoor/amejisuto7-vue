<script>
  import pixelArtList from '@/assets/pixelartlist.json';
  export default {
    data() {
      return {
        pixelArts: pixelArtList,
        isModalOpen: false,
        currentPicture: null,
      };
    },
    methods: {
      openModal(pixelArt) {
        this.currentPicture = pixelArt;
        this.isModalOpen = true;
      },
      closeModal(){
        this.isModalOpen = false;
        this.currentPicture = null;
      },
    },
  };
</script>

<template>
    <main class="ArtGrid">
        <section class="PixelArt">
            <h2>/My Pixel Arts</h2>
            <div class='modals'>
                <div id='iterationpixelart'>
                    <span role="button" @click="openModal(pixelArt)" @keyup.enter="openModal(pixelArt)" class="img-sizing" v-for="pixelArt in pixelArts" :key="pixelArt.id" tabindex="0">
                        <img :src="`/img/pixelart/${pixelArt.src}`" :alt="pixelArt.alt">
                    </span>
                </div>
            </div>
          <div role="dialog" aria-modal="true" v-if="isModalOpen" @click="closeModal" class="modal-overlay">
            <div class="modal-body pixel-modal" @click.stop>
              <img :src="`/img/pixelart/${currentPicture.src}`" :alt="currentPicture.alt" :key="currentPicture.id" />
              <span role="button" class="modal-close-button" @click="closeModal" @keyup.enter="closeModal" tabindex="0" aria-label="Close">✖</span>
            </div>
          </div>
        </section>
    </main>

</template>

<style>
    /* ITERATIONS AND MINIATURES STRUCTURE */
    #iterationpixelart{
        margin: 2em;
        width: inherit;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    #iterationpixelart .img-sizing{
        margin-bottom: 2em;
        width: 25em;
        height: 25em;
        overflow: hidden;
    }

    #iterationpixelart .img-sizing img{
        width: 100%;
        height: 100%;
        object-fit: cover;  
        transition: all .5s ease-out;
    }
    #iterationpixelart .img-sizing img:hover{
        cursor: pointer;
        transform: scale(125%);
    }

    /* MODAL */
    .modal-overlay{
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: auto;
      z-index: 199;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }
    .modal-close-button {
      font-size: 3rem;
      font-weight: 700;
      margin: 0.5em;
      color: yellow;
      cursor: pointer;
      border: none;
      background: transparent;
    }
    .pixel-modal{
      width: 40%;
      height: 70%;
    }

    .modal-body img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 1300px){
      .pixel-modal{
        width: 45%;
        height: 70%;
      }
    }
    @media screen and (max-width: 900px){
      .pixel-modal{
        width: 90%;
        height: 70%;
      }
    }


</style>