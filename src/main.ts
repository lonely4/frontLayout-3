import app from './use-elment'
import router from './router'
import store from './store'
app.use(store).use(router).mount('#app')
