<script>
import Image from 'primevue/image'
// import PhotoGallery from '../components/PhotoGallery.vue'
// import VLazyImage from "v-lazy-image"
// import Galleria from 'primevue/galleria'
// import TheWelcome from '@/components/TheWelcome.vue'
export default {
  components: {
    // VLazyImage,
    Image,
    // Galleria
  },
  data() {
    return {
      images: [
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088538/bs-pics/20220515_115542.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088536/bs-pics/20220515_120032.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088536/bs-pics/20220515_120720.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088537/bs-pics/20220515_120801.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088522/bs-pics/20220515_123054.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088522/bs-pics/20220515_125431.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088525/bs-pics/20220515_130554.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088527/bs-pics/20220515_134631.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088526/bs-pics/20220515_181557.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/20220515_182726.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/1.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/2.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/3.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/4.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/5.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/6.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/7.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/8.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/9.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/10.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/11.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/12.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/13.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/14.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/15.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/16.jpg",
        "https://res.cloudinary.com/ajtruex/image/upload/c_thumb,h_200/v1653088528/bs-pics/17.jpg",
      ]
    }
  }
}
</script>

<template>
  <div class="container is-fluid">
    <section class="hero block">
      <div class="hero-body has-text-centered">
        <img src="https://res.cloudinary.com/ajtruex/image/upload/c_scale,w_1002/v1653124205/bs-pics/bslogo-2.png"
          alt="">
        <!-- <p class="title">
          BS Upcycled Home Decor
        </p> -->

        <!-- <figure class="image">
          <img src="https://res.cloudinary.com/ajtruex/image/upload/c_scale,w_1002/v1653124205/bs-pics/bslogo-2.png">
        </figure> -->
      </div>
    </section>
    <Image v-for="image in images" :key="image" :src="image" preview />
  </div>

  <!-- <PhotoGallery />
  <figure class="image is-16by9">
    <img src="../assets/bs-pics/IMG_8805.jpg">
  </figure> -->
  <!-- <v-lazy-image v-for="image in images" :key="image" :src="image" /> -->
</template>
<style>
.hero {
  background-color: lightpink;
}
</style>