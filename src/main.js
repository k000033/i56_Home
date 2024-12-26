import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import SvgIcon from './components/SvgIcon/index.vue';
import 'virtual:svg-icons-register'; // Ensure this path is correct or the file exists
import '../src/assets/output.css';

const app = createApp(App);
app.component('SvgIcon', SvgIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
