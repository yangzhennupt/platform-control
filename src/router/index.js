import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/lineproperty',
                    component: resolve => require(['../components/page/LineProperty.vue'], resolve)   
                },
                {
                    path: '/lineresponsibility',
                    component: resolve => require(['../components/page/LineResponsibility.vue'], resolve)   
                },
                {
                    path: '/customBusLine',
                    component: resolve => require(['../components/page/CustomBusLine.vue'], resolve)   
                },
                {
                    path: '/balance',
                    component: resolve => require(['../components/page/Balance.vue'], resolve)    
                },
                {
                    path: '/businessaudit',
                    component: resolve => require(['../components/page/BusinessAudit.vue'], resolve)
                },
                {
                    path: '/qualificationcontrol',
                    component: resolve => require(['../components/page/QualificationControl.vue'], resolve)     
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login/Login.vue'], resolve)
        }
    ]
})
