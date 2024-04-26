<template lang="">
  <Panel header="Fight!" class="create-card">
    <DataTable :value="combatants" sortField="initiative" :sortOrder="-1" class="combat-table">
      <template #header>
        <div class="header">
          <InputText
            v-model="combatantName"
            placeholder="Combatant Name"
            v-on:keyup.enter="addCombatant"
          />
          <Button icon="pi pi-plus" @click="addCombatant" />
        </div>
      </template>
      <template #empty> No one in the fight </template>

      <Column field="initiative" header="Init" style="width: 7%">
        <template #body="{ data }">
          <InputNumber v-model="data.initiative" style="width: 100%" class="numberInput" />
        </template>
      </Column>

      <Column field="name" header="Name" style="width: 20%">
        <template #body="{ data }">
          <a
            v-if="data.slug"
            :href="'monsters_html/' + data.slug + '.html'"
            target="_blank"
            class="combatant-name"
          >
            {{ data.name }}
          </a>
          <span v-else class="combatant-name">{{ data.name }}</span>
        </template>
      </Column>

      <Column field="notes" header="Notes" style="width: 40%">
        <template #body="{ data }">
          <InputText v-model="data.notes" style="width: 100%" class="combat-notes" />
        </template>
      </Column>

      <Column field="armor_class" header="AC" style="width: 7%">
        <template #body="{ data }">
          <InputNumber v-model="data.armor_class" style="width: 100%" class="numberInput" />
        </template>
      </Column>

      <Column header="Apply Dam" style="width: 7%">
        <template #body="{ data }">
          <InputNumber
            v-model="data.damage"
            v-on:keyup.enter="onDamageEvent(data)"
            style="width: 100%"
            class="numberInput"
          />
        </template>
      </Column>

      <Column header="Curr HP" style="width: 7%">
        <template #body="{ data }">
          <span v-if="data.hit_points !== undefined" class="current-hp">
            {{ data.hit_points - data.currentDamage }}
          </span>
        </template>
      </Column>

      <Column header="Max HP" style="width: 7%">
        <template #body="{ data }">
          <InputNumber v-model="data.hit_points" style="width: 100%" class="numberInput" />
        </template>
      </Column>

      <Column header="" style="width: 10%">
        <template #body="{ data }">
          <Button icon="pi pi-trash" @click="removeMonster(data.name)" class="remove-button" />
        </template>
      </Column>
    </DataTable>
  </Panel>
  <Panel header="Encounter Notes">
    <Textarea v-model="encounterNotes" rows="5" cols="30" />
  </Panel>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'

const store = useStore()

const combatantName = ref('')

const encounterNotes = ref('')

const combatants = computed({
  get: () => store.getters['combatants/currentCombatants']
})

function addCombatant() {
  if (combatantName.value === '') {
    return
  }
  let combatant = {
    name: combatantName.value,
    initiative: Math.floor(Math.random() * 20) + 1
  }
  store.dispatch('combatants/addCurrentCombatant', combatant)
}

const onDamageEvent = (data) => {
  if (data.damage === null) {
    return
  }
  const payload = {
    combatant: data,
    damage: data.damage
  }
  store.dispatch('combatants/applyDamage', payload)
  data.damage = null
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

.numberInput :deep(.p-inputtext) {
  font-size: 0.8rem;
  width: 2.2rem;
}

.numberACInput :deep(.p-inputtext) {
  width: 2.2rem;
}

.combat-notes {
  font-size: 0.8rem;
}
.numberInput {
  font-size: 0.8rem;
}
</style>
