//const element = document.createElement("h1")
//element.innerText = "Susprise motherfuckers"
//const container = document.getElementById("root")
//container.appendChild(element)
import React from "react"
import ReactDOM from "react-dom"
import Card from './components/card'
import "../node_modules/bootstrap/dist/css/bootstrap.css"//bootstrap diferente de boostrap
// const name = "Perrito"
// const user = {
//     firstname: "Cristian",
//     lastname: "Barreto",
//     avatar: 'logo.svg',
//     icono: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png"
// }

// function getname(user){
//     return `${user.firstname} ${user.lastname}`
// }

// function condition(user){
//     if (user) {
//         return `${user.firstname} ${user.lastname}`
//     } else {
//         return "quien es buste"
//     }
// }

// const elemento = (
//     <div>
//         <h1>{condition(user)}</h1>
//         <img src="user.icono" alt="no aparece"></img>
//     </div>
// )
// const element = <h1>Susprise motherfuckers {name} {getname(user)} {condition(user)}</h1>
const container = document.getElementById("root")

// //ReactDOM.render(__Que__,__Donde__)
ReactDOM.render(<Card></Card>, container)

