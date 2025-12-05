<template>
  <div>
    <h1>FathomNet Contributions</h1>

    <div>
      <button @click="show('OrganizationsTable')">Organizations</button>
      <button @click="show('ObserversTable', 'observer')">Bounding Box Observers</button>
      <button @click="show('ObserversTable', 'verifier')">Verifiers</button>
    </div>

    <component :is="components[currentView]" v-bind="currentProps" :key="currentView + JSON.stringify(currentProps)"/>


    <StandardFooter/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OrganizationsTable from '../components/OrganizationsTable.vue';
import ObserversTable from '../components/UsersTable.vue';
import StandardFooter from '../components/StandardFooter.vue';

const currentView = ref('OrganizationsTable');
const currentProps = ref({});

const components = {
  OrganizationsTable,
  ObserversTable,
};

function show(view, mode = null) {
  currentView.value = view;
  currentProps.value = mode ? {mode} : {}
}
</script>