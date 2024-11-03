// plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter, faTiktok, faTelegram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faInstagram, faYoutube, faTwitter, faTiktok, faTelegram, faWhatsapp, faLinkedin)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
