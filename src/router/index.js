import {createRouter,createWebHashHistory} from 'vue-router'

import Home from'../views/Home.vue'
import Details from'../views/Details.vue'
import Create from'../views/Create.vue'
import Tag from'../views/tag.vue'
import Change from'../views/change.vue'

const routes = [
    {path:"/", name:"Home", component:Home},//若要加其他页面在此加入即可
    {path:"/posts/:id", name:"Details", component:Details, props: true},
    {path:"/create", name:"Create", component:Create},
    {path:"/tags/:tag", name:"Tag", component:Tag},
    {path:"/posts/:id/change", name:"Change", component:Change, props:true},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;