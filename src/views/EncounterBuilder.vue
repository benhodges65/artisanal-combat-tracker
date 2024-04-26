<template>
  <div class="creator-container">
    <monster-table></monster-table>
  </div>
</template>

<script>
import MonsterTable from '@/components/tracker/MonsterTable.vue'

export default {
  components: {
    MonsterTable,
  }
}
</script>

<style scoped>
.creator-container {
  padding-bottom: 100px; /* Adjust the value as needed */
}
.creator-container :deep(.p-panel) {
  border: 1px solid #bebebe;
  border-radius: 15px;
  box-shadow: 1px 1px 3px #ebeaea;
  margin-bottom: 1rem !important;
  padding: 10px;
}
</style>
