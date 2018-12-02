define(function(require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var XtasmHighlightRules = require("./xtasm_highlight_rules").XtasmHighlightRules;

  var Mode = function() {
    this.HighlightRules = XtasmHighlightRules;
  };

  oop.inherits(Mode, TextMode);

  (function() {
    this.$id = "ace/mode/xtasm";
  }).call(Mode.prototype);

  exports.Mode = Mode;
});
