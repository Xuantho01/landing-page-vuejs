<template>
  <div class="main-container">
    <!-- Navbar section -->
    <Navbar/>

    <!-- hero section -->
    <HeroBranding/>

    <!-- about section -->
    <AboutSection/>

    <!-- business analytics start -->
    <!-- Khác tên comp con business vs  FeatureList -->
    <BusinessSection/>

    <!-- requirement section-->
    <!-- khác tên model vs comp -->
    <!-- thiếu property srcImage trong model -->
    <RequireList/>

    <!-- feature carousel -->
    <!-- khác tên model vs comp -->
    <!-- thiếu property imgSrc trong model featureCarousel -->
    <FeatureTwo/>

    <!-- feature list progress bar -->
    <div class="feature-list-progress-area pb-30">
      <div class="container">
        <!-- progress feature component -->
        <!-- thiếu title, fill, class, class 2 trong model -->
        <ProgressCircle/>
      </div>
    </div>
    <!-- feature list progress bar -->

    <!-- pricing section start-->
    <CurveShape>
      <template v-slot:bgcolor>
        <path
          style="fill: #f6f5f9;
                    stroke-miterlimit:10;"
          d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
      </template>
    </CurveShape>
    <PricingSection/>
    <!-- pricing section end-->

    <!-- partner client section -->
    <PartnerClientSection/>

    <!-- newsletter section -->
    <Newsletter/>

    <!-- footer section -->
    <FooterMain/>

    <!-- offcanvas search component -->
    <OffcanvasSearchBox/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import HeroBranding from '../components/HeroBranding'
// import AboutExpand from '../components/AboutExpand'
// import FeatureList from '../components/FeatureList'
import RequireList from '../components/RequireList'
import FeatureTwo from '../components/FeatureTwo'
import ProgressCircle from '../components/ProgressCircle'
import CurveShape from '../components/CurveShape'
// import Pricing from '../components/Pricing'
// import BrandLogo from '../components/BrandLogo'
import Newsletter from '../components/Newsletter'
import FooterMain from '../components/FooterMain'
import OffcanvasSearchBox from '../components/OffcanvasSearchBox'

import AboutSection from '../components/AboutSection'
import BusinessSection from '../components/BusinessSection'
import PricingSection from '../components/PricingSection'
import PartnerClientSection from '../components/PartnerClientSection'

export default {
  // name: 'App',
  components: {
    Navbar,
    HeroBranding,
    // AboutExpand,
    // FeatureList,
    RequireList,
    FeatureTwo,
    ProgressCircle,
    CurveShape,
    // Pricing,
    // BrandLogo,
    Newsletter,
    FooterMain,
    OffcanvasSearchBox,

    AboutSection,
    BusinessSection,
    PricingSection,
    PartnerClientSection
  }
}
</script>
