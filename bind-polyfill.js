if (!Function.prototype.bind) {
    Function.prototype.bind = function (context, ...args) {
        if (typeof this !== 'function') throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');

        const originalFunction = this;

        return function (...newArgs) {
            return originalFunction.apply(context, args.concat(newArgs));
        };
    };
}


// Example usage:
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.fullName}.`);
}

var person = {
    fullName: 'Diwakar Kumar'
};
var bindGreet = greet.bind(person);

bindGreet('John');