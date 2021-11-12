import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import { ElButton } from 'element-plus'
const elList = [ElButton]
const app = createApp(App)
elList.forEach((item) => {
  app.use(item)
})
export default app
