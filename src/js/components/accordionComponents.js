export default {
  transclude: true,
  template: '<div class="panel-group" ng-transclude></div>',
  controller(){
    var self = this;
    var panels = [];

    self.addPanel = function (panel) {
      panels.push(panel);
      if (panels.length > 0) {
        panels[0].turnOn();
      }
    };

    self.selectPanel = function (panel) {
      for (var i in panels) {
        if (panel === panels[i]) {
          panels[i].turnOn();
        } else {
          panels[i].turnOff();
        }
      }
    };
  }
}
