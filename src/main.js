 

import { createApp } from 'vue'
import App from './App.vue'

import router from './components/router'; 

let app= createApp(App)
app.use(router);
app.mount('#app')
