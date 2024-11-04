<template>
  <div class="home">
    <div class="content-wrapper">
      <div class="navs">
        <Nuxtlink to="/services">SERVICES</Nuxtlink>
        <Nuxtlink to="/packs">PACKS</Nuxtlink>
        <img src="/icons/logowhite.png" alt="Logo" class="logo">
        <Nuxtlink to="/events">EVENTS</Nuxtlink>
        <Nuxtlink to="/about">ABOUT</Nuxtlink>
      </div>
      <div class="box">
        <div class="box-content">
          <!-- Add your content here -->
        </div>
      </div>
      <div class="social-icons">
        <div class="icontitle">
          <p>join us</p>
        </div>
        <div class="icon-row">
          <FontAwesomeIcon :icon="['fab', 'youtube']" />
          <FontAwesomeIcon :icon="['fab', 'twitter']" />
          <FontAwesomeIcon :icon="['fab', 'instagram']" />
          <FontAwesomeIcon :icon="['fab', 'tiktok']" />
          <FontAwesomeIcon :icon="['fab', 'facebook']" />
          <FontAwesomeIcon :icon="['fab', 'telegram']" />
          <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
          <FontAwesomeIcon :icon="['fab', 'linkedin']" />
        </div>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;
  width: 90%;
  max-width: 1200px;
  min-height: 100vh;
}

.navs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #faf7f7;
}

.navs Nuxtlink {
  color: #faf7f7;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 1.5rem;
  transition: color 0.3s ease;
}

.navs Nuxtlink:hover {
  color: #ff5500;
}

.logo {
  width: 10rem;
  height: 4rem;
  object-fit: contain;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/p.png");
  object-fit: contain;
  mix-blend-mode: difference;
  pointer-events: none;
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 800px;
  height: 70vh;
  border-radius: 8px;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.icontitle p {
  font-size: 4rem;
  color: #faf7f7;
}

.icon-row {
  display: flex;
  gap: 1.5rem;
}

.icon-row svg {
  font-size: 3rem;
  color: hsl(0, 23%, 97%, 0.8);
  transition: color 0.3s ease;
}

/* Responsive design */
@media (max-width: 768px) {
  .navs Nuxtlink {
    font-size: 1.5rem;
    padding: 0 0.8rem;
  }

  .logo {
    width: 7rem;
    height: 3rem;
  }

  .box {
    height: 50vh;
  }

  .icon-row svg {
    font-size: 1.2rem;
  }
}
</style>
