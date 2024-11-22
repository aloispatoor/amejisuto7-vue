<script setup>

import TypingEffect from "@/components/TypingEffect.vue";
import Prices from "@/components/Prices.vue";
</script>

<template>
  <TypingEffect />
  <section id="terms-conditions" class='pink-container'>
    <h3>/Terms and Conditions</h3>
    <div>
      <p>
        Payment method: PAYPAL only.
      </p>
      <p>
        After receiving the payment, I will start the sketch in few days. This sketch will be sent to you. If you have ANY modifications to suggest, this is the moment to do them. Once the sketch is validated, I will start the line and the color, according to what you commissioned for.
      </p>
      <p>
        I have the full right to decline a commission without justification.
      </p>
      <p>
        Anyway, These are the things I DON'T draw :
        <ul>
          <li>Very detailed art</li>
          <li>Sexual violence</li>
          <li>Childlish characters</li>
        </ul>
      </p>
    </div>
  </section>
  <Prices />
</template>

<style scoped>
#terms-conditions{
  padding: 5em 20em;
  margin: 2em 0;
  text-align: center;
}

#terms-conditions h3{
  margin-bottom: 2em;
}

#terms-conditions p{
  margin-bottom: 1em;
}

/* MEDIA QUERIES */
@media screen and (max-width: 1300px){
  #terms-conditions{
    padding: 3em 10em;
  }
}
@media screen and (max-width: 900px){
  #terms-conditions{
    padding: 2em 7em;
  }
}
@media screen and (max-width: 500px){
  #terms-conditions{
    padding: 2em 3em;
  }
}

</style>