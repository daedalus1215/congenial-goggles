import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/teams/TeamsList.vue';
import UsersList from './pages/users/UsersList.vue';
import UsersFooter from './pages/users/UsersFooter.vue';
import TeamMembers from './pages/teams/TeamMembers.vue'
import TeamsFooter from './pages/teams/TeamsFooter.vue'
import NotFound from './pages/NotFound.vue'

// Tell it the type of routes we want to support.
export const router = createRouter({
    // History tells the router how to handle the history 
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/teams',
            meta: { needsAuth: true } // can add this meta field, anywhere the this.$route object is available.
        },
        { 
            path: '/users', 
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                console.log('main\'s /user\'s route beforeEnter')
                next(); // behave normally
            }
        },
        {
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        // Called by the vue router, whenever our page changes. It receives 3 arguments: to, from, and savedPosition.
        // console.log('to', to);
        // console.log('from', from,);
        // console.log('savedPosition', savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 }
    }
});

/**
 * Built in function, it is called by the vue router when we are navigating from our route to another.
 * It receives 3 arguments, 
 * to = , 
 * from = , 
 * next = we call this to confirm, or cancel the navigation action. We can deny a user, if they are not authenticated.
 */
router.beforeEach((to, from, next) => {
    // next(false) // cancel our navigation
    console.log('Can determine if we have auth from the meta, ', to.meta.needsAuth)
    next(); // just behave normally
});

/**
 * Example of always forcing users to team-members route. 
 * We do need to check if we are heading there first. Otherwise we will cause an infinite loop.
 */
// router.beforeEach((to, from, next) => {
//     if (to.name === 'team-members') {
//         next();
//     }else {
//         next({name: 'team-members', params: {teamId: 't2'}})
//     }
// });


/**
 * Cannot deny a navigation here, because routing has already happened. But could send analytic data to the BE here.
 */
router.afterEach(() => {
    console.log('global after each')
});
