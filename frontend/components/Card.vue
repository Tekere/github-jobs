<template>
  <a :href="'/jobs/show/' + job.id" class="bl_card">
    <div class="bl_card_img">
      <img v-if="job.eyeCatch" src="" alt="" />
      <img v-else src="@/assets/noimage.png" alt="" />
    </div>
    <div class="bl_card_cont">
      <h4 class="bl_card_companyName">Lev</h4>
      <h4 class="bl_card_typeOfWork">{{ job.title }}</h4>
      <div class="bl_card_subInfo">
        <div class="bl_card_subInfo_left">
          <p v-if="job.isFulltime" class="bl_card_tag el_tag">FullTime</p>
        </div>
        <div class="bl_card_subInfo_right">
          <p class="bl_card_address">{{ job.office }}</p>
          <p class="bl_card_updatedAt">{{ fromNow(job.date) }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import moment from 'moment-timezone'
// import 'moment/locale/ja'
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 投稿日を○日前に変換
    fromNow(date) {
      return moment(date).fromNow()
    },
  },
}
</script>
