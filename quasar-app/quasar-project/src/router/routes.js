const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'interaction', component: () => import('pages/InteractionPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/CustomLayout.vue'),
    children: [
      { path: 'custom', component: () => import('pages/CustomPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
