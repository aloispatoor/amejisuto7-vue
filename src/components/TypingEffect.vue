<script setup>

</script>

<template>
<p class="typing-effect">
  Commissions are CLOSED
</p>
</template>

<style scoped>
.typing-effect{
  margin-top: 50px;
  font-size: 5em;
  text-align: center;
  color: yellow;
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid yellow; /* The cursor*/
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s steps(30) forwards;
}


@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@media screen and (max-width: 1300px){
  .typing-effect{
    font-size: 3em;
  }
}
@media screen and (max-width: 900px){
  .typing-effect{
    font-size: 2.5em;
  }
}
@media screen and (max-width: 600px){
  .typing-effect{
    font-size: 20px;
  }
}
</style>