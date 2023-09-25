const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height)

const skills = [1, 2, 3, 4]
const speed = 10;
const scale = 3;


const background = new Image();
background.src = "../img/bg.jpg"; // bg dimensions: 1920 x 1080

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
        x: 0,
        y: 0
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
    



    c.save()
    c.scale(scale, scale);
    c.translate(0, 0);
    // c.translate(0, c)
    // c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(background, 0, 0, canvas.width, canvas.height)
    c.restore()
    // c.drawImage(background, player.position.x, player.position.y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);




    player.update();
    // enemy.update();

    player.velocity.x = 0;
    player.velocity.y = 0;

    if (movementKeys.a.pressed) {
        player.velocity.x = -speed;
    }
    if (movementKeys.d.pressed) {
        player.velocity.x = speed;
    }
    if (movementKeys.d.pressed && movementKeys.a.pressed) {
        player.velocity.x = 0;
    }

    if (movementKeys.w.pressed) {
        player.velocity.y = -speed;
    }
    if (movementKeys.s.pressed) {
        player.velocity.y = speed;
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



// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
// ! Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills

const dashCooldown = 0.3;


const skillsID = [1, 2, 3, 4, 5]
/**
 * 
 * 
 * ? SKILLS ID DATA SET:
 * ? SKILLS ID DATA SET:
 * ? SKILLS ID DATA SET:
 * ? SKILLS ID DATA SET:
 * 1: Basic Skill 1
 * 2: Basic Skill 2
 * 3: Basic Skill 3
 * 4: Basic Skill 4
 * ! 5-7: Basic Dash I-III
 * ! 8-10: Advanced Dash I-III
 * 
 * 
 */

const skillKeys = {
    one: {
        activated: false
    },
    q: {
        activated: false
    },
}

const skillTimer = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    q: 0,
}

function dash(multiplier) {
    if (player.velocity.x > 0) player.position.x += multiplier
    if (player.velocity.y > 0) player.position.y += multiplier
    if (player.velocity.x < 0) player.position.x -= multiplier
    if (player.velocity.y < 0) player.position.y -= multiplier 
}

function skillActivate() {
    if (skillKeys.one.activated && skillTimer.one == 0) {
        // alert("Skill One Activated!");
        skillTimer.one = 1;

        if (skillsID[0] == 1) {
            // c.fillStyle = 'red';
            // player.position.x += 50
        }
    }
    // ! FOR DASHES: 
    if (skillKeys.q.activated && skillTimer.q == 0) {
        skillTimer.q = dashCooldown;
        // alert("test")
        if (skillsID[4] == 5) dash(40);
        if (skillsID[4] == 6) dash(60);
        if (skillsID[4] == 7) dash(80);
        if (skillsID[4] == 8) dash(100);
        if (skillsID[4] == 9) dash(125);
        if (skillsID[4] == 10) dash(150);
    }


}

function skillCooldown() {
    (skillTimer.one > 0) ? skillTimer.one -= 0.1 : skillTimer.one = 0;
    (skillTimer.q > 0) ? skillTimer.q -= 0.1 : skillTimer.q = 0;
    // alert(skillTimer.q);
}



window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case '1':
            skillKeys.one.activated = true;
            skillActivate();
            break;
        case 'q':
            skillKeys.q.activated = true;
            skillActivate();
        break;
        }
    }
)


setInterval(skillCooldown, 100)





















































