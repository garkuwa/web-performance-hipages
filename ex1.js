// How much does it optimize?
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((i) => console.log(i.name, ': ', i.duration));
});

obs.observe({ entryTypes: ['measure'] });

function add(x, y) {
  return x + y;
}
const a = 2;
const b = 5;
let iterator = 10000000;

performance.mark('start');

//%NeverOptimizeFunction(add);
while (iterator--) {
  add(a, b);
}

add('str1', 'str2');

iterator = 10000000;
while (iterator--) {
  add(a, b);
}

performance.mark('end');
performance.measure('Add function performance', 'start', 'end');
