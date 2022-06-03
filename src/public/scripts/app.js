// pages
const Activities = { template: '<div>activities </div>' }
const Bookmark = { template: '<div>bookmarks </div>' }
const Home = { template: '<router-view></router-view>' }
const Profile = { template: '<div>Profile </div>' }
const Security = { template: '<div>security </div>' }
const Settings = { template: '<div>Settings </div>' }
const Dashboard = { template: '<div>Dashboard</div>' }


const routes = [

    {
        path: '/u', component: Home, children: [
            { path: '', component: Dashboard },
            { path: 'activities', component: Activities },
            { path: 'bookmarks', component: Bookmark },
            { path: 'profile', component: Profile },
            { path: 'security', component: Security },
            { path: 'settings', component: Settings },
        ]
    },

]



// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes
})


const app = new Vue({
    router,
    vuetify: new Vuetify(),
    data() {
        return {
            name: "drizzle",
            age: 67,
        };
    },
}).$mount('#user-account')
