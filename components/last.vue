<template>
  <div class="about-container">
    <!-- About Us Header and Contact Info -->
    <div class="content-row">
      <div class="about-header">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>

      <div class="contact-info">
        <p>Robel Tamiru / Zekeria Fekadu</p>
        <p>+251940257052 / +251922487690</p>
        <p>feleksounds@gmail.com</p>
        <div class="social-icons">
          <FontAwesomeIcon v-for="icon in icons" :key="icon" :icon="['fab', icon]" />
        </div>
      </div>
    </div>

    <!-- Profile Boxes -->
    <div class="profile-boxes">
      <!-- Left Box -->
      <div class="profile-box left-box">
        <div class="top-container">
          <div class="small-box"></div>
          <img src="/icons/logo.svg" alt="Logo Icon" class="small-logo">
        </div>
        <div class="profile-header">
          <p>DOTPHIC</p>
        </div>
      </div>

      <!-- Center Box -->
      <div class="profile-box center-box">
        <div class="profile-header">
          <p class="profile-name">NERLIV</p>
        </div>
        <div class="bottom-container">
          <div class="small-box"></div>
        </div>
      </div>

      <!-- Right Box -->
      <div class="profile-box right-box">
        <div class="top-container">
          <div class="small-box"></div>
          <img src="/icons/logo.svg" alt="Logo Icon" class="small-logo">
        </div>
        <div class="profile-header">
          <p>KALEAB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = ['youtube', 'twitter', 'instagram', 'facebook']
</script>

<style scoped>
.about-container {
  width: 80%;
  margin: 0 auto;
  color: white;
  font-family: Arial, sans-serif;
}

/* Row Layout for Header and Contact Info */
.content-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.about-header {
  text-align: left;
  width: 50%;
  padding: 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1rem;
  color: #d1d1d1;
  width: 40%;
  text-align: right;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.social-icons svg {
  font-size: 1.5rem;
  color: #faf7f7;
  transition: color 0.3s ease;
}

.social-icons svg:hover {
  color: #ff5500;
}

/* Profile Boxes */
.profile-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.profile-box {
  background-color: black;
  border-radius: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 320px;
  position: relative;
  overflow: hidden;
}

/* Top Container for Left and Right Boxes */
.top-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* Bottom Container for Center Box */
.bottom-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.small-box {
  background-color: #ff5500;
  width: 50px;
  height: 50px;
}

.small-logo {
  width: 50px;
  height: 50px;
}

/* Left and Right Boxes */
.left-box, .right-box {
  border-radius: 10px 10px 80px 10px;
  padding-top: 20px;
}

/* Center Box */
.center-box {
  border-top: 4px solid #ff5500;
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.profile-header p {
  color: #ff5500;
  font-size: 1.2rem;
  font-weight: bold;
}

.center-box .profile-name {
  font-size: 1.5rem;
  color: #ff5500;
  font-weight: bold;
}
</style>
zicons