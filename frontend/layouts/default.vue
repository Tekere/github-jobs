<template>
  <div class="ly_page_inner">
    <header class="ly_header">
      <h1 class="bl_header_ttl">
        <a href="/jobs">GitHub <span>Jobs</span></a>
      </h1>
    </header>
    <Nuxt />
    <footer class="ly_footer">
      <p>created by tekere - devChallenges.io</p>
    </footer>
  </div>
</template>
<script>
import '@/assets/style.scss'
import { mapActions } from 'vuex'
const width = window.screen.width || window.innerWidth
const viewport = document.querySelector('[name="viewport"]')
if (viewport) {
  const content = viewport.getAttribute('content')
  if (width < 400) {
    const viewport375 =
      'width=400, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
    if (content !== viewport375) {
      viewport.setAttribute('content', viewport375)
    }
  } else {
    const viewportNormal =
      'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
    if (content !== viewportNormal) {
      viewport.setAttribute('content', viewportNormal)
    }
  }
}

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('jobs', ['getJobs']),
  },
  created() {
    this.getJobs()
    // .then((this.show = true))
  },
}
</script>
