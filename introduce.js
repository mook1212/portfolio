
// nav 스크롤
var beforePosition = document.documentElement.scrollTop


document.addEventListener('scroll', function () {

    var afterPosition = document.documentElement.scrollTop;

    let html_w = document.querySelector('html').clientWidth

    // 스크롤 맨 위

    // window창이 701px 보다 클때
    if (window.scrollY == 0 && html_w > '700') {
        document.querySelector('.header-nav').style.backgroundColor = ''
        document.querySelector('.nav-content a').style.color = 'wheat'
        document.querySelector('.nav-content').style.color = 'wheat'
    }


    if (afterPosition > 50) {


        if (beforePosition < afterPosition) {
            // 스크롤 아래로

            document.querySelector('.header-nav').style.backgroundColor = 'white'
            document.querySelector('a').style.color = 'black'
            document.querySelector('.nav-content').style.color = 'black'
        } else {
            // 스크롤 위로 
        }

    } else {
        // 평상 시

    }
    beforePosition = afterPosition;
});

// nav 조작
document.querySelector('.m-nav-menu').addEventListener('click', ()=> {
    document.querySelector('.m-nav-content-box').classList.toggle('show')
})

document.querySelector('.m-nav-content-box').addEventListener('click',()=> {
    document.querySelector('.m-nav-content-box').classList.toggle('show')
})

// nav 스크롤 이동 

document.querySelector('.header-content-box').addEventListener('click', e => {

    if (e.target.nodeName === 'P') {
        let id_value = e.target.dataset.link;
        document.querySelector(id_value).scrollIntoView({ behavior: 'smooth' });
    }
});


document.querySelector('.m-nav-content-box').addEventListener('click', e => {

    if (e.target.nodeName === 'P') {
        let id_value = e.target.dataset.link;
        console.log(id_value);
        document.querySelector(id_value).scrollIntoView({ behavior: 'smooth' });
    }
});

document.querySelector('.header-more').addEventListener('click', e => {

        document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});