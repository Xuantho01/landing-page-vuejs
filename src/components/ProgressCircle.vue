<template>
  <div class="row">
    <div v-for="(progress, index) in featureListProgress" :key="index" class="col-md-6">
      <div class="feature-list-progress section-space--pt_60">
        <div class="feature-list-progress__counter">
          <div class="circle-progress-wrapper">
            <div class="chart-progress">
              <div class="chart-progress__inner-wrapper">
                <div class="chart-progress__inner " :class="progress.class2">
                  <vue-circle :progress="progress.progress" :size="160" line-cap="round" :fill="progress.fill" :thickness="4" :start-angle="0" :show-percent="true" />
                </div>
              </div>
            </div>
            <div class="circle-design one" :class="progress.class" />
            <div class="circle-design two" :class="progress.class" />
          </div>
        </div>
        <div class="feature-list-progress__info">
          <h6 class="feature-list-progress__title mb-20">{{ progress.title }}</h6>
          <ul
            v-for="(list) in progress.listProgress"
            :key="list"
            class="feature-list-progress__list"
          >
            <li>{{ list }}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress/src/index.vue'

const FILL = { gradient: ['#fad961', '#f76b1c'] }
const BLUE = { gradient: ['#9C7AF2', '#5E61E7'] }
const CLASSNULL = ' '
const CLASS = 'circle-design--blue'
const CLASS2 = 'chart-progress__inner--blue'

export default {
  components: {
    VueCircle
  },
  data() {
    return {
      featureListProgress: [
        {
          progress: 80,
          title: 'Digital Marketing',
          fill: FILL,
          class: CLASSNULL,
          class2: CLASSNULL,
          listProgress: [
            'Digital Marketing',
            'Website audit',
            'Marketing, SEO',
            'Social Media',
            'On-page  Audit',
            'On-page SEO Audit'
          ]
        },
        {
          progress: 90,
          title: 'Digital Marketing',
          blue: BLUE,
          class: CLASS,
          class2: CLASS2,
          listProgress: [
            'Digital Marketing',
            'Website audit',
            'Marketing, SEO',
            'Social Media',
            'On-SEO Audit',
            'On-page SEO '
          ]
        }
      ]
    }
  }
}
</script>
