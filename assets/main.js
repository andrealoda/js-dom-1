const bulb = document.getElementById('image');
const button = document.getElementById('button');
const emoji = document.getElementById('emoji');
const body = document.querySelector('body');

button.addEventListener('click',

    function () {
        if (button.innerHTML.includes('on')) {
            bulb.src = './assets/img/yellow_lamp_2.png';
            button.innerHTML = 'Turn off the light';
            emoji.innerHTML = '😱';
            body.classList.replace('bg-dark', 'bg-white');
        } else {
            bulb.src = './assets/img/white_lamp_2.png';
            button.innerHTML = 'Turn on the light';
            emoji.innerHTML = '😐';
            body.classList.replace('bg-white', 'bg-dark');
        }
    }
)

