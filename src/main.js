import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const publicPath = process.env.NODE_ENV === "production" ? "/qr-coin-game/" : "/";

createApp(
    App,
    {
        publicPath: publicPath
    }
).mount('#app')
