<template>
  <div class="home">
    <div class="content-wrapper">
      <div class="navs">
        <Nuxtlink>SERVICE</Nuxtlink>
        <Nuxtlink>PACKS</Nuxtlink>
        <img src="/icons/logo.svg" alt="" class="src" id="logo">
        <Nuxtlink>EVENTS</Nuxtlink>
        <Nuxtlink>ABOUT</Nuxtlink>
      </div>
      <div class="box">
        <!-- Box content goes here -->
      </div>
      <div class="social-icons">
        <FontAwesomeIcon :icon="['fab', 'facebook']" />
        <FontAwesomeIcon :icon="['fab', 'instagram']" />
        <FontAwesomeIcon :icon="['fab', 'youtube']" />
        <FontAwesomeIcon :icon="['fab', 'twitter']" />
        <FontAwesomeIcon :icon="['fab', 'tiktok']" />
        <FontAwesomeIcon :icon="['fab', 'telegram']" />
        <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
      </div>
    </div>
  </div>
</template>




<style scoped>
body {
  margin: 0;
  padding: 0;
}

.home {
  background-image: url('/images/dude.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-clip: border-box;
  height: 100vh;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
}

.navs {
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  color: #faf7f7;
  margin-top: 20px;
}

#logo {
  width: 10rem;
  height: 10rem;
  margin-top: -15px;
  color: #faf7f7;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.social-icons svg {
  font-size: 24px;
  color: #faf7f7;
  transition: color 0.3s ease;
}



.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  max-width: 20rem;
  background-image: url("/imgages/p.png");
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .navs a {
    font-size: 14px;
  }
  
  .social-icons {
    flex-wrap: wrap;
  }

  .social-icons svg {
    font-size: 18px;
  }
}

  </style>