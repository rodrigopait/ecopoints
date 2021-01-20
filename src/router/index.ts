import { createRouter, createWebHistory } from '@ionic/vue-router';


import Tabs from '../views/Tabs.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/home',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        children: [
          {
            path: 'importancia-reciclado',
            component: () => import('@/views/Index/ImportanciaReciclado.vue'),
          },
          {
            path: 'separar-residuos',
            component: () => import('@/views/Index/SepararResiduos.vue'),
          },
        ],
      },

      {
        path: 'mapa',
        component: () => import('@/views/Index/Mapa.vue'),
      },
      {
        path: 'favoritos',
        component: () => import('@/views/Favoritos/ListadoDeFavoritos.vue'),
      },
      {
        path: '/menuLogueado',
        name: 'MenuLogueado',
        component: () => import('@/views/Menu/MenuLogueado.vue'),
      },
    ],
  },
  {
    path: '/altaDeUsuario',
    name: 'AltaDeUsuario',
    component: () => import('@/views/Usuarios/AltaDeUsuario.vue'),
  },
  {
    path: '/editarMiPerfil',
    name: 'EditarMiPerfil',
    component: () => import('@/views/Usuarios/ActDeUsuario.vue'),
  },
  {
    path: '/altadepuntoverde',
    component: () => import('@/views/PuntosVerdes/AltaDePuntoVerde.vue'),
  },
  {
    path: '/editarPuntoVerde',
    name: 'EditarPuntoVerde',
    component: () => import('@/views/PuntosVerdes/ActDePuntoVerde.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
