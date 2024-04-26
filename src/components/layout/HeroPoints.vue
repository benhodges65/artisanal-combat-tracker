<template>
  <div class="hero-points-container">
    <Card style="width: 15rem; overflow: hidden">
      <template #content>
        <div class="hero-points-box">
          <div class="hero-points-value">
            <span class="hero-points-label">Available Hero Points:</span>
            <span class="hero-points-number">{{ availableHeroPoints }}</span>
          </div>
          <div class="hero-points-value">
            <span class="hero-points-label">Earned Hero Points:</span>
            <span class="hero-points-number">{{ earnedHeroPoints }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const availableHeroPoints = computed(function () {
      return store.getters.availableHeroPoints
    })
    const earnedHeroPoints = computed(function () {
      return store.getters.earnedHeroPoints
    })
    return {
      availableHeroPoints,
      earnedHeroPoints
    }
  }
}
</script>

<style>
.hero-points-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.hero-points-box {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}

.hero-points-value {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.hero-points-label {
  font-weight: bold;
}

.hero-points-number {
  color: #007bff;
  margin-left: 0.5rem;
}
</style>
