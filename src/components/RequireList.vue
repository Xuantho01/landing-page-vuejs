<template>
  <div id="requirement" class="requirements-list-area bg-gray">
    <div class="row align-items-center">
      <div class="col-lg-6 order-2 order-xl-1">
        <div class="requirements-list">
          <h2
            class="requirements-list__title mb-15 wow move-up"
          >{{ title }}</h2>
          <p
            class="requirements-list__text heading mb-30 wow move-up"
          >{{ description }}</p>
          <ul class="check-list green-check-list section-space--mb_50 wow move-up">
            <li v-for="item in list" :key="item" class="list-item">{{ item }}</li>
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
            :src="srcImage"
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
export default {
  name: 'RequireList',
  data() {
    return {
      title: 'Meeting all of your requirements for SEO',
      description: 'AeroLand creates a prominent advantage for your business with strong features.',
      srcImage: 'https://aphoto.vn/wp-content/uploads/2018/02/anh-dep-chup-dien-thoai.jpg',
      list: [
        'Customer First Content-focused Displaying Effects',
        'High Definition Full-screen Sliders & Backgrounds',
        'Fast Loading, Reader Friendly Navigation Style'
      ]
    }
  }
}
</script>
