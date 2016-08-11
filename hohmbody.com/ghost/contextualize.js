var _ = require("lodash");

helper = function (context, string) {
    string = string.replace(/\|\|/g,"'");
    _.extend(context,JSON.parse(string));
    return;
};

module.exports = helper;
