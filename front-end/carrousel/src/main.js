import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// const axios = require('axios');
// axios.getUri('http://localhost:3000/')

createApp(App).use(router).mount('#app')
