export default {
  transclude: true,
  require: {
    'parent': '^accordion'
  },
  bindings: {
    headings: '@'
  },
  template:
  `
  <div class="panel panel-default">
    <div class="panel-heading" ng-click="$ctrl.select()">
    <h3 class="panel-title">{{$ctrl.heading}}</h3>
  </div>
    <div class="panel-body" ng-transclude ng-if="$ctrl.selected">
    </div>
  </div>
  `,
  controller(){
    var self = this;
    self.$onInit = function () {
      self.parent.addPanel(self);
    };
    self.turnOn = function () {
      self.selected = true;
    };
    self.turnOff = function () {
      self.selected = false;
    };
    self.select = function () {
      self.parent.selectPanel(self);
    };
  }
}
