import _ from 'lodash';
import {PanelCtrl} from 'app/plugins/sdk';

var panelDefaults = {
    fullscreen: true
};

class DeviceListCtrl extends PanelCtrl {
  /** @ngInject */
  constructor($scope, $injector, $location, backendSrv) {
    super($scope, $injector);
    this.$location = $location;
    this.backendSrv = backendSrv;
    this.devices = [];
    this.pageReady = false;
    this.getDevices();
    _.defaults(this.panel, panelDefaults);
  }

  getDevices() {
    var self = this;
    this.backendSrv.get("/api/plugin-proxy/kentik-app/api/device/list").then(function(resp) {
      console.log(resp);
      self.devices = resp.device;
      self.pageReady = true;
    });
  }

  refresh() {
    console.log("Kentik Device List: refresh called.");
    this.getDevices()
  }

  gotoDeviceDetail(device) {
    this.$location.url("/plugins/kentik-app/pags/device-detail?device="+device.id);
  }

}

DeviceListCtrl.templateUrl = 'panel/device-list/module.html';

export {DeviceListCtrl as PanelCtrl}

