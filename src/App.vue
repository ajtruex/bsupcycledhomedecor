<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <a class="navbar-item-img-max-height" href="https://bulma.io">
        <img class="is-rounded" src="./assets/bslogo-2.png" width="112" height="28">
      </a> -->
      <router-link class="navbar-item-img-max-height" to="/">
        <img class="is-rounded" src="./assets/bs-logo-removebg-preview.png" width="112" height="28">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
    </div>
    <div class="navbar-menu">
      <p class="navbar-item title">BS Upcycled Home Decor</p>
    </div>
  </nav>

  <RouterView />
</template>

<style>
/*@import "./assets/base.css";*/
/*@import "../node_modules/primevue/resources/themes/saga-blue/theme.css";*/
@import 'bulma/css/bulma.css';
</style>
