<template>
  <div id="contact" class="newsletter-section section-space--ptb_120 default-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 ml-auto mr-auto">
          <div class="section-title-wrapper text-center section-space--mb_50 wow move-up">
            <h3 class="section-title text-white" v-html="newsletter.title" />
          </div>
          <!-- newsletter form -->
          <div class="newsletter-form--one section-space--mb_20 text-center wow move-up">
            <form action="#">
              <input type="text" placeholder="Your name">
              <input type="email" placeholder="Email">
              <button class="btn btn--white btn-text-theme" :href="newsletter.button_href">{{ newsletter.button_title }}</button>
            </form>
          </div>
          <!-- newsletter text -->
          <h6 class="text-white text-center wow move-up">
            {{ newsletter.description }}
            <a :href="newsletter.description_button_href" class="hover-style-link hover-style-link--green">{{ newsletter.description_button_title }}</a>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Newsletter',
  data() {
    return {
      title: '493 businesses signed up <br/> last week. Join them!',
      text: 'What’s next in AeroLand?',
      textHref: '#',
      buttonTitle: 'Learn more',
      textTitle: ''
    }
  },
  computed: {
    ...mapGetters(['newsletter'])
  },
  mounted() {
    this.$store.dispatch('newsletter/getNewsletter')
  }
}
</script>
