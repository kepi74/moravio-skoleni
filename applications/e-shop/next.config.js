const withTM = require("next-transpile-modules")(["@pck/api", "@pck/cart", "@pck/ui"]);

module.exports = withTM();
