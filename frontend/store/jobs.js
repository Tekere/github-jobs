import axios from 'axios'
export const state = () => ({
  jobs: [],
})

export const getters = {
  jobs: (state) => {
    const jobs = Array.from(state.jobs)

    const result = jobs.map((el) => {
      // 使うプロパティのみ抽出してオブジェクトを生成。
      const { id, title, date, custom_fields } = el
      return {
        id,
        title: title.rendered,
        date,
        company: custom_fields.company_name[0],
        office: custom_fields.office[0],
        isFulltime: custom_fields.is_Fulltime[0] === '1' ? true : false,
      }
    })

    return result
  },
}

export const mutations = {
  setJobs(state, jobs) {
    state.jobs = jobs
  },
}

export const actions = {
  fetchJobs({ commit }) {
    axios
      .get('http://localhost:8000/wp-json/wp/v2/posts')
      .then((res) => {
        commit('setJobs', res.data)
        console.log('fetchJobs-res:')
        console.log(res.data)
      })
      .catch((res) => {
        console.log('error')
        console.log(res)
      })
  },
}
// export default {
//   state,
//   getters,
//   mutations,
//   actions,
// }
