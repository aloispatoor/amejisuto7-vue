<script setup>

</script>

<template>
  <section id="commissionHome">
    <h2>/commissions</h2>
    <p>You can order me <strong>pixel art</strong> and / or <strong>digital painting furry art</strong>. Depending of what you ask and the options you wish, prices go from 15€ to 65€.</p>
    <p>You can find all the <strong>commission possibilities</strong> by clicking the following button</p>
    <div class="button-container">
      <a href="/Commission" class="blue-button">More informations</a>
    </div>
  </section>
</template>

<style>
#commissionHome{
  background-color: #004B6B;
  padding: 7em 10em;
}

#commissionHome p{
  margin: 2rem;
}
#commissionHome .button-container{
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* MEDIA QUERIES */
@media screen and (max-width: 900px){
  #commissionHome{
    padding: 5em 7em;
  }
}
@media screen and (max-width: 700px){
  #commissionHome{
    padding: 3em 5em;
  }
}
@media screen and (max-width: 500px){
  #commissionHome{
    padding: 2em 3em;
  }
}
@media screen and (max-width: 375px){
  #commissionHome{
    padding: 2em;
  }
}

</style>