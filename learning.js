// const func = setTimeout(
//     () => console.log('aaa'),
//     0
// );

const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'circleX',
    radius: 2
};

// const circleArea = ({radius}, {precision = 2} = {}) =>
// (PI * radius * radius).toFixed(precision);

const circleArea = ({radius}, { precision } = {}) =>
(PI * radius * radius).toFixed(precision);

console.log(circleArea(circle, {}));

// node --inspect-brk <filename>.js
// chrome://inspect