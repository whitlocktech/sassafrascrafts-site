import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"
import "bootstrap/dis/css/bootstrap.min.css"
createApp(App)
    .use(router)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
