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
              <td>{{ row.ownerInstitutionCode }}</td>
              <td>{{ row.boundingBoxes.toLocaleString() }}</td>
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
  // -- TEMPORARY -- REPLACE WHEN API ENDPOINTS ARE IMPLEMENTED --
  import TEMP from '../Data.js'

  const query = ref('')
  const sortKey = ref('boundingBoxes') 

  const headers = [
    { label: 'Name', key: 'ownerInstitutionCode', align: 'center' },
    { label: '# of Annotations', key: 'boundingBoxes', align: 'center' },
    { label: '# of Images', key: 'images', align: 'center' },
    { label: '# of Collections', key: 'uploads', align: 'center' }
  ]

  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()

    let rows = q
      ? TEMP.organizations.filter(r =>
          r.ownerInstitutionCode.toLowerCase().includes(q) ||
          String(r.rank).includes(q)
        )
      : [...TEMP.organizations]

    // rows.sort((rowA, rowB) => {
    //   const valA = rowA[sortKey.value]
    //   const valB = rowB[sortKey.value]

    //   if (valA < valB) return 1
    //   if (valA > valB) return -1
    //   return 0
    // })

    return rows
  })

  function setSort(key) {
    sortKey.value = key
  }
</script>