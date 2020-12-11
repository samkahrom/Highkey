var Main = /** @class */ (function () {
    function Main() {
    }
    Main.LowerToUpper = function (s) {
        var result = "";
        var ch = ' ';
        for (var i = 0; i < s.length; i++) {
            {
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i)) >= 'a'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i)) <= 'z'.charCodeAt(0)) {
                    ch = String.fromCharCode(((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i)) - 32));
                }
                else {
                    ch = (s.charAt(i));
                }
                result += ch;
            }
            ;
        }
        return result;
    };
    Main.main = function (args) {
        console.info(Main.LowerToUpper("highkey"));
    };
    return Main;
  }());
  Main["__class"] = "Main";
  Main.main(null);