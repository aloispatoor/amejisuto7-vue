<script>
  import furryArtList from '@/assets/furryartlist.json';
  export default {
    data() {
      return {
        furryArts: furryArtList,
        isModalOpen: false,
        currentPicture: null,
      };
    },
    methods: {
      openModal(furryArt) {
        this.currentPicture = furryArt;
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
    <section class="FurryArt">
      <h2>/My Furry Arts</h2>
      <div class='modals'>
        <div id='iterationfurryart'>
          <span role="button" @click="openModal(furryArt)" @keyup.enter="openModal(furryArt)" class="img-sizing" v-for="furryArt in furryArts" :key="furryArt.id" tabindex="0">
              <img :src="`/img/furryart/${furryArt.src}`" :alt="furryArt.alt">
          </span>
        </div>
      </div>
      <div role="dialog" aria-modal="true" v-if="isModalOpen" @click="closeModal" class="modal-overlay">
        <div class="modal-body furry-modal" @click.stop>
          <img :src="`/img/furryart/${currentPicture.src}`" :alt="currentPicture.alt" :key="currentPicture.id" />
          <span role="button" class="modal-close-button" @click="closeModal" @keyup.enter="closeModal" tabindex="0" aria-label="Close">✖</span>
        </div>
      </div>
    </section>
  </main>

</template>

<style>
/* ITERATIONS AND MINIATURES STRUCTURE */
#iterationfurryart{
  margin: 2em;
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

#iterationfurryart .img-sizing{
  margin-bottom: 2em;
  width: 25em;
  height: 25em;
  overflow: hidden;
}

#iterationfurryart .img-sizing img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease-out;
}
#iterationfurryart .img-sizing img:hover{
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
.furry-modal{
  width: 40%;
  height: auto;
  max-height: 100%;
}

.modal-body.furry-modal img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

/* MEDIA QUERIES */
@media screen and (max-width: 1300px){
  .furry-modal{
    width: 45%;
  }
}
@media screen and (max-width: 900px){
  .furry-modal{
    width: 90%;
  }
}

</style>