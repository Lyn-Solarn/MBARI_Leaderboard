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
              <td>{{ row.boundingboxes.toLocaleString() }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </main>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    // -- TEMPORARY -- UPDATE WHEN API ENDPOINTS ARE IMPLEMENTED --
    import TEMP from '../Data.js'

    const props = defineProps({
        mode: {
            type: String,
            required: true
        }
    });

    const data = (props.mode == 'observer') ? TEMP.observers : TEMP.verifiers;

    const query = ref('')
    const sortKey = ref('boundingboxes') 

    const headers = [
    { label: 'Name', key: 'name', align: 'center' },
    { label: '# of Bounding Boxes', key: 'boundingboxes', align: 'center' },
    ]

    const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()

    let rows = q
        ? data.filter(r =>
            r.name.toLowerCase().includes(q) ||
            String(r.rank).includes(q)
        )
        : [...data]

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