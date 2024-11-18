<template>
    <footer>
        <div>
            <p>Web site designed and developped by <a href="http://alois-patoor.ovh/" target="_blank" rel="noreferrer">Aloïs Patoor</a> - All rights reserved</p>
        </div>
        <div>
            <p><a href="legal-mentions">Legal Mentions</a> - <a href="#header">Back to the top</a></p>
        </div>
    </footer>
</template>

<style>
    footer{
        background-color: #004B6B;
        padding: 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    footer div a{
        transition: all .5s ease-out;
        text-decoration: underline;
    }
    footer div a:hover{
        color: yellow;
    }
</style>