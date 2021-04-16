/** All routes configurations */
export default [
  {
    path: '/',
    name: 'Platform',
    component: () => import('@/views/Platform'),
    children: [
      {
        path: '/',
        name: 'EditorView',
        component: () => import('@/views/EditorView'),
      },
    ],
  },
  // catch all redirect
  { path: '*', redirect: '/' },
];
