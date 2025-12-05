<template>
  <div>
    <main>
      <div>
        <v-table striped="odd">
          <thead>
            <tr>
              <th v-for="h in headers" :key="h.key" @click="setSort(h.key)">{{ h.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in filtered" :key="row.id">
              <td>{{ row.name }}</td>
              <td>{{ row.annotations.toLocaleString() }}</td>
              <td>{{ row.images.toLocaleString() }}</td>
              <td>{{ row.collections.toLocaleString() }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </main>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  // -- TEMPORARY -- REPLACE WHEN API ENDPOINTS ARE IMPLEMENTED --
  import TEMP from '../TempData.js'

  const query = ref('')
  const sortKey = ref('annotations') 

  const headers = [
    { label: 'Name', key: 'name', align: 'center' },
    { label: '# of Annotations', key: 'annotations', align: 'center' },
    { label: '# of Images', key: 'images', align: 'center' },
    { label: '# of Collections', key: 'collections', align: 'center' }
  ]

  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()

    let rows = q
      ? TEMP.organizations.filter(r =>
          r.name.toLowerCase().includes(q) ||
          String(r.rank).includes(q)
        )
      : [...TEMP.organizations]

    rows.sort((rowA, rowB) => {
      const valA = rowA[sortKey.value]
      const valB = rowB[sortKey.value]

      if (valA < valB) return 1
      if (valA > valB) return -1
      return 0
    })

    return rows
  })

  function setSort(key) {
    sortKey.value = key
  }
</script>