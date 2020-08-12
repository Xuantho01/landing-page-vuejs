<template>
  <div>
    <div class="pricing-table-area bg-gray-2 pt-30" id="pricing">
      <div class="pricing-table-title-area position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-wrapper text-center section-space--mb_60">
                <h2 class="section-title font-width-light mb-15 wow move-up">{{ pricingSection.title }}</h2>
                <span class="section-text wow move-up">{{ pricingSection.description }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pricing-table-content-area section-space--pb_90">
        <div class="container">
          <!-- Pricing component -->
          <Pricing
            v-bind:pricingTableList="pricingSection.pricingTableList"
            v-bind:popularTitle="pricingSection.popularTitle"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pricing from './Pricing'
import { mapGetters } from 'vuex'

export default {
  components: {
    Pricing
  },
  computed: {
    ...mapGetters(['pricingSection'])
  },
  mounted() {
    this.$store.dispatch('updatePricingSection')
    console.log(this.pricingSection)
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
