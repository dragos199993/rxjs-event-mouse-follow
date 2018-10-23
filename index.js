import rxjs from 'rxjs';
const { fromEvent } = require('rxjs')
const { throttleTime, scan } = require('rxjs/operators')

const button = document.querySelector('button');
const point = document.querySelector('.point');
fromEvent(button, 'click').pipe(
    throttleTime(0),
    scan(count => count + 1, 5)
)
.subscribe(count => {
    point.style.width = count + 'px';
    point.style.height = count + 'px';
});

fromEvent(document, 'mousemove').pipe(
    throttleTime(0)
)
.subscribe(e => {
    point.style.left = e.clientX - 3 + 'px'
    point.style.top = e.clientY - 3 + 'px'
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
})