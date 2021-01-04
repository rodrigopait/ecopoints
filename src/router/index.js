import { createRouter, createWebHistory } from '@ionic/vue-router';


import Tabs from '../views/Tabs.vue';


const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/altaDeUsuario',
        name: 'AltaDeUsuario',
        component: () => import('@/views/Usuarios/AltaDeUsuario.vue')
      },
      {
        path: '/editarMiPerfil',
        name: 'EditarMiPerfil',
        component: () => import('@/views/Usuarios/ActDeUsuario.vue')
      },
      {
        path: '/altaDePuntoVerde',
        name: 'AltaDePuntoVerde',
        component: () => import('@/views/PuntosVerdes/AltaDePuntoVerde.vue')
      },
      {
        path: '/editarPuntoVerde',
        name: 'EditarPuntoVerde',
        component: () => import('@/views/PuntosVerdes/ActDePuntoVerde.vue')
      },
      {
        path: '/mapa',
        name: 'Mapa',
        component: () => import('@/views/Index/Mapa.vue')
      },
      {
        path: '/importanciaReciclado',
        name: 'ImportanciaReciclado',
        component: () => import('@/views/Index/ImportanciaReciclado.vue')
      },
      {
        path: '/separarResiduos',
        name: 'SepararResiduos',
        component: () => import('@/views/Index/SepararResiduos.vue')
      },
      {
        path: '/listadoDeFavoritos',
        name: 'ListadoDeFavoritos',
        component: () => import('@/views/Favoritos/ListadoDeFavoritos.vue')
      },
      {
        path: '/menuLogueado',
        name: 'MenuLogueado',
        component: () => import('@/views/Menu/MenuLogueado.vue')
      }
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
