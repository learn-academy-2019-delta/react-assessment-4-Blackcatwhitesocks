// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc...


// import React from 'react';
// import './App.css';
// class App extends React.Component{
//         render(){
//           return(
//             <div>
//             <h1> I am a component! </h1>
//             </div>
//           )
//         }
//       }
// export default App;


// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same. 

// var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }
// / const namesNew = names.map(name => `${name} is ${name.length} characters long.`)
// // console.log(namesNew)



// 3. Destructure the following variables out of state:

// this.state = {
//   name: "Dracula",
//   home: "Transylvania",
//   dislikes: ["mirrors", "garlic", "wooden stakes"]
// }
// const name1 = this.state.name
// console.log(name1)
// const home1 = this.state.home
// console.log(home1)
// const dislikes1 = this.state.dislikes
// console.log(dislikes1)



// 4. Write a React method that would add one to the count and update the state.

/ import React, { Component } from 'react';
//
// class Counter extends Component {
//   constructor(props){
//     super(props)
//       this.state = {
//         count: 0
//     }
// }
//
// handleChange = () => {
//     let newCount = this.state.count + 1
//     this.setState({count: newCount})
// }
//
//
//
//   render() {
//       let { count } = this.state
//
//     return (
//         <div>
//         <h1>count: {count}</h1>
//         <button onClick = {this.handleChange}>Press Me!</button>
//         </div>
//
//     );
//   }
// }
//
// export default Counter;
//


// 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

// import React, { Component } from 'react';

// class Recipes {
//   constructor(props){
//     super(props)
//     // missing array
//     this.state = {
//       recipes:[
//         {name: 'Meatballs',
//         {name: 'Mac & Cheese'}
//       ]
//     }
//   }

//   render() {
//       //needs new variable
//       let newRecipes = this.state.recipes
//       let recipes = newRecipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//       return(
//       <ul>
//         {recipes}
//       </ul>
//     )
//   }
// }

// export default Recipes