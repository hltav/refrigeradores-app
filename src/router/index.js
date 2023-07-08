import { createRouter, createWebHistory } from 'vue-router'
import CadastroRefrigeradores from '@/views/CadastroRefrigeradores.vue'
import ListaRefrigeradores from '@/views/ListaRefrigeradores.vue'

const routes = [
  {
    path: '/cadastro',
    name: 'CadastroRefrigeradores',
    component: CadastroRefrigeradores
  },
  {
    path: '/lista',
    name: 'ListaRefrigeradores',
    component: ListaRefrigeradores
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
