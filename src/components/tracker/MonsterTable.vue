<template>
  <PlayerCharacters></PlayerCharacters>
  <chosen-monsters></chosen-monsters>
  <Panel header="Artisanal Monster Table" class="create-card">
    <DataTable
      :value="monsters"
      removableSort
      tableStyle=""
      paginator
      :rows="50"
      v-model:filters="filters"
      filterDisplay="menu"
      dataKey="slug"
      :loading="loading"
      :globalFilterFields="['name', 'type', 'cr', 'document__title']"
    >
      <template #header>
        <div class="flex justify-content-between">
          <InputText v-model="filters['global'].value" placeholder="Name Search" />
        </div>
      </template>
      <template #empty> No monsters found. </template>
      <template #loading> Loading monster data. Please wait. </template>
      <Column field="name" header="Name" sortable style="width: 35%">
        <template #body="{ data }">
          <a :href="'monsters_html/' + data.slug + '.html'" target="_blank">{{ data.name }}</a>
        </template>
      </Column>
      <Column
        field="cr"
        header="CR"
        sortable
        style="width: 10%"
        filter-field="cr"
        :showFilterMatchModes="false"
        :show-clear-button="false"
        :show-apply-button="false"
      >
        <template #filter="{ filterModel, filterCallback }">
          <Slider
            v-model="filterModel.value"
            range
            :min="0"
            :max="30"
            class="m-3"
            @change="filterCallback"
          ></Slider>
          <div class="flex align-items-center justify-content-between px-2">
            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
            <span>{{ filterModel.value ? filterModel.value[1] : 30 }}</span>
          </div>
        </template>
      </Column>
      <Column
        field="type"
        header="Type"
        sortable
        style="width: 25%"
        filterField="type"
        :showFilterMatchModes="false"
        :show-clear-button="false"
        :show-apply-button="false"
      >
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <span>{{ data.type }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <MultiSelect
            v-model="filterModel.value"
            @change="filterCallback()"
            :options="types"
            placeholder="Any"
            class="p-column-filter"
            :maxSelectedLabels="1"
          >
            <template #option="slotProps">
              <div class="flex align-items-center gap-2">
                <span>{{ slotProps.option }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column>
      <Column
        field="document__title"
        header="Source"
        sortable
        style="width: 30%"
        filterField="document__title"
        :showFilterMatchModes="false"
      >
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <span>{{ data.document__title }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <MultiSelect
            v-model="filterModel.value"
            @change="filterCallback()"
            :options="sources"
            placeholder="Any"
            class="p-column-filter"
            :maxSelectedLabels="1"
          >
            <template #option="slotProps">
              <div class="flex align-items-center gap-2">
                <span>{{ slotProps.option }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column>
      <Column>
        <template #body="{ data }">
          <Button Button icon="pi pi-plus" @click="addMonster(data)" />
        </template>
      </Column>
    </DataTable>
  </Panel>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { MonsterService } from '@/service/MonsterService'
import { FilterMatchMode } from 'primevue/api'
import ChosenMonsters from './BuilderPage/ChosenMonsters.vue'
import PlayerCharacters from './BuilderPage/PlayerCharacters.vue'
import { useStore } from 'vuex'

const store = useStore()
const monsters = ref()
const loading = ref(true)

onMounted(() => {
  MonsterService.getMonsters().then((data) => {
    monsters.value = data
    loading.value = false
  })
})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  type: { value: null, matchMode: FilterMatchMode.IN },
  cr: { value: [0, 30], matchMode: FilterMatchMode.BETWEEN },
  document__title: { value: null, matchMode: FilterMatchMode.IN }
})

const types = ref([
  'Aberration',
  'Beast',
  'Celestial',
  'Construct',
  'Dragon',
  'Elemental',
  'Fey',
  'Fiend',
  'Giant',
  'Humanoid',
  'Monstrosity',
  'Ooze',
  'Plant',
  'Undead'
])

const sources = ref([
  'Tome of Beasts',
  'Tome of Beasts 2023',
  'Creature Codex',
  'Tome of Beasts 2',
  'A5e Monstrous Menagerie',
  'Tome of Beasts 3'
])
function addMonster(monster) {
  store.dispatch('addCurrentMonster', monster)
}
</script>
<style scoped>
:deep(.p-datatable .p-datatable-tbody > tr > td) {
  padding: 0.25rem 0.25rem;
}
</style>
