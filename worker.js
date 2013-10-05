importScripts('quantize.js');

onmessage = function (event) {
    var data = event.data;
    var colors = [];
    for (var i = 0, ii = data.length; i < ii; i += 4) {
        // ignoring colors with alpha <80%
        if (data[i + 3] < .8 * 255) {
            continue;
        }
        colors.push([data[i], data[i + 1], data[i + 2]]);
    }
    postMessage(quantize(colors, 10).palette());
};
