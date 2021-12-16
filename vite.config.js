import {
  defineConfig
} from 'vite'

//  vue
import vue from '@vitejs/plugin-vue'

//  jsx
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({
    //  jsx options
  })]
})