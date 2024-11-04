<template>
  <div class="services-component">
    <div class="content-wrapper">
      <h2 class="main-title">DISCUSS YOUR IDEAS</h2>
      <h3 class="section-title">OUR SERVICES</h3>
      <p class="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida.
      </p>

      <!-- Service Item 1 -->
      <div class="service-item" @mouseenter="hover(1)" @mouseleave="hover(0)">
        <img src="/icons/crosdotinmiddle.svg" alt="" class="icons">
        <span class="service-text">AUDIO CLEAN-UP</span>
        <img src="/icons/downarrow.svg" alt="" class="icons">
      </div>
      <div class="line"></div>

      <!-- Service Item 2 -->
      <div class="service-item" @mouseenter="hover(2)" @mouseleave="hover(0)">
        <img src="/icons/crossdoublecircle.svg" alt="" class="icons">
        <span class="service-text">SOUND DESIGN / SFX</span>
        <img src="/icons/downarrow.svg" alt="" class="icons">
      </div>
      <div class="line"></div>

      <!-- Service Item 3 with Dropdown -->
      <div class="service-item"
           :class="{ selected: isHovered === 3 }"
           @mouseenter="hover(3)"
           @mouseleave="hover(0)">
        <img src="/icons/crossincircle.svg" alt="" class="icons">
        <span class="service-text">AUDIO ENGINEERING</span>
        <img src="/icons/downarrow.svg" alt="" class="icons">

        <!-- Dropdown Menu -->
        <div v-if="isHovered === 3" class="dropdown">
          <p>MIXING</p>
          <p>MASTERING</p>
          <p>QUALITY CONTROL</p>
          <p>INSIGHT AND COLLABORATION</p>
        </div>
      </div>
      <div class="line"></div>

      <!-- Service Item 4 -->
      <div class="service-item" @mouseenter="hover(4)" @mouseleave="hover(0)">
        <img src="/icons/crosdotinmiddle.svg" alt="" class="icons">
        <span class="service-text">MUSIC PRODUCTION</span>
        <img src="/icons/downarrow.svg" alt="" class="icons">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isHovered = ref(0); // Tracks which service item is hovered

// Function to update the hovered item
function hover(item) {
  isHovered.value = item;
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

.services-component {
  background-image: url('/images/dude2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #faf7f7;
  text-align: center;
  width: 100%;
}

.content-wrapper {
  max-width: 90rem;
  width: 100%;
  padding: 0 1rem;
  text-align: center;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.section-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #ff5500;
  text-align: left;
  margin-bottom: 0.5rem;
}

.section-description {
  font-size: 0.9rem;
  color: #ddd;
  text-align: left;
  margin-bottom: 2rem;
}

.service-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: #ff5500;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s;
}

.service-item:hover {
  background-color: rgba(255, 85, 0, 0.1);
}

.line {
  width: 100%;
  height: 2px;
  background-color: #ff5500;
  margin: 0.5rem 0;
}

.icons {
  font-size: bold;
  margin-right: 1rem;
  height: 32px;
  width: 32px;
}

.service-text {
  flex-grow: 1;
  text-align: left;
  font-size: 1.3rem;
}

.selected {
  background-color: rgba(255, 85, 0, 0.2);
  padding-right: 2rem;
  position: relative;
}

.dropdown {
  background-color: #333;
  color: #faf7f7;
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  text-align: left;
  width: 200px;
}
</style>
