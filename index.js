exports.say = function(format, ...args) {
    if(arguments.length == 0) {
        console.log()
    } else {
        console.log(format, ...args);
    }
}
