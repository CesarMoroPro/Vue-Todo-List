// import './assets/main.css'

//! VUE ET PINIA
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/router-index';

const app = createApp(App);

//! VUETIFY
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

//! FONT-AWESOME
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faUserSecret);


//! MONTAGE DE L'APPLICATION
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app');
