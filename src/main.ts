import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uaXNhdXJpdXMiLCJhIjoiY2xlNXJtMGU5MGEzdjQwcnF0bnd5NW00ZyJ9.aJx87q2XNEUWSK_o1aTzbw';



if (!navigator.geolocation) {
  throw new Error("Geolocation is necessary | Check your browser")
}

createApp(App).use(store).use(router).mount('#app')
