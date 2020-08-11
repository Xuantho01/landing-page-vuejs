<template>
  <div>
    <div id="about" class="box-image-area section-space--ptb_120">
      <div class="container">
        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
          <h2 class="section-title mb-15">{{ aboutSection.title }}</h2>
          <span class="section-text">{{ aboutSection.text }}</span>
        </div>
        <!-- about component -->
        <AboutExpand :about-expand="aboutSection.aboutExpandList" />
      </div>
    </div>
  </div>
</template>

<script>
import AboutExpand from './AboutExpand'
import { mapGetters } from 'vuex'

export default {
  components: {
    AboutExpand
  },
  computed: {
    ...mapGetters(['aboutSection'])
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('aboutSection/aboutSection')
  }
}
</script>

<style>
.section-title{
  font-size: 45px;
}
</style>
