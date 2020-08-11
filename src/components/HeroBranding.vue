<template>
  <!-- <section class="hero-branding bg-cover" :style="bgImg" id="home"> -->
  <section
    id="home"
    class="hero-branding bg-cover"
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div class="container-fluid container-fluid--cp-150">
      <div class="hero-branding">
        <div class="hero-content">
          <h2 class="h1 hero-content-title">{{ title }}</h2>
          <h6 class="hero-content-subtitle mt-20">{{ description }}</h6>
          <div class="slider-button mt-30">
            <router-link :to="{ path: buttonHref }" class="ht-btn ht-btn-md">{{ buttonTitle }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// const SRC = "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
export default {
  data() {
    return {
      title: 'Executive branding campaign',
      description:
        'True branding starts from within. We create and adopt unique branding resolution to strengthen your business.',
      buttonTitle: 'Get a demo',
      buttonHref: 'branding',
      image:
        'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg'
      // bgImg: {
      //   backgroundImage: `url( ${SRC} )`,
      // backgroundImage: `url( "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" )`,
      // backgroundImage: `url(${require("../assets/img/hero/branding/branding.jpg")})`,
      // },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";
@import "../assets/scss/elements/hero-branding.scss";
</style>
