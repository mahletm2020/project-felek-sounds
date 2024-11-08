<template>
  <div class="home">
    <div class="content-wrapper">
      <!-- Navigation Bar -->
      <div class="navs">
        <Nuxtlink to="/services" class="nav-link">SERVICES</Nuxtlink>
        <Nuxtlink to="/packs" class="nav-link">PACKS</Nuxtlink>
        <img src="/icons/logowhite.png" alt="Logo" class="logo" />
        <Nuxtlink to="/events" class="nav-link">EVENTS</Nuxtlink>
        <Nuxtlink to="/about" class="nav-link">ABOUT</Nuxtlink>
      </div>

      <!-- Sound Wave Container -->
      <div class="sound-wave-container">
        <!-- Left Sound Wave -->
        <div class="sound-wave left">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

        <!-- Image Box -->
        <div class="box">
          <div class="box-content">
            <!-- Content goes here -->
          </div>
        </div>

        <!-- Right Sound Wave -->
        <div class="sound-wave right">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      <!-- Social Icons -->
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
  max-width: 1300px;
  min-height: 100vh;
}

.navs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12rem;
  color: #faf7f7;
  font-family: 'lemon-milk', sans-serif;
  /* font-size: 1rem; */
  gap: 2.5rem;
  /* padding: 1rem 0; */
}

.nav-link {
  color: #faf7f7;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
  flex-shrink: 0;
  /* margin: 0 0.2rem; */
  margin-top: -5rem;
}

.nav-link:hover {
  color: #ff5500;
}

.logo {
  /* width: 15rem; */
  height: auto;
  max-height: 20rem;
  object-fit: contain;
  z-index: 1;
}

.sound-wave-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.sound-wave {
  display: flex;
  flex: 1;
  gap: 0.6rem;
  pointer-events: none;
  justify-content: space-around;
}

.sound-wave div {
  width: 10px;
  background-color: #faf7f7;
  border-radius: 20px;
  animation: pulse 0.8s infinite ease-in-out alternate;
  flex-grow: 1;
}

/* Dynamic wave heights */
.left div:nth-child(1), .right div:nth-child(1) { height: 20px; }
.left div:nth-child(2), .right div:nth-child(2) { height: 70px; }
.left div:nth-child(3), .right div:nth-child(3) { height: 90px; }
.left div:nth-child(4), .right div:nth-child(4) { height: 60px; }
.left div:nth-child(5), .right div:nth-child(5) { height: 90px; }
.left div:nth-child(6), .right div:nth-child(6) { height: 70px; }
.left div:nth-child(7), .right div:nth-child(7) { height: 70px; }
.left div:nth-child(8), .right div:nth-child(8) { height: 30px; }

.sound-wave div:nth-child(odd) { animation-duration: 0.6s; }
.sound-wave div:nth-child(even) { animation-duration: 1s; }

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/p.png");
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
  font-family: 'lemon-milk', sans-serif;
}

.icontitle p {
  font-size: 2rem;
  color: #faf7f7;
}

.icon-row {
  display: flex;
  gap: 1.5rem;


}

.icon-row svg {
  font-size: 1.9rem;
  color: hsl(0, 23%, 97%, 0.8);
  transition: color 0.3s ease;
}

/* Pulse Animation */
@keyframes pulse {
  from { transform: scaleY(1); }
  to { transform: scaleY(1.6); }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .nav-link {
    font-size: 1rem;
    margin: 0 0.8rem;
  }

  .logo {
    width: 10rem;
    max-height: 5rem;
  }

  .sound-wave div {
    width: 6px;
    height: 30px;
  }

  .icon-row svg {
    font-size: 2.5rem;
  }
}
</style>
