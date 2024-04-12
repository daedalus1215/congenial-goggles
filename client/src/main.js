import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import NotFound from './components/nav/NotFound.vue'

// tell it the type of routes we want to support.
const router = createRouter({
    // history tells the router how to handle the history 
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/users', components:{default: UsersList, footer: UsersFooter} },
        {
            path: '/teams',
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

app.component('teams-list', TeamsList);
app.component('users-list', UsersList);

app.use(router);

app.mount('#app');
