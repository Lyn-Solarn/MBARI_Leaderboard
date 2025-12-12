<template>
  <div>
    <main>
      <div>
        <v-table striped="odd">
          <thead>
            <tr>
              <th v-for="h in headers" :key="h.key">{{ h.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in filtered" :key="row.id">
              <td>{{ row.name }}</td>
              <td>{{ row.count.toLocaleString() }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import fathomnetData from '../Data.js'

const props = defineProps({
  mode: {
    type: String,
    required: true
  }
});

const data = ref(
  props.mode === "observer"
    ? fathomnetData.observers
    : fathomnetData.reviewer
)

const query = ref('')
const sortKey = ref('count')

const headers = [
  { label: 'Name', key: 'name' },
  { label: '# of Bounding Boxes', key: 'count' },
]

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()

  let rows = q
    ? data.value.filter(r => r.name.toLowerCase().includes(q))
    : [...data.value]

  rows.sort((a, b) => b[sortKey.value] - a[sortKey.value])

  return rows.slice(0,10)
})
</script>