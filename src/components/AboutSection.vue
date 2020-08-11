<template>
  <div>
    <div id="about" class="box-image-area section-space--ptb_120">
      <div class="container">
        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
          <h2 class="section-title mb-15">{{ sectionTitle }}</h2>
          <span class="section-text">{{ sectionText }}</span>
        </div>
        <!-- about component -->
        <AboutExpand :abouts="abouts" />
      </div>
    </div>
  </div>
</template>

<script>
import AboutExpand from './AboutExpand'

export default {
  components: {
    AboutExpand
  },
  data() {
    return {
      abouts: [
        {
          icon: require('../assets/img/box-image/aeroland-branding-box-image-01-180x180.png'),
          title: 'Social media boost'
        },
        {
          icon: require('../assets/img/box-image/aeroland-branding-box-image-02-180x180.png'),
          title: 'In-depth research analysis'
        },
        {
          icon: require('../assets/img/box-image/aeroland-branding-box-image-03-180x180.png'),
          title: 'Scientifically proven progress'
        }
      ],
      sectionTitle: 'Expand Your Business',
      sectionText: 'Plan ahead to make progress and lead the trend'
    }
  }
}
</script>

<style>
</style>
