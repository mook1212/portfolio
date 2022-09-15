
// nav 스크롤
var beforePosition = document.documentElement.scrollTop

document.addEventListener('scroll', function () {

    var afterPosition = document.documentElement.scrollTop;

    // let nav_child = document.querySelector('.header-content-box').childNodes
    // console.log(nav_child);


    // 스크롤 맨 위
    if (window.scrollY == 0) {
        document.querySelector('.header-nav').style.backgroundColor = ''
        document.querySelector('a').style.color = 'wheat'
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