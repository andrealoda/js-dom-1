const bulb = document.getElementById('image');

const button = document.getElementById('button');

button.addEventListener('click',

    function () {
        bulb.src = './assets/img/yellow_lamp.png';
        button.innerHTML = 'Turn off the light';
    }
)

