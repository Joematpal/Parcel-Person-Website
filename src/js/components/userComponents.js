import template from "./userComponents.html"

export default {
  bindings: {
    caption: '<'
  },
  template,
  controller() {
    this.records = [{
      name: "Alfreds Futterkiste",
      city: "Berlin",
      country: "Germany"
    },
    {
      name: "Ana Trujillo Emparedados y helados",
      city: "Mexico D.F.",
      country: "Mexico"
    },
    {
      name: "Blondel pere et fils",
      city: "Strasbourg",
      country: "France"
    },
    {
      name: "Bolido Comidas preparads",
      city: "Madrid",
      country: "Spain"
    }];
  }
}
