// Task 1
function logDairy() {
    const dairys = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

    for (let dairy of dairys) {
        console.log(dairy);
    }
}

logDairy()

// Task 2
function birdCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const birdElement of Object.keys(bird)) {
        console.log(birdElement, ": ", bird[birdElement])
    }
}

birdCan()

// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const birdElement in bird) {
        console.log(birdElement, ": ", bird[birdElement])
    }
}

animalCan()