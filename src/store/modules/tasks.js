import service from '@/service/index'
import store from '../index'

const state = {
  tasks: [
    {
      title: 'Rotinas gerais',
      description: [
        'Finaliza Rodadas',
        'Fecha Mercado',
        'Atualiza Times',
        'Finaliza/Inicia temporada'
      ],
      action: 'general_tasks',
      loading: false
    },
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
  SELECT_TASK (_state, task) {
    task.loading = true
    return task
  },
  TOGGLE_LOADING (_state, [task, value]) {
    task.loading = value
  },
  RUN_TASK (_state, task) {
    let url = {
      closed_market: '/closed_market_routines',
      round_finished: '/round_finished_routines',
      currencies: '/currencies/rerun',
      general_tasks: '/general_tasks_routines'
    }
    service.runTask(url[task.action])
      .then(_response => {
        store.commit('util/SEND_MESSAGE', ['success', 'Rotina executada com sucesso'])
      })
      .catch(error => {
        store.commit('util/SEND_MESSAGE', ['error', 'Erro ao executar rotina ' + error])
      })
  }
}

const actions = {
  runTask ({ commit }, task) {
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
