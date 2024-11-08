<template>
  <div class="about-container">
    <!-- About Us Section -->
    <div class="about-section">
      <div class="about-header">
        <div class="header-content">
          <img src="/images/p.png" alt="About Icon" class="about-icon">
          <h1>ABOUT US</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias neque quae, mollitia ipsa iusto! Animi, quo autem. Aut iure ipsum labore perspiciatis, saepe optio hic exercitationem ea doloribus magni.
          Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae architecto nam repudiandae ab omnis voluptatibus ad est nulla nobis sapiente vitae, corporis eligendi accusamus error magnam repellat illo in minima!
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

    <!-- Divider Line -->
    <div class="line"></div>

    <!-- Profile Boxes Section -->
    <div class="profile-boxes">
      <!-- Left Box -->
      <div class="profile-container">
        <div class="top-elements">
          <div class="small-box"><p class="box-text">DOTPHIC</p></div>
          <img src="/images/p.png" alt="Logo Icon" class="small-logo">
        </div>
        <div class="profile-box left-box"></div>
      </div>

      <!-- Center Box -->
      <div class="profile-container">
        <div class="profile-box center-box"></div>
        <div class="bottom-elements">
          <div class="small-box" id="centerbox"><p class="box-text">NERLIV</p></div>
        </div>
      </div>

      <!-- Right Box -->
      <div class="profile-container">
        <div class="top-elements">
          <img src="/images/p.png" alt="Logo Icon" class="small-logo">
          <div class="small-box"><p class="box-text">KALEAB</p></div>
        </div>
        <div class="profile-box right-box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = ['youtube', 'twitter', 'instagram', 'facebook'];
</script>

<style scoped>
/* Main About Container */
.about-container {
  width: 80%;
  margin: 0 auto;
  color: white;
  font-family: 'lemon-milk', sans-serif;
  /* max-height: 150vh; */
  margin-top: -22rem;
  padding-top: 20px;
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.about-header {
  flex: 1;
  padding: 20px;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.about-icon {
  width: 50px;
  height: 50px;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #ff5500;
  margin: 20px 0;
}

/* Profile Boxes Section */
.profile-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.contact-info{
  margin-top: 3rem;
}
.profile-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-elements {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
}

.bottom-elements {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.small-box {
  background-color: #ff5500;
  width: 17rem;
  height: 5rem;
  border-radius: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.small-logo {
  margin-top: 3rem;
  width: 6rem;
  height: 6rem;
  margin-bottom: 2.6rem;
}

/* Text inside the small boxes */
.box-text {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Profile Box Styles */
.profile-box {
  background-color: black;
  padding: 20px;
  height: 300px;
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-box,
.right-box {
  border-radius: 10px 10px 80px 10px;
}

.center-box {
  margin-top: 3rem;
}

#centerbox {
  width: 24rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-boxes {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .small-box {
    width: 14rem;
    height: 4rem;
  }

  .small-logo {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1.5rem;
  }

  .box-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .profile-box {
    height: 260px;
    width: 18rem;
  }

  .small-box {
    width: 12rem;
    height: 3.5rem;
  }

  .small-logo {
    width: 4rem;
    height: 4rem;
  }

  .box-text {
    font-size: 0.9rem;
  }
}
</style>
