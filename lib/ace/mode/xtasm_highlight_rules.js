define(function(require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var XtasmHighlightRules = function() {
    this.$rules = {
      "start": [{
        token: "empty_line",
        regex: '^$'
      }, {
        defaultToken: "text"
      }, {
        token: 'blue',
        regex: /^ *(FUNCTION)(?:$| +.*$) *|^ *(?:JMP(?:.{0}|_ZERO|_ONE|_POS|_NEG))(?:$| +(.*) *$)|^ *(.+:) *|^ *(XTASM)(?:$| +.*$)/
      }, {
        token: 'dark_green',
        regex: /^ *(SET)(?:$| +.*)/
      }, {
        token: 'light_red',
        regex: /^ *(INPUT)(?:$| +.*$)|^ *(PRINT(?:.{0}|S|NL|_STR|_STR_NS))(?:$| +.*$)|^ *(NL|SPACE)(?:$| +$)/
      }, {
        token: 'pink',
        regex: /^ *(RET|EXIT|CONF|\/CONF)(?:$| +$)|^ *(IF|CALL)(?:$| +.*$)|^ *(JMP(?:.{0}|_ZERO|_ONE|_POS|_NEG))(?:$| +.*$)/
      }, {
        token: 'orange',
        regex: /^ *(INCR|DECR|ADD|SUB|MUL|DIV|MOD)(?:$| +.*$)/
      }, {
        token: 'yellow',
        regex: /^ *(PUSH|POP|ERASE|REVERSE|WAIT|SAVE|SAVE_T|CONFIGURE|TAKE|OPEN_CAMERA)(?:$| +.*$)|^ *(?:FUNCTION|CALL) +(.*)(?:$| +.*$)/
      }, {
        token: 'light_green',
        regex: /^ *.*(#.*$)/
      }]
    };
  };

  oop.inherits(XtasmHighlightRules, TextHighlightRules);

  exports.XtasmHighlightRules = XtasmHighlightRules;
});
