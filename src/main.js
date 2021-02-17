import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Teams from "@/components/Teams";
import JCorianDetails from "@/components/JCorianDetails";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/jcorians', component: Teams},
		{name: 'jcorianDetails', path: '/jcorians/:id', component: JCorianDetails },
		{path: '/', redirect: '/jcorians'}
	]
});
const app = createApp(App);
app.use(router);
app.mount('#app')
