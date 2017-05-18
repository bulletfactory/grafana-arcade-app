'use strict';

System.register(['./config.html!text'], function (_export, _context) {
  "use strict";

  var configTemplate, ArcadeConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_configHtmlText) {
      configTemplate = _configHtmlText.default;
    }],
    execute: function () {
      _export('ConfigCtrl', ArcadeConfigCtrl = function ArcadeConfigCtrl() {
        _classCallCheck(this, ArcadeConfigCtrl);
      });

      ArcadeConfigCtrl.template = configTemplate;

      _export('ConfigCtrl', ArcadeConfigCtrl);
    }
  };
});
//# sourceMappingURL=config.js.map
