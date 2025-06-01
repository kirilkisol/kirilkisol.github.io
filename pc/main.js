let preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    setInterval(() => {
        preloader.style.display = 'none'
    }, 1000);
})

let btnReadMore = document.querySelectorAll('.btn-read-more');
let DivReadMore = document.querySelectorAll('.div-read-more')
let readMin = document.querySelectorAll('.read-min')

for (let i = 0; i < btnReadMore.length; i++) {
    btnReadMore[i].onclick = function () {
        DivReadMore[i].style.display = 'block'
    }
}
for (let i = 0; i < readMin.length; i++) {
    readMin[i].onclick = function () {
        DivReadMore[i].style.display = 'none'
    }
}


window.addEventListener('scroll', function () {
    let height = window.innerHeight;
    let btnTop = document.querySelector('.btn-Top');
    if (window.scrollY > height) {
        btnTop.style.display = 'flex'
    }
    else {
        btnTop.style.display = 'none'
    }
});

[...document.querySelectorAll('*')].forEach(el => {
    if (el.scrollWidth > el.clientWidth) {
        console.log(el);
    }
});
