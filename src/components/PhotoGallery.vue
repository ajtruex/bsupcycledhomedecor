<template>
  <div>
    <ul class="gallery">
      <li v-for="n in 5" :key="n">
        <img :src="('../assets/bs-pics/')">
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.gallery {
  display: flex;
  justify-content: space-around;
}

img {
  width: 20%;
}
</style>