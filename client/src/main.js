import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'

// tell it the type of routes we want to support.
const router = createRouter({
    // history tells the router how to handle the history 
    history: createWebHistory(),
    routes: [
        { path: '/', component: TeamsList },
        { path: '/users', component: UsersList },
        { path: '/teams', component: TeamsList },
        { path: '/teams/:teamId', component: TeamMembers, props: true },
    ]
});

const app = createApp(App)

app.component('teams-list', TeamsList);
app.component('users-list', UsersList);

app.use(router);

app.mount('#app');
