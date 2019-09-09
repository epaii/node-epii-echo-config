var readline = require('readline');

var r_fun, e_fun, config;

var rl = readline.createInterface({
    input: process.stdin

});
rl.on("line", function (e) {

    config = JSON.parse(decodeURIComponent(e));
    if (r_fun)
        r_fun(config);

});

module.exports = {
    getConfig: () => {

        let out = new Promise((r, e) => {
            r_fun = r;
            e_fun = e;
            if (config) {
                r_fun(config);
            }
        });

        return out;
    },

};