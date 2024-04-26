<template lang="">
  <Panel class="create-card">
    <template #header>
      <div class="header">
        <h2>Chosen Monsters</h2>
        <Button @click="startCombat" class="encounterButton">Start Encounter!!</Button>
      </div>
    </template>
    <DataTable :value="monsters">
      <template #header>
        <Dropdown
          v-model="selectedLazyStatblock"
          :options="lazyStatblocks"
          optionLabel="label"
          class="test"
          placeholder="Lazy Statblock"
        />
        <Button icon="pi pi-plus" @click="addMonster(selectedLazyStatblock)" />
      </template>
      <template #empty> No creatures selected. </template>
      <Column field="name" header="Name">
        <template #body="{ data }">
          <a :href="'src/assets/monsters_html/' + data.slug + '.html'" target="_blank">{{
            data.name
          }}</a>
        </template>
      </Column>
      <Column field="type" header="Type"></Column>
      <Column field="cr" header="CR"></Column>
      <Column header style="width: 6rem">
        <template #body="{ data }">
          <Button icon="pi pi-trash" @click="removeMonster(data.name)" />
        </template>
      </Column>
      <template #footer>
        <p>Difficulty: {{ isDeadly }}</p>
      </template>
    </DataTable>
  </Panel>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'
import router from '@/router'

const store = useStore()

const selectedLazyStatblock = ref(null)

const lazyStatblocks = [
  {
    name: 'Minion',
    label: 'Minion (CR 0.125)',
    cr: 0.125,
    type: 'Any',
    armor_class: 11,
    hit_points: 9,
    strength: 10,
    dexterity: 12,
    constitution: 10,
    intelligence: 10,
    wisdom: 12,
    charisma: 10,
    slug: 'minion'
  },
  {
    name: 'Soldier',
    label: 'Soldier (CR 0.5)',
    cr: 0.5,
    type: 'Any',
    armor_class: 12,
    hit_points: 22,
    strength: 14,
    dexterity: 12,
    constitution: 12,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    slug: 'soldier'
  },
  {
    name: 'Brute',
    label: 'Brute (CR 2)',
    cr: 2,
    type: 'Any',
    armor_class: 13,
    hit_points: 45,
    strength: 16,
    dexterity: 12,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 8,
    slug: 'brute'
  },
  {
    name: 'Specialist',
    label: 'Specialist (CR 4)',
    cr: 4,
    type: 'Any',
    armor_class: 14,
    hit_points: 84,
    strength: 12,
    dexterity: 18,
    constitution: 14,
    intelligence: 10,
    wisdom: 14,
    charisma: 12,
    slug: 'specialist'
  },
  {
    name: 'Myrmidon',
    label: 'Myrmidon (CR 7)',
    cr: 7,
    type: 'Any',
    armor_class: 15,
    hit_points: 130,
    strength: 10,
    dexterity: 14,
    constitution: 14,
    intelligence: 18,
    wisdom: 14,
    charisma: 10,
    slug: 'myrmidon'
  },
  {
    name: 'Sentinel',
    label: 'Sentinel (CR 11)',
    cr: 11,
    type: 'Any',
    armor_class: 17,
    hit_points: 165,
    strength: 20,
    dexterity: 16,
    constitution: 16,
    intelligence: 10,
    wisdom: 14,
    charisma: 10,
    slug: 'sentinel'
  },
  {
    name: 'Champion',
    label: 'Champion (CR 15)',
    cr: 15,
    type: 'Any',
    armor_class: 19,
    hit_points: 212,
    strength: 10,
    dexterity: 12,
    constitution: 18,
    intelligence: 12,
    wisdom: 16,
    charisma: 22,
    slug: 'champion'
  }
]

const monsters = computed({
  get: () => store.getters.currentMonsters
})

const lazyBenchmark = computed(() => {
  return store.getters['players/getCurrentLazyBenchmark']
})

const currentCr = computed({
  get: () => store.getters.totalCr
})

const isDeadly = computed(() => {
  if (currentCr.value > lazyBenchmark.value) {
    return 'Deadly'
  } else {
    return 'Not Deadly'
  }
})

const removeMonster = (name) => {
  store.dispatch('removeCurrentMonster', name)
}

function addMonster(monster) {
  if (monster === null) {
    return
  }
  store.dispatch('addCurrentMonster', monster)
}

function startCombat() {
  store.dispatch('combatants/resetCombat')
  for (const monster of monsters.value) {
    store.dispatch('combatants/addCurrentCombatant', monster)
  }
  for (const player of store.getters['players/getCurrentPlayers']) {
    store.dispatch('combatants/addCurrentCombatant', player)
  }
  router.push({ name: 'encounter' })
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
div .header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.encounterButton {
  align-self: flex-end;
}
</style>
