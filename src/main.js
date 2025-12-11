import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
});


createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app');