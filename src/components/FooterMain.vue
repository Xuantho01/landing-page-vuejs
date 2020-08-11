<template>
  <div class="footer-area-wrapper" :class="FooterStyle">
    <div class="footer-area section-space--ptb_90">
      <div class="container">
        <div class="row footer-widget-wrapper">
          <div class="col-lg-4 col-md-6 footer-widget">
            <div class="footer-widget__logo mb-30">
              <router-link to="/">
                <img src="../assets/img/logo/logo-dark.png" class="img-fluid logo-dark" alt>
                <img src="../assets/img/logo/logo-light.png" class="img-fluid logo-light" alt>
              </router-link>
            </div>

            <ul class="footer-widget__list">
              <li>{{ widgetList.title }}</li>
              <li v-for="(list,index) in widgetList.link" :key="index">
                <a :href="widgetList.href[index]" class="hover-style-link">{{ list }}</a>
              </li>
            </ul>
            <!-- <ul class="footer-widget__list">
              <li>58 Howard Street #2 San Francisco, CA 941</li>
              <li>
                <a href="#" class="hover-style-link">contact@aeroland.com</a>
              </li>
              <li>
                <a href="#" class="hover-style-link">(+68)1221 09876</a>
              </li>
              <li>
                <a href="#" class="hover-style-link hover-style-link--green">www.website.com</a>
              </li>
            </ul>-->
          </div>

          <div
            v-for="(foot,index) in footerList"
            :key="index"
            class="col-lg-4 col-md-6 footer-widget"
          >
            <h6 class="footer-widget__title mb-20">{{ foot.title }}</h6>
            <ul class="footer-widget__list">
              <li v-for="(link,index) in foot.footerLinkList" :key="index">
                <a :href="link.href" class="hover-style-link">{{ link.title }}</a>
              </li>
            </ul>
          </div>
          <!-- <div class="col-lg-2 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Who we are</h6>
                        <ul class="footer-widget__list">
                            <li><a href="#" class="hover-style-link">About us</a></li>
                            <li><a href="#" class="hover-style-link">Before you go</a></li>
                            <li><a href="#" class="hover-style-link">Online check in</a></li>
                            <li><a href="#" class="hover-style-link">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Quick links</h6>
                        <ul class="footer-widget__list">
                            <li><a href="#" class="hover-style-link">Pick up locations</a></li>
                            <li><a href="#" class="hover-style-link">Terms of Payment</a></li>
                            <li><a href="#" class="hover-style-link">Privacy Policy</a></li>
                            <li><a href="#" class="hover-style-link">Where to Find Us</a></li>
                        </ul>
          </div>-->
          <div class="col-lg-3 col-md-6 offset-lg-1 footer-widget">
            <div class="twitter-feed-slider">
              <div class="swiper-container twitter-feed-slider__container">
                <div class="swiper-wrapper twitter-feed-slider__wrapper">
                  <div class="swiper-slide twitter-feed-slider__single">
                    <div class="tweet">
                      <div class="tweet__text">
                        {{ tweet.text }}
                        <a :href="tweet.href" target="_blank">{{ tweet.info }}</a>
                        <a href="https://t.co/2iDReuyPMt" target="_blank">https://t.co/2iDReuyPMt</a>
                      </div>
                      <div class="tweet__info">
                        <h6 class="tweet__heading">Unsplash</h6>
                        <span class="tweet__date">{{ tweet.date }}</span>
                      </div>
                    </div>

                    <!-- <div class="tweet">
                      <div class="tweet__text">
                        "The ocean never ceases to amaze!" Feature: Ben Klea
                        <a
                          href="https://t.co/jSRMsZAdPW"
                          target="_blank"
                        >https://t.co/jSRMsZAdPW</a>
                        <a href="https://t.co/2iDReuyPMt" target="_blank">https://t.co/2iDReuyPMt</a>
                      </div>
                      <div class="tweet__info">
                        <h6 class="tweet__heading">Unsplash</h6>
                        <span class="tweet__date">May 07, 2020</span>
                      </div>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright-area border-top section-space--ptb_30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-left">
            <span class="copyright-text">© 2020 AeroLand. All Rights Reserved.</span>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <ul class="list ht-social-networks solid-rounded-icon">
              <li class="item">
                <a href="#" target="_blank" class="social-link">
                  <i class="fab fa-facebook social-link-icon" />
                </a>
              </li>
              <li class="item">
                <a href="#" target="_blank" class="social-link">
                  <i class="fab fa-twitter social-link-icon" />
                </a>
              </li>
              <li class="item">
                <a href="#" target="_blank" class="social-link">
                  <i class="fab fa-instagram social-link-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMain',
  props: ['FooterStyle'],
  data() {
    return {
      logoSrc: '#',
      footerList: [
        {
          title: 'Who we are',
          footerLinkList: [
            {
              title: 'About us',
              href: '#'
            },
            {
              title: 'About us',
              href: '#'
            },
            {
              title: 'About us',
              href: '#'
            },
            {
              title: 'About us',
              href: '#'
            }
          ]
        }
      ],

      tweet: {
        text: ' "The ocean never ceases to amaze!" Feature: Ben Klea',
        href: 'https://t.co/jSRMsZAdPW',
        info: 'https://t.co/2iDReuyPMt',
        date: 'May 07, 2020'
      },
      widgetList: {
        title: '58 Howard Street #2 San Francisco, CA 941',
        link: ['contact@aeroland.com', '(+68)1221 09876', 'www.website.com'],
        href: ['#', '#', '#']
      }
    }
  }
}
</script>
