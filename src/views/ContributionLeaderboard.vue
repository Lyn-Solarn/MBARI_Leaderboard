<template>
  <div>
    <!-- Apply the same styling that the "All FathomNet Resources" h1 element has (https://www.fathomnet.org/resources) -->
    <h1>FathomNet Contributions</h1>

    <div>
      <!-- Can remove <br>. Currently here just for easy readability when testing -->
      <button @click="show('OrganizationsTable')">Organizations</button>
      <br>
      <button @click="show('ObserversTable', 'observer')">Bounding Box Observers</button>
      <br>
      <button @click="show('ObserversTable', 'verifier')">Reviewers</button>
    </div>

    <component :is="components[currentView]" v-bind="currentProps" :key="currentView + JSON.stringify(currentProps)"/>

    <!-- Apply the same styling that the "Our Vision" h4 element has (https://www.fathomnet.org/about) -->
    <h4>Who Contributed to FathomNet?</h4>

    <!-- Each of these are collapsable like the "Project Opportunities" section on the MBARI website (https://www.mbari.org/about/careers/internships/) -->
    <div>
      <h5>Organizations</h5>
      <div>
        [Placeholder Text]
      </div>
    </div>

    <div>
      <h5>Observers</h5>
      <div>
        [Placeholder Text]
      </div>
    </div>

    <div>
      <h5>Reviewers</h5>
      <div>
        [Placeholder Text]
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OrganizationsTable from '../components/OrganizationsTable.vue';
import ObserversTable from '../components/UsersTable.vue';

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