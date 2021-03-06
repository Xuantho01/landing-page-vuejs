const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  // Getter component lading page
  logoNavbar: state => state.navbar.logoSrc,
  heroBranding: state => state.heroBranding.heroBranding,
  aboutSection: state => state.aboutSection.aboutSection,
  businessSection: state => state.businessSection.businessSection,
  requirementSection: state => state.requirementSection.requirementSection,
  featureCarouselSection: state => state.featureCarouselSection.featureCarouselSection,
  searchBox: state => state.searchBox.searchBox,
  newsletter: state => state.newsletter.newsletter,
  footer: state => state.footer.footer
}
export default getters
