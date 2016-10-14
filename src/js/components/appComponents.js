import template from "./appComponents.html"

export default {
  bindings: {
    brand: '<'
  },
  template,
  controller() {
    this.menu = [{
      name:"Home",
      component:"home"
    },
    {
      name: "About",
      component:"about"
    },
    {
      name: "Contact",
      component: "contact"
    }];
  }
}
