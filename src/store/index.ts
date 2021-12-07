import { createStore } from 'vuex'
import { Map } from '@/ts/map/map'

export default createStore({
  state() {
    return {
      x: 0,
      y: 0,
      map: null,
      mainEl: null,
      playerEl: null,
    }
  },
  mutations: {
    updateX(state: any, x: number) {
      state.x = x
    },
    setMainEl(state: any, el: any) {
      state.mainEl = el
    },
    setPlayerEl(state: any, el: any) {
      state.playerEl = el
    },
    setMap(state: any, map: Map) {
      state.map = map
    },
  },
  actions: {},
  modules: {},
})
