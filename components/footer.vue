<template>
  <section class="connect-section">
    <div class="connect-left">
      <h2>Ready to work with us?</h2>
      <button class="contact-btn">Contact Us</button>
    </div>

    <div class="connect-logo">
      <img src="/images/p.png" alt="Logo" />
    </div>

    <div class="connect-right">
      <div class="social-icons">
        <div class="icontitle">
          <p>Join Us</p>
        </div>
        <div class="icon-row">
          <!-- Social Icons -->
          <a href="#" class="social-icon" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 15V9l5 3l-5 3Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6a8.7 8.7 0 0 1-2.74 1.05a4.26 4.26 0 0 0-7.26 3.88A12.1 12.1 0 0 1 3 5.15a4.25 4.25 0 0 0 1.32 5.7a4.27 4.27 0 0 0 3.4 4.18a4.3 4.3 0 0 1-1.92.07a4.27 4.27 0 0 0 3.98 2.95A8.57 8.57 0 0 1 3.7 20a12.1 12.1 0 0 0 6.56 1.92C17.13 22 22 17.48 22 12.17c0-.18-.01-.36-.02-.53A8.7 8.7 0 0 0 22.46 6Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Zm6.5-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 3a5 5 0 0 1 5 5v8a5 5 0 1 1-5-5h1V7h-1v4h-3V7H8v10h5a3 3 0 1 0 3-3V8a3 3 0 1 0-3-3V3Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 9h4V5h2V2h-2a6 6 0 0 0-6 6v3H5v4h3v7h4v-7h3l1-4h-4V9Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12l9.5 3l3 1l4.5 3l1-4l-12-8l-4.5 5Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-2 13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2h1v1h2v-1h1v2Z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 9h3v10H6V9Zm1.5-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm3.5 6h3v1.5h.1A3 3 0 0 1 18 9c3 0 3.5 2 3.5 5v5H18v-5a1.5 1.5 0 0 0-3 0v5h-3V9Z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.connect-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: url('/images/dude.jpg') no-repeat center;
  background-size: cover;
  height: 300px;
  color: #fff;
  font-family: 'lemon-milk', sans-serif;

}

.connect-left h2  {
  font-size: 3rem;
}
.icontitle{
  color: #fff;
  font-family: 'lemon-milk', sans-serif;
  font-size: 2rem;

}

.contact-btn {
  padding: 10px 20px;
  border: 2px solid #fff;
  color: #0a0a0a;
  background: transparent;
  cursor: pointer;
  border-radius: 15px;
  background-color: #faf7f7;
}

.connect-logo img {
  width: 100px;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.social-icon svg {
  width: 2.5rem;
  height: 2.5rem;
  color: #faf7f7;
  transition: color 0.3s;
}

.social-icon svg:hover {
  color: #ff4500;
}
</style>
