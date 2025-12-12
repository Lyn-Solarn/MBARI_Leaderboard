<template>
  <div>
    <main>
      <div>
        <v-table striped="odd">
          <thead>
            <tr>
              <th v-for="h in headers" :key="h.key" @click="h.sortable && setSort(h.key)">{{ h.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in filtered" :key="row.id">
              <td>{{ row.ownerInstitutionCode }}</td>
              <td>{{ row.images.toLocaleString() }}</td>
              <td>{{ row.uploads.toLocaleString() }}</td>
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

  const query = ref('')
  const sortKey = ref('images') 

  const headers = [
    { label: 'Name', key: 'ownerInstitutionCode', sortable: false },
    { label: '# of Images', key: 'images', sortable: true },
    { label: '# of Collections', key: 'uploads', sortable: true }
  ]

  const data = ref(fathomnetData.organizations)

  const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()

  let rows = q
    ? data.value.filter(r =>
        r.ownerInstitutionCode.toLowerCase().includes(q)
      )
    : [...data.value]

  rows.sort((rowA, rowB) => {
    const valA = rowA[sortKey.value]
    const valB = rowB[sortKey.value]
    return valB - valA
  })

  return rows.slice(0,10)
})

  function setSort(key) {
    sortKey.value = key
  }
</script>