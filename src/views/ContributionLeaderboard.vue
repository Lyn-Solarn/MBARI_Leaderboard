<template>
  <div>
    <!-- Apply the same styling that the "All FathomNet Resources" h1 element has (https://www.fathomnet.org/resources) -->
    <h1>FathomNet Contributions</h1>

    <div>
      <button @click="show('OrganizationsTable')">Organizations</button>
      <button @click="show('ObserversTable', 'observer')">Bounding Box Observers</button>
      <button @click="show('ObserversTable', 'verifier')">Verifiers</button>
    </div>

    <component :is="components[currentView]" v-bind="currentProps" :key="currentView + JSON.stringify(currentProps)"/>

    <!-- Apply the same styling that the "Our Vision" h4 element has (https://www.fathomnet.org/about) -->
    <h4>Who Contributed to FathomNet?</h4>

    <h5>Organizations</h5>
    <h5>Observers</h5>
    <h5>Reviewers</h5>

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