import { createApp } from 'vue';

import App from './App.vue';
import TeamsList from './pages/teams/TeamsList.vue';
import UsersList from './pages/users/UsersList.vue';
import SignUpPage from './pages/signup/SignupPage.vue';
import { router } from './router';

const app = createApp(App);

app.component('teams-list', TeamsList);
app.component('users-list', UsersList);
app.component('sign-up', SignUpPage);

app.use(router);

app.mount('#app');
