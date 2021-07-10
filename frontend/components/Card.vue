<template>
  <a :href="'/jobs/show/' + job.id" class="bl_card">
    <div class="bl_card_img">
      <img src="" alt="" />
    </div>
    <div class="bl_card_cont">
      <h4 class="bl_card_companyName">Lev</h4>
      <h4 class="bl_card_typeOfWork">{{ job.title }}</h4>
      <div class="bl_card_subInfo">
        <div class="bl_card_subInfo_left">
          <p class="bl_card_tag el_tag">FullTime</p>
        </div>
        <div class="bl_card_subInfo_right">
          <p class="bl_card_address">New York</p>
          <p class="bl_card_updatedAt">{{ fromNow() }}</p>
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
    fromNow() {
      const date = moment(this.job.date)
      return date.fromNow()
    },
  },
}
</script>
