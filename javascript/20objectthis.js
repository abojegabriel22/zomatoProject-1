let firstName = "Aboje"
let lastName = "Gabriel"

let sayHi = {
    firstName: "Zoe",
    lastName: "Lisa",
    greet: function sayHi(){
        return `say Hi to ${this.firstName} ${this.lastName}`
    }
}
console.log(sayHi.greet())

// say Hi to Aboje Gabriel
// say Hi to Zoe Lisa