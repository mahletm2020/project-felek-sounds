<template>
  <div>
    <div v-if="showVideo" id="videoOverlay">
      <video
        id="introVideo"
        autoplay
        muted
        playsinline
        @ended="hideVideo"
      >
        <source src="/vid/introvid.mp4" type="video/mp4">
      </video>
    </div>

    <div class="co" v-show="!showVideo">
      <Home />
      <div class="blur">
      <Service />
      <Event />
      <Grids/>
      <Last/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Home from '../components/home.vue';
import Service from '../components/service.vue';
import Event from '../components/event.vue';
import Grids from '../components/grids.vue';
import Last from '../components/last.vue';

const showVideo = ref(true); // Controls the video overlay visibility

// Function to hide the video overlay when video ends
function hideVideo() {
  showVideo.value = false;
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.blur{
  background-image: url('/images/dude2.png');
  background-size: cover;
  background-position: center;
  background-repeat:repeat-y;
}
#videoOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

#introVideo {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.co {
  overflow-x: hidden;
  
}
</style>
