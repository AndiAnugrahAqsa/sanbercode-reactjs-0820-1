//Soal 1
console.log("Soal 1\n");
console.log("Release 0\n");


class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false
    }
    get dataAnimal() {
        return this.name, this.legs, this.cold_blooded
    }
}

sheep = new Animal("shaun");

console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)




console.log("\n\nRelease 1\n");

class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2;
    }
    yell() {

        console.log("Auooo");
    }
}




class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        console.log("hop hop");
    }
}

console.log("Ape Class\n");

var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
sungokong.yell()

console.log("\n\nFrog Class\n");

var kodok = new Frog("buduk")
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
kodok.jump()




// Soal 2
console.log("\n\n\nSoal 2\n");

class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer;
    }
    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render()
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();