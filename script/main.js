const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height)





const background = new Image();
background.src = "../img/bg.jpg";

class Char { 
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 50;
        this.width = 50;
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, 50)
        // c.drawImage(this.image, this.position.x+313, this.position.y+537, 576+this.position.x, 1024+this.position.y, 0, 0, canvas.width, canvas.height);
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
            this.position.y = canvas.height - this.height;
        }
        if (this.position.x + this.width + this.velocity.x >= canvas.width) {
            this.velocity.x = 0;
            this.position.x = canvas.width - this.width;
        }
        if (this.position.x + this.velocity.x <= 0) {
            this.velocity.x = 0;
            this.position.x = 0;
        }
        if (this.position.y + this.velocity.y <= 0) {
            this.velocity.y = 0;
            this.position.y = 0;
        }
    }
}


const player = new Char({
    position: {
        x: 100,
        y: 250
    },
    velocity: {
        x: 10,
        y: 10
    }
})


player.draw();





const enemy = new Char({
    position: {
        x: 500,
        y: 250
    },
    velocity: {
        x: 0,
        y: 0
    }
})

// enemy.draw();





const movementKeys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    s: {
        pressed: false
    },
    w: {
        pressed: false
    },
}









function animate() {
    window.requestAnimationFrame(animate);
    // c.fillStyle = 'black';
    // c.fillRect(0, 0, canvas.width, canvas.height)
    
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(background, 0, 0, canvas.width, canvas.height)
    // c.drawImage(background, player.position.x, player.position.y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);


    player.update();
    // enemy.update();

    player.velocity.x = 0;
    player.velocity.y = 0;

    if (movementKeys.a.pressed) {
        player.velocity.x = -10;
    }
    if (movementKeys.d.pressed) {
        player.velocity.x = 10;
    }
    if (movementKeys.d.pressed && movementKeys.a.pressed) {
        player.velocity.x = 0;
    }

    if (movementKeys.w.pressed) {
        player.velocity.y = -10;
    }
    if (movementKeys.s.pressed) {
        player.velocity.y = 10;
    }
    if (movementKeys.w.pressed && movementKeys.s.pressed) {
        player.velocity.y = 0;
    }

}



animate();



window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            movementKeys.w.pressed = true;
            break;
        case 'a':
            movementKeys.a.pressed = true;
            break;
        case 's':
            movementKeys.s.pressed = true;
            break;
        case 'd':
            movementKeys.d.pressed = true;
            break;
            




    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            movementKeys.w.pressed = false;
            break;
        case 'a':
            movementKeys.a.pressed = false;
            break;
        case 's':
            movementKeys.s.pressed = false;
            break;
        case 'd':
            movementKeys.d.pressed = false;
            break;
        }
})


