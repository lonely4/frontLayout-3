<template>
  <div class="full main flex box-border">
    <div class="left flex justify-center align-center">
      <img src="@/assets/play.png" />
    </div>
    <div class="right flex justify-center align-center">
      <ul @click="liclick">
        <li id="start">开始</li>
        <li id="continue">continue</li>
        <li id="about">about</li>
        <li id="exit">exit</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  methods: {
    liclick(event: Event) {
      let textContent: string = (event.target as any).id
      ;(this as any)[textContent]()
    },
    start() {
      this.$router.replace('/game')
    },
    exit() {
      window.close()
    },
  },
})
</script>

<style scoped lang="scss">
.main {
  padding: 10%;
  min-width: 500px;
  min-height: 500px;
}
.left {
  width: 60%;
}
.left img {
  width: 70%;
}
.right {
  width: 40%;
}
li {
  text-align: center;
  font-size: 2rem;
  border: 2px solid black;
  margin: 1rem 0;
  padding: 1rem;
}
li:hover {
  border-color: cornflowerblue;
  cursor: pointer;
}
</style>
