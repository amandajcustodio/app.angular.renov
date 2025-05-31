export const routes = {
  users: {
    base: '/usuarios',
    byId: (id: number) => `/usuarios/${id}`,
    register: '/usuarios/register',
    login: '/usuarios/login'
  },
  equipments: {
    byId: (id: number) => `/equipamentos/${id}`,
    register: '/equipamentos/cadastrar'
  },
  notifications: {
    base: '/notificacoes',
    byId: (id: number) => `/notificacoes/${id}`
  }
}