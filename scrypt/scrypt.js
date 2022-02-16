const darkMode = document.querySelector(".darkMode")
darkMode.addEventListener("click", function() {
    document.querySelector('.rectangle-2').style.background = '#3131F1';
    document.querySelector('.rectangle-2').style.borderColor = '#040404';
    document.querySelector('.line-1').style.background = '#3131F1';
    document.querySelector('.head-1').style.color = '#DCD3BB';
    document.querySelector('.logo').style.color = '#DCD3BB';
    document.querySelector('.text-1').style.color = '#DCD3BB';
    document.querySelector('.text-2').style.color = '#DCD3BB';
    document.querySelector('.reg').style.color = '#3131F1';
    document.querySelector('.head-2').style.color = '#DCD3BB';
    document.querySelector('.text-3').style.background = '#00141f';
    document.querySelector('.head-3').style.color = '#DCD3BB';
    document.querySelector('.text-4').style.background = '#00141f';
    document.querySelector('.main').style.background = '#00141f';
    document.querySelector('.text-5').style.color = '#DCD3BB';
    document.querySelector('.rectangle-1').style.background = 'black';
    let img = document.querySelector('.background');
    img.setAttribute('src', 'img/wall-negative.jpg');
    document.querySelector('.darkMode').style.background = 'black';
    document.querySelector('.darkOn').innerHTML = ('Dark')
    document.querySelector('.darkOn').style.color = '#DCD3BB';
    document.querySelector('.light').setAttribute('src', 'img/moonmode.png');
    document.querySelector('.light').style.width = ('20px');
    document.querySelector('.light').style.height = ('20px');
    document.querySelector('.light').style.top = ('9px');
    document.querySelector('.light').style.left = ('5px');
    console.log('clicked')
})