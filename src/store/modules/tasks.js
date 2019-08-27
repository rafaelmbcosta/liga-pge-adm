import service from '@/service/index'

const state = {
  tasks: [
    {
      title: 'Rotinas de mercado fechado',
      description: [
        'Criação dos confrontos',
        'Atualiza lista dos confrontos',
        'Cria as pontuações'
      ],
      action: 'closed_market',
      loading: false
    },
    {
      title: 'Rotinas de rodada finalizada',
      description: [
        'Salva os pontos dos times',
        'Calcula os resultados dos confrontos',
        'Salva as cartoletas',
        'Calcula o turno / campeonato',
        'Atualiza Todas as listas'
      ],
      action: 'round_finished',
      loading: false
    },
    {
      title: 'Rodar Financeiro novamente',
      description: [
        'Recalcula todas as pontuações do financeiro'
      ],
      action: 'currencies',
      loading: false
    }
  ]
}

const getters = {
  getTasks: state => { return state.tasks }
}

const mutations = {
  SELECT_TASK(state, task){
    console.log('netrou no select task: '+task)
    task.loading = true 
    return task
  },
  TOGGLE_LOADING(state, [task, value]) {
    console.log('netrou no toggle loading')
    task.loading = value

  },
  RUN_TASK(state, task){
    console.log('entrou na mutation run')
    let url = {
      'closed_market': '/api/v1/closed_market_routines',
      'round_finished': '/api/v1/round_finished_routines',
      'currencies': '/api/v1/currencies/rerun'
    }
    console.log(url[task.action])
    service.runTask(url[task.action])
      .then(_response => {
      })
      .catch(error => {
        
      })
  }
}

const actions = {
  runTask({ commit }, task) {
    console.log('chegou run task')
    commit('TOGGLE_LOADING', [task, true])
    commit('RUN_TASK', task)
    commit('TOGGLE_LOADING', [task, false])
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
