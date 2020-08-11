<template>
  <div>
    <div class="feature-icon-list-area section-space--pb_120">
      <div class="container">
        <div class="section-title-wrapper text-center section-space--mb_100">
          <h2 class="section-title mb-30">{{ businessSection.section_title }}</h2>
          <div class="video-button-container video-popup">
            <silentbox-single :src="businessSection.video_url">
              <div class="video-play">
                <i class="fa fa-play-circle" />
                <span class="video-text">{{ businessSection.video_title }}</span>
              </div>
            </silentbox-single>
          </div>
        </div>
      </div>
      <!-- feature list component -->
      <FeatureList :features="businessSection.businessFeatureList" :image="businessSection.image_url" />
    </div>
  </div>
</template>

<script>
import FeatureList from './FeatureList'
import { mapGetters } from 'vuex'

export default {
  components: {
    FeatureList
  },
  computed: {
    ...mapGetters(['businessSection'])
  },
  data() {
    return {
      //   sectionTitle: 'Receive real-time business analytics',
      //   videoTitle: 'INTRO & DEMO VIDEO',
      //   videoUrl: 'https://www.youtube.com/watch?v=9No-FiEInLA',
      //   // image: "../assets/img/features/aeroland-feature-icon-image.png",
      //   image:
      //     'https://i1-dulich.vnecdn.net/2019/11/22/1-1574406624.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=3IsNOR6vsmvLVuh7Qx2LyA',
      //   features: [
      //     {
      //       icon: require('../assets/img/icons/aeroland-branding-box-image-01-1.png'),
      //       title: 'Cross-browser Compatible Design',
      //       description:
      //         'Apps are built based on highly compatible design for all kinds of Internet browsers.'
      //     },
      //     {
      //       icon: require('../assets/img/icons/aeroland-branding-box-image-02-1.png'),
      //       title: 'Highly Responsive Tools',
      //       description:
      //         'Apps are built based on highly compatible design for all kinds of Internet browsers.'
      //     },
      //     {
      //       icon: require('../assets/img/icons/aeroland-branding-box-image-03-1.png'),
      //       title: 'Completely Mobile Ready',
      //       description:
      //         'Apps are built based on highly compatible design for all kinds of Internet browsers.'
      //     }
      //   ]
      // }
    }
  },
  mounted() {
    this.$store.dispatch('businessSection/getBusinessSection')
  }
}
</script>

<style lang="scss" scoped>
</style>
