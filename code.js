let name;

if (localStorage.getItem('my-name')) {
    name = localStorage.getItem('my-name');
} else {
    name = prompt('Как вас зовут?');
    localStorage.setItem('my-name', name);
}


document.querySelector('h3').textContent = 'Привет, ' + name;
document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString();

setInterval(function () {
    document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
}, 1000)



const images = [
    'url(https://images.wallpaperscraft.ru/image/single/plyazh_noch_more_nebo_88045_1920x1080.jpg)',
    'url(https://images.wallpaperscraft.ru/image/single/doroga_asfalt_razmetka_130996_1920x1080.jpg)',
    'url(https://images.wallpaperscraft.ru/image/single/more_zakat_gorizont_131804_1920x1080.jpg)',
    'url(https://images.wallpaperscraft.ru/image/single/doroga_razmetka_derevia_137674_1920x1080.jpg)',
    'url(https://images.wallpaperscraft.ru/image/single/palmy_zakat_oblaka_135077_1920x1080.jpg)'
];

let index = 0;

document.querySelector('button').onclick = function () {
    document.body.style.background = images[index];
    index++;

    if (index >= images.length) index = 0;
}
