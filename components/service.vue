<template>
  <div class="services-component">
    <div class="content-wrapper">
      <h2 class="main-title">DISCUSS YOUR IDEAS</h2>

      <div class="titlewithlogo">
        <div class="titlfam">
          <div class="ztitl">
          <img src="/images/p.png" alt="" class="pthingi">
          <h3 class="section-title">OUR SERVICES</h3>
            </div>

          <div class="ztxt">
              <p class="section-description">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida.
              </p>
          </div>
        </div>

        <!-- LilBox Wrapper with 2x2 layout -->
        <div class="lilbox-wrapper">
          <div class="lilbox lilbox1"></div>
          <div class="lilbox lilbox2"></div>
          <div class="lilbox lilbox3"></div>
          <div class="lilbox lilbox4"></div>
        </div>
      </div>

      <div class="eventsbox">
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
        <div class="service-item" :class="{ selected: isHovered === 3 }" @mouseenter="hover(3)" @mouseleave="hover(0)">
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
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isHovered = ref(0);

// Function to update the hovered item
function hover(item) {
  isHovered.value = item;
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'lemon-milk', sans-serif;
  overflow-x: hidden;
}

.pthingi {
  height: 4rem;
  width: 4rem;
  margin-top: 3.6rem;
}

.titlewithlogo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 28rem; /* Adjust the gap as needed */
}

.titlfam {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ztitl {
  display: flex;
  flex-direction: row;
 
}
.ztxt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.services-component {
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

.eventsbox {
  margin-right: 5rem;
}

.main-title {
  font-size: 2.3rem;
  font-weight: 900;
  margin-bottom: 2.4rem;
  color: #e0e0e0;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ff5500;
  text-align: left;
  white-space: nowrap; /* Prevent the title from wrapping */
  max-width: unset; 
}

.section-description {
  font-size: 0.9rem;
  color: #ddd;
  text-align: left;
  margin-bottom: 2rem;
  /* margin-right: 50rem; */
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
}

.dropdown {
  background-color: #333;
  color: #faf7f7;
  padding: 1rem;
  border-radius: 4px;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  width: 200px;
}

/* Updated lilbox section with 2x2 layout */
.lilbox-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
  /* justify-items: center; */
  /* align-items: center; */
  margin-right: 12rem;
}

.lilbox {
  height: 2rem;
  background-color: #ddd;
  border-radius: 12px;
  transition: width 0.3s;
}

.lilbox1 {
  width: 8rem;
}

.lilbox2 {
  width: 13rem;
}

.lilbox3 {
  width: 13rem;
}

.lilbox4 {
  width: 8rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .lilbox-wrapper {
    grid-template-columns: 1fr;
  }

  .lilbox {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .lilbox {
    width: 90%;
  }
}
</style>
