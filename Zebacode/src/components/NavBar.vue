<template>
    <div class="nav-bar row">
        <h5 class="green">ZEBACODE</h5>
    </div>
</template>

<script>
    import { ref } from "vue";
</script>

<style scoped>
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .nav-bar {
        background-color: #000;
        color: white;
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 0px;
    }
    .green {
      color: #42b983;
      font-family: "Roboto Condensed", sans-serif;
      letter-spacing: 1.5px;
    }
</style>
