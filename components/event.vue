<template>
  <div class="background">
    <!-- Floating Event Box -->
    <div class="event-box">
      <div class="event-header">
        <div class="logo">
          <img src="/icons/logo.svg" alt="Event Logo" />
        </div>
        <h1>EVENT</h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ac.
        </p>
      </div>

      <div class="pending-section">
        <div class="pending-box">PENDING</div>
        <div class="pending-box">PENDING</div>
      </div>

      <div class="social-icons">
        <FontAwesomeIcon v-for="icon in icons" :key="icon" :icon="['fab', icon]" />
        <p>JOIN US</p>
      </div>
    </div>

    <div class="packs-section">
      <div class="packs-header">
        <div class="logo">
          <img src="/icons/logo.svg" alt="Packs Logo" />
        </div>
        <h1>PACKS</h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.
        </p>
      </div>

      <div class="packs-buttons">
        <button class="cart-button">
          <FontAwesomeIcon :icon="['fas', 'shopping-cart']" /> CART
        </button>
        <button class="freebie-button">FREEBIE</button>
        <button class="see-all-button">
          SEE ALL <span class="arrow">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = ['youtube', 'twitter', 'instagram', 'tiktok', 'facebook', 'telegram', 'whatsapp', 'linkedin']
</script>

<style scoped>
.background {
  /* background-image: url('/images/dude2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
}

.event-box {
  background-color: #ff3a00;
  color: #faf7f7;
  padding: 2rem;
  border-radius: 0 0 200px 0;
  max-width: 1200px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.event-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.logo img {
  width: 3rem;
  height: 3rem;
}

.event-header h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #1a1a1a;
  flex-grow: 1;
}

.description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #f8f4f4;
  flex-grow: 1;
}

.pending-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
}

.pending-box {
  background-color: #1a1a1a;
  color: #faf7f7;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 4px;
  flex-grow: 1;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.social-icons p {
  font-size: 1.2rem;
}

.social-icons svg {
  font-size: 2rem;
  color: #faf7f7;
  transition: color 0.3s ease;
}

.social-icons svg:hover {
  color: #000;
}

.packs-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: #faf7f7;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 1200px;
  gap: 1rem;
}

.packs-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}

.packs-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff3a00;
}

.packs-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* .see-all-button{
  background-color: none;
  /* color: #1a1a1a; */
  /* padding: 0.5rem 1rem;
  border-radius: 20px; */
  /* color: #ff3a00;
  font-weight: bold;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: right ;
  gap: 5rem;
  flex-grow: 1; */


.cart-button,
.freebie-button
 {
  background-color: #faf7f7;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-grow: 1;
}


.arrow {
  font-size: 1.2rem;
  margin-left: 0.3rem;
}
</style>
