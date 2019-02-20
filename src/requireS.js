function require() {
    console.log((define([1, 2, 3, 4])))
}

function define(a) {
    return a = a instanceof Array ? a : '不是数组';
}


require();