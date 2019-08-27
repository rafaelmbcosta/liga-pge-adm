import service from '@/service/index'
import store from '../index'

const state = {

}

const getters = {

}

const mutations = {
  RUN_TASK(task){
    let url = {
      'closed_market': '/api/v1/closed_market_routines',
      'round_finished': '/api/v1/round_finished_routines',
      'currencies': '/api/v1/currencies/rerun'
    }
    service.runTask(url[task])
      .then(response => {

      })
      .catch(error => {
        
      })
  }
}
  
const actions = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
