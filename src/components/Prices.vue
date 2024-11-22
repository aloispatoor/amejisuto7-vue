<script>
import commissionlist from '@/assets/commissionlist.json';

export default {
  data() {
    return {
      commissionlist: commissionlist,
    };
  },
};
</script>

<script setup>

const articFox = commissionlist[0];
const kitsune = commissionlist[1];
const paul = commissionlist[2];
const synthDeer = commissionlist[3];
const bunny = commissionlist[4];
const pixelLove = commissionlist[5];
const badges = commissionlist[6];
</script>

<template>
  <section id="prices">
    <article class='furry-art blue-container'>
      <h3>/Furry Art Commissions</h3>
      <div class='flexbox'>
        <div class='headshots'>
          <h4>/Small size - Headshots</h4>
          <small>Can be ideal for profile picture in social medias, for example</small>
          <p>Price : <span>15€</span></p>
          <p><span>+ 8€</span> per extra character</p>
          <div :key="articFox.id" class="img-sizing">
            <img :src="articFox.src" :alt="articFox.alt" />
          </div>
        </div>
        <div class='fullbody'>
          <h4>/Fullbody</h4>
          <p>Price : <span>35€</span></p>
          <p><span>+ 15€</span> per extra character</p>
          <p><span>+ 20€</span> complex background</p>
          <div :key="kitsune.id" class="img-sizing">
            <img :src="kitsune.src" :alt="kitsune.alt" />
          </div>
        </div>
      </div>
    </article>

    <article class='pixel-art blue-container'>
      <h3>/Pixel Art Commissions</h3>
      <div class='flexbox'>
        <div class='pa-imgs'>
          <div :key="paul.id" class="img-sizing">
            <img :src="paul.src" :alt="paul.alt" />
          </div>
          <div :key="synthDeer.id" class="img-sizing">
            <img :src="synthDeer.src" :alt="synthDeer.alt" />
          </div>
          <div :key="bunny.id" class="img-sizing">
            <img :src="bunny.src" :alt="bunny.alt" />
          </div>
          <div :key="pixelLove.id" class="img-sizing">
            <img :src="pixelLove.src" :alt="pixelLove.alt" />
          </div>
        </div>
        <div class='pa-text'>
          <p>Pixel art commissions are in 200x200px or 300x300px resolution. Can be exported in .gif or .png format with a bigger resolution ; as you want</p>
          <p>Price : <span>30€</span></p>
        </div>
      </div>
    </article>

    <article class='twitch blue-container'>
      <h3>/Commissions for Twitch</h3>
      <div class='flexbox'>
        <div :key="badges.id" class="t-img">
          <img :src="badges.src" :alt="badges.alt" />
          <small>Subscribers Badges for the Twitch channel <a href="https://www.twitch.tv/raillus">Raillus</a></small>
        </div>
        <div class='t-text'>
          <p><span>35€</span> for one badge</p>
          <p><span>+ 5€</span> each other badge</p>
        </div>
      </div>

    </article>
  </section>

</template>

<style scoped>
#prices{
  margin: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#prices span{
  color: yellow;
}

/* FURRY ART ARTICLE */
.furry-art{
  padding: 2em;
  width: 80vw;
}

.furry-art h3{
  text-align: center;
  margin-bottom: 3em;
}

.furry-art .flexbox{
  display: flex;
  gap: 5em;
  justify-content: space-evenly;
  align-items: flex-start;
}

.headshots{
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: center;
}

.headshots div, .fullbody div{
  margin: 1em 0;
}

.img-sizing img{
  width: 20em;
  height: 20em;
  object-fit: cover;
}

.fullbody img{
  object-position: top;
}


/* PIXEL ART ARTICLE */
.pixel-art{
  margin-top: 3em;
  padding: 2em;
  width: 80vw;
  height: 100%;
}
.pixel-art h3{
  text-align: center;
  margin-bottom: 3em;
}

.pixel-art .pa-imgs{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3%;
}

.pixel-art .flexbox{
  display: flex;
  gap: 3em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* TWITCH ARTICLE */
.twitch{
  margin-top: 3em;
  padding: 2em;
}
.twitch h3{
  text-align: center;
  margin-bottom: 3em;
}

.twitch .flexbox{
  display: flex;
  gap: 2em;
  justify-content: space-evenly;
  align-items: flex-start;
}

.twitch .t-img{
  display: flex;
  gap: 2em;
  flex-direction: column;
  width: 10em;
  height: 10em;
  object-fit: cover;
}

@media screen and (max-width: 1300px){
  .furry-art .flexbox{
    flex-direction: column;
    align-items: center;
  }
  .twitch .flexbox{
    flex-direction: column;
    align-items: center;
  }

  .furry-art{
    width: 70vw;
    height: 100%;
  }
}
@media screen and (max-width: 900px){
  .furry-art{
    width: 80vw;
  }
}
@media screen and (max-width: 700px){
  .img-sizing img{
    width: 10em;
    height: 10em;
    object-fit: cover;
  }
}

</style>