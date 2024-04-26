<template lang="">
  <Panel toggleable header="Current Players" class="create-card">
    <DataTable :value="players">
      <template #header>
        <InputText v-model="name" placeholder="Character Name" />
        <Dropdown v-model="selectedLevel" :options="levelChoices" class="test" />
        <Button icon="pi pi-plus" @click="addPlayer" />
      </template>
      <template #empty> No characters added. </template>
      <Column field="name" header="Character Name"></Column>
      <Column field="level" header="Level"></Column>
      <Column header style="width: 6rem">
        <template #body="{ data }">
          <Button icon="pi pi-trash" @click="removePlayer(data.id)" />
        </template>
      </Column>
    </DataTable>
    <p>Lazy Benchmark: {{ lazyBenchmark }}</p>
  </Panel>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'

const store = useStore()
const levelChoices = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

const name = ref('')
const selectedLevel = ref(1)

const players = computed({
  get: () => store.getters['players/getCurrentPlayers']
})

const lazyBenchmark = computed(() => {
  return store.getters['players/getCurrentLazyBenchmark']
})

const addPlayer = () => {
  if (name.value === '') {
    let tempCount = 1
    while (players.value.some((player) => player.name === `Player ${tempCount}`)) {
      tempCount++
    }
    name.value = `Player ${tempCount}`
  }
  let id = Math.random().toString(36).substr(2, 9)
  store.dispatch('players/addCurrentPlayer', {
    name: name.value,
    level: selectedLevel.value,
    id: id
  })
  name.value = ''
}

const removePlayer = (id) => {
  store.dispatch('players/removeCurrentPlayer', id)
}
</script>
<style scoped>
:deep(.p-inputtext) {
  padding: 0.3rem;
  margin: 0rem;
}

.test :deep(.p-inputtext) {
  padding: 0rem !important;
  padding-left: 0.3rem !important;
  margin: 0rem;
}
:deep(.p-button.p-button-icon-only) {
  padding: 0.4rem;
  margin: 0rem;
}
</style>
