let dark = localStorage.getItem("darkMode")
const enableDarkmode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('dark', 'enabled')
}
const disenableDarkmode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('dark', null)
}
const darkMode2 = document.querySelector(".darkMode2")
darkMode2.addEventListener("click", function() {
    dark = localStorage.getItem('dark');
    if (dark !== 'enabled') {
        enableDarkmode();
        document.querySelector('.rectangle').style.background = '#3131F1';
        document.querySelector('.rectangle').style.borderColor = '#040404';
        document.querySelector('.line-1').style.background = '#3131F1';
        document.querySelector('.head-1').style.color = '#DCD3BB';
        document.querySelector('.logo').style.color = '#DCD3BB';
        document.querySelector('.text-1').style.color = '#DCD3BB';
        document.querySelector('.text-2').style.color = '#DCD3BB';
        document.querySelector('.log').style.color = '#3131F1';
        document.querySelector('.head-2').style.color = '#DCD3BB';
        document.querySelector('.text-3').style.background = '#00141f';
        document.querySelector('.head-3').style.color = '#DCD3BB';
        document.querySelector('.text-4').style.background = '#00141f';
        document.querySelector('.head-4').style.color = '#DCD3BB';
        document.querySelector('.text-5').style.background = '#00141f';
        document.querySelector('.head-5').style.color = '#DCD3BB';
        document.querySelector('.text-6').style.background = '#00141f';
        document.querySelector('.main').style.background = '#00141f';
        let img = document.querySelector('.background');
        img.setAttribute('src', 'img/wall-negative.jpg');
        document.querySelector('.darkMode2').style.background = 'black';
        document.querySelector('.darkOn').innerHTML = ('Dark')
        document.querySelector('.darkOn').style.color = '#DCD3BB';
        document.querySelector('.light').setAttribute('src', 'img/moonmode.png');
        document.querySelector('.light').style.width = ('20px');
        document.querySelector('.light').style.height = ('20px');
        document.querySelector('.light').style.top = ('9px');
        document.querySelector('.light').style.left = ('5px');
        console.log('dark on')
    } else {
        disenableDarkmode();
        document.querySelector('.rectangle').style.background = '#FF432A';
        document.querySelector('.rectangle').style.borderColor = '#FF432A';
        document.querySelector('.line-1').style.background = '#FF432A';
        document.querySelector('.head-1').style.color = 'black';
        document.querySelector('.logo').style.color = 'black';
        document.querySelector('.text-1').style.color = 'black';
        document.querySelector('.text-2').style.color = 'black';
        document.querySelector('.log').style.color = '#3131F1';
        document.querySelector('.head-2').style.color = 'black';
        document.querySelector('.text-3').style.background = 'white';
        document.querySelector('.head-3').style.color = 'black';
        document.querySelector('.text-4').style.background = 'white';
        document.querySelector('.head-4').style.color = 'black';
        document.querySelector('.text-5').style.background = 'white';
        document.querySelector('.head-5').style.color = 'black';
        document.querySelector('.text-6').style.background = 'white';
        document.querySelector('.main').style.background = 'white';
        let img = document.querySelector('.background');
        img.setAttribute('src', 'img/wall.png');
        document.querySelector('.darkMode2').style.background = '#f8f8f8';
        document.querySelector('.darkOn').innerHTML = ('Light')
        document.querySelector('.darkOn').style.color = 'black';
        document.querySelector('.light').setAttribute('src', 'img/sunmode.png');
        document.querySelector('.light').style.width = ('30px');
        document.querySelector('.light').style.height = ('30px');
        document.querySelector('.light').style.top = ('3px');
        document.querySelector('.light').style.left = ('2px');
        console.log('dark off')
    }
})