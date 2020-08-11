<template>
  <div id="search-overlay" class="search-overlay">
    <div class="search-overlay__inner">
      <div class="search-overlay__header">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 col-8">
              <div class="logo">
                <a :href="logoHref">
                  <img :src="searchBox.logo_src" class="img-fluid" alt="site logo">
                  <!-- <img v-bind:src="logoScr" class="img-fluid" alt="site logo"> -->
                </a>
              </div>
            </div>
            <div class="col-md-6 col-4">
              <div class="search-content text-right">
                <span
                  class="mobile-navigation-close-icon"
                  @click="toggleClass('removeClass', 'active')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search-overlay__body">
        <div class="search-overlay__form">
          <form action="#">
            <input type="text" :placeholder="searchBox.search_placeholder">
            <button type="submit">
              <i class="far fa-search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      logoScr: '',
      logoHref: 'index.html'
    }
  },
  computed: {
    ...mapGetters(['searchBox'])
  },
  mounted() {
    this.$store.dispatch('searchBox/getSearchBox')
  },
  methods: {
    // offcanvas searchbox
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-overlay')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
