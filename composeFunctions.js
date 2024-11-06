
function compose(...fns) {
    return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
}

const CapitalizeAndReverse = compose(reverse, Capitalize);


const filterAndDouble = compose(double, filterOdd);
