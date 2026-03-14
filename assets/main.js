const bulb = document.getElementById('image');
const button = document.getElementById('button');

button.addEventListener('click',

    function () {
        if (button.innerHTML.includes('on')) {
            bulb.src = './assets/img/yellow_lamp.png';
            button.innerHTML = 'Turn off the light';
        } else {
            bulb.src = './assets/img/white_lamp.png';
            button.innerHTML = 'Turn on the light';
        }
    }
)

