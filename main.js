//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, status) {
  this.name = name
  this.status = status
  this.hungry = false
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name

  this.pet = function(dog){
    this.dog = dog
    return `${this.dog.status = 'happy'}`
  }
  this.feed = function(dog){
    this.dog = dog
    return `${this.dog.hungry = false}`
  }
}

const sadie = new Dog('Sadie', 'normal')
const mason = new Human('Mason')
sadie.color = 'black'
const moonshine = new Dog('Moonshine')
moonshine.hungry = true
const julia = new Human('Julia')
const atticus = new Dog('Atticus')
julia.cool = true
mason.cool = false
// Instances of Human
// Needed: mason, julia
