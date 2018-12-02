define("ace/snippets/xtasm",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText =undefined;
exports.scope = "xtasm";

});                (function() {
                    window.require(["ace/snippets/xtasm"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            