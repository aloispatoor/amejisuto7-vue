<script setup>
    import { ref } from 'vue';

    // TITLE SETUP
    const title = "Amejisuto7";

    // MENU BURGER SETUP
    const isActive = ref(false);
    function toggleMenu() {
        isActive.value = !isActive.value;
        console.log('Active Menu');
    }
    
</script>

<template>
    <header id="header">
        <div class='title blue-container'>
            <h1>{{ title }}</h1>
        </div>
        <nav :class="{ showNav: isActive }">
            <ul class='navbar__links'>
                <li class='navbar__item'>
                    <a href="/" class='navbar__link'>/Home</a>
                </li>
                <li class='navbar__item'>
                    <a href="/pixelart" class='navbar__link'>/Pixel Art</a>
                </li>
                <li class='navbar__item'>
                    <a href="/furryart" class='navbar__link'>/Furry Art</a>
                </li>
                <li class='navbar__item'>
                    <a href="/commission" class='navbar__link'>/Commissions</a>
                </li>
            </ul>
            <button @click="toggleMenu" class='navbar__burger'>
                <span class='bar'></span>
            </button>
        </nav>
    </header>
</template>

<style scoped>
header .title{
    text-align:center;
    margin: 5em;
    width: 50%;
}

/* DESKTOP NAVBAR */
.navbar__links{
    display:flex;
    gap: 2em;
    justify-content: flex-end;
    padding-right: 2em;
}

.navbar__link{
    display: inline-block;
    font-size: 1.5em;
    position : relative;
}
.navbar__link::after{
    content: "";
    position : absolute;
    left: 1px;
    bottom: -0.2em;
    width: 0%;
    height: 3px;
    background-color: yellow;
    transition: all .2s ease-out;
}
.navbar__link:hover::after{
    width: 2em;
}

.navbar__burger{
    width: 40px;
    height: 40px;
    background: transparent;
    border:none;
    color: inherit;
    display:none;
}

/* MENU BURGER */
@media screen and (max-width:768px) {
    .navbar__links{
        flex-direction:column;
        justify-content: center;
        align-items:center;
        position: fixed;
        right: -100vw;
        bottom: 0;
        z-index: 200;
        height: 100vh;
        width: 0;
        padding: 2rem;
        visibility: hidden;
        background-color: #004B6B;
        transition: all .8s ease-out;
    }
    .showNav .navbar__links{
        right: 0;
        width: 100%;
        visibility: visible;
    }
    .navbar__link{
        display:block;
        padding: 1.5rem;
        font-size: 3vw;
    }
    .navbar__burger{
        display:block;
        position:fixed;
        z-index: 201;
        top: 1rem;
        right: 1rem;
    }
    .navbar__burger:hover{
        cursor: pointer;
    }

    /* MENU BURGER ANIMATION */
    .bar,
    .bar::before,
    .bar::after{
        display: block;
        width: 30px;
        height: 3px;
        position: relative;
        border-radius: 3px;
        background-color: #95DEFF;
        transition: all .5s ease-in-out;
    }
    .bar::before,
    .bar::after{
        content:"";
        position: absolute;
        left: 0;
    }
    .bar::before{
        transform:translateY(-12px);
    }
    .bar::after{
        transform:translateY(12px);
    }

    .showNav .bar{
        background: transparent;
        width: 0;
    }
    .showNav .bar::before{
        transform: rotate(45deg);
    }
    .showNav .bar::after{
        transform: rotate(-45deg);
    }
}

</style>