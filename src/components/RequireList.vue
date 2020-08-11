<template>
  <div id="requirement" class="requirements-list-area bg-gray">
    <div class="row align-items-center">
      <div class="col-lg-6 order-2 order-xl-1">
        <div class="requirements-list">
          <h2
            class="requirements-list__title mb-15 wow move-up"
          >{{ requirementSection.title }}</h2>
          <p
            class="requirements-list__text heading mb-30 wow move-up"
          >{{ requirementSection.description }}</p>
          <ul class="check-list green-check-list section-space--mb_50 wow move-up">
            <li v-for="item in requirementSection.requirementList" :key="item" class="list-item">{{ item }}</li>
          </ul>
          <!-- <ul class="check-list green-check-list section-space--mb_50 wow move-up">
                        <li class="list-item">Customer First Content-focused Displaying Effects </li>
                        <li class="list-item">High Definition Full-screen Sliders & Backgrounds</li>
                        <li class="list-item">Fast Loading, Reader Friendly Navigation Style</li>
                    </ul> -->
          <div class="tab-button wow move-up">
            <router-link to="branding" class="ht-btn ht-btn-md">Learn more</router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-6 order-1 order-xl-2">
        <div class="requirements-list-image wow move-up" style="margin-left: auto !important; margin-top: auto">
          <img
            :src="requirementSection.image_url"
            class="img-fluid"
            alt
          >
          <!--          <img src="../assets/img/features/aeroland-branding-image-both-laptop.png" class="img-fluid" alt="">-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RequireList',
  computed: {
    ...mapGetters(['requirementSection'])
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('requirementSection/requirementSection')
  }
}
</script>
