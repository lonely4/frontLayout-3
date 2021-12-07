import app from './use-elment'
import router from './router'
import store from './store'
import '@/style/flex.scss'
import '@/style/layout.scss'
app.use(store).use(router).mount('#app')
