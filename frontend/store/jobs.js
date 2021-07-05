import axios from 'axios'
export const state = () => ({
  jobs: [],
})

export const mutations = {
  setJobs(state, jobs) {
    state.jobs = jobs
  },
}

export const actions = {
  getJobs({ commit }) {
    axios
      .get('http://localhost:8000/wp-json/wp/v2/posts')
      .then((res) => {
        commit('setJobs', res.data)
      })
      .catch((res) => {
        console.log('error')
        console.log(res)
      })
  },
}
