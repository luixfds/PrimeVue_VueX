import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Primevue from 'primevue/config'


import 'primevue/resources/themes/saga-purple/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


// COMPONENTES PRIMEVUE 
import Calendar from 'primevue/calendar'
import ColorPicker from 'primevue/colorpicker'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Primevue);
app.component('Calendar', Calendar);
app.component('ColorPicker', ColorPicker)
app.component('Password', Password)
app.component('InputText',InputText)


app.mount('#app');
