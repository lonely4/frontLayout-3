<template>
  <div class="full flex justify-center align-center">
    <div class="contain" ref="mainEl">
      <div ref="playerEl" id="player"></div>
      <canvas id="map" height="500" width="500"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from 'vue'
import { loadAction, unloadAction } from '@/ts/action/move'
import { useStore } from 'vuex'
import { runderMap } from '@/ts/map/map'

export default defineComponent({
  setup() {
    const playerEl = ref(null)
    const mainEl = ref(null)
    const store = useStore()
    onMounted(() => {
      store.commit('setMainEl', mainEl)
      store.commit('setPlayerEl', playerEl)
      loadAction()
      runderMap()
    })
    onUnmounted(() => {
      unloadAction()
    })
    return { playerEl, mainEl }
  },
  methods: {},
})
</script>

<style scoped>
.contain {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  position: relative;
}
#player {
  width: 20px;
  height: 20px;
  background-image: url('../assets/player.png');
  background-size: 20px 20px;
  position: absolute;
  left: 0;
  right: 0;
}
</style>
