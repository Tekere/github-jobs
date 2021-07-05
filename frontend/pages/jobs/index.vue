<template>
  <main id="job_index">
    <div class="ly_fv bl_search">
      <div class="bl_search_form hp__position_center">
        <input
          type="text"
          class="bl_search_input"
          placeholder="Title, companies, expertise or benefits"
        />
        <button class="el_btn el_btn__blue bl_search_btn">search</button>
      </div>
    </div>
    <div class="ly_container">
      <div class="ly_sideCont">
        <SideBar></SideBar>
      </div>
      <!-- ./ ly_sideCont -->
      <div class="ly_mainCont">
        <div class="bl_card_unit">
          <Card v-for="job of jobs" :id="job.id" :key="job.id"></Card>
        </div>
        <div class="bl_pagination">
          <!--  -->
        </div>
      </div>
      <!-- ./ ly_mainCont -->
    </div>
    <!-- ./ ly_container -->
  </main>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SideBar,
    Card,
  },
  data() {
    return {
      //
    }
  },
  // computed
  computed: {
    ...mapState({
      jobs: (state) => state.jobs.jobs,
    }),
  },
}
</script>
