let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = obj => {
  obj.glide = () => "I can glide.";
}

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide(), boat.glide());