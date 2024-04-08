import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

// tell it the type of routes we want to support.
const router = createRouter({
    // history tells the router how to handle the history 
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList }, // our-domain.com/teams => certain component will be loaded
        { path: '/users', component: UsersList }, // our-domain.com/teams => certain component will be loaded
    ]
});

const app = createApp(App)

app.component('teams-list', TeamsList);
app.component('users-list', UsersList);

app.use(router);

app.mount('#app');
