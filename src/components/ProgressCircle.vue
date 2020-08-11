<template>
  <div class="row">
    <div v-for="(progress, index) in progressCircle" class="col-md-6" :key="index">
      <div class="feature-list-progress section-space--pt_60">
        <div class="feature-list-progress__counter">
          <div class="circle-progress-wrapper">
            <div class="chart-progress">
              <div class="chart-progress__inner-wrapper">
                <div class="chart-progress__inner chart-progress__inner--blue">
                  <vue-circle
                    :progress="progress.progress"
                    :size="160"
                    line-cap="round"
                    :fill="index === 0 ? fill : blue"
                    :thickness="4"
                    :start-angle="0"
                    :show-percent="true">
                  </vue-circle>
                </div>
              </div>
            </div>
            <div class="circle-design one" :class="index === 0 ? class1 : class2"></div>
            <div class="circle-design two" :class="index === 0 ? class2 : class1"></div>
          </div>
        </div>
        <div class="feature-list-progress__info">
          <h6 class="feature-list-progress__title mb-20">{{ progress.featureListTitle }}</h6>
          <ul
            class="feature-list-progress__list"
            v-for="(list) in progress.featureList"
            :key="list">
            <li>{{ list }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress/src/index.vue'
import { mapGetters } from 'vuex'

const FILL = { gradient: ['#fad961', '#f76b1c'] }
const BLUE = { gradient: ['#9C7AF2', '#5E61E7'] }
// const CLASSNULL = ' '
const CLASS = 'circle-design--blue'
const CLASS2 = 'chart-progress__inner--blue'

export default {
  components: {
    VueCircle
  },
  computed: {
    // ...mapState(['progressCircle']),
    ...mapGetters(['progressCircle'])
    // progressCircle() {
    //   return this.$store.getters.progressCircle;
    // }
  },
  mounted() {
    this.$store.dispatch('updateProgressCircle')
  },
  data() {
    return {
      fill: FILL,
      blue: BLUE,
      class1: CLASS,
      class2: CLASS2
      // featureListProgress: this.$store.dispatch('updateProgressCircle')
    }
  }
}
</script>
