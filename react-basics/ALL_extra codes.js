import ReactDOM from 'react-dom/client';

function App() {
  const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }
  
  /**
   * Challenge: change the hard-coded "night" to display the
   * text we determined from the logic above.
   */

  return (
    <h1>Good {timeOfDay}</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);




export default function Joke(props) {
    return (
        <>
            <p style={{display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p>
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}


//map method ==============>

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)
console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)


export default function App() {
  // const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
  return (
      <main>
          {["Donatello", "Michaelangelo", "Rafael", "Leonardo"]}
{/* or    {ninjaTurtles} */}
      </main>
  )
}



//error => objects are not valid React children
//react cant render objsects or the data from api  only specific obj that are created by jsx syntax or created by rect.createElement method
export default function App() {
  const person = {firstname: "Bob"}
  return (
      <main>
          {person}  
      </main>
  )
}

//valid code ==> 
export default function App() {
  const jsx = <h1>Donatello</h1>
  console.log(jsx)
  return (
      <main>
          {jsx}
      </main>
  )
}



 
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */

    
export default function App() {
  const ninjaTurtles = [
      <h2>Donatello</h2>, 
      <h2>Michaelangelo</h2>,
      <h2>Rafael</h2>,
      <h2>Leonardo</h2>
  ]
  return (
      <main>
          {ninjaTurtles}
      </main>
  )
}

    
export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  
  const ingredientsListItems = ingredients.map(ingredient => (
      <li key={ingredient}>{ingredient}</li>
  ))
  

  /**
   * Challenge:
   * Add the new ingredient to the array of ingredients. Also, add a 
   * console.log(ingredients) after adding the ingredient, because 
   * **warning**: you aren't going to see the page update!
   * 
   * Hint: this is a one-liner solution, so don't overthink it 😅
   */

  function handleSubmit(event) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const newIngredient = formData.get("ingredient")
      ingredients.push(newIngredient)
      console.log(ingredients)
  }
  
  return (
      <main>
          <form onSubmit={handleSubmit} className="add-ingredient-form">
              <input 
                  type="text"
                  placeholder="e.g. oregano"
                  aria-label="Add ingredient"
                  name="ingredient"
              />
              <button>Add ingredient</button>
          </form>
          <ul>
              {ingredientsListItems}
          </ul>
      </main>
  )
}

function addTwoNumbers(a, b) {
  // DON'T DO THIS
  a = 42
  return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
  // DON'T DO THIS
  props.logoIcon = "some-other-icon.png"
}




// not wrork => because we are not using state
export default function App() {
  let state = "Yes"
  
  function handleClick() {
      state = "Heck yes"
  }
  
  return (
      <main>
          <h1 className="title">Is state important to know?</h1>
          <button onClick={handleClick} className="value">{state}</button>
      </main>
  )
}

import React from "react"

export default function App() {
    const result = React.useState("Heck yes")
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}





<Navbar logoIcon="spatula.png" />


import React from "react"

export default function App() {
    const [isImportant, func] = React.useState("Yes")
    console.log(isImportant)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{isImportant}</button>
        </main> 
    )
}

// state is not updated when we click the button
import React from "react"

export default function App() {
    const result = React.useState("Heck yes")
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}


import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
    


    //wrong way to update the state
    // function add() {
    //     setCount(count = count + 1) //never do this or   setCount(count++) this is not correct way to update the state /both same  //directly mutating the state 


    // }    

       //correct way to update the state
    function add() {
      setCount(count + 1)  //provide the new value of count to the setCount function
  } 

  function subtract() {
    setCount(count - 1)
}    
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={subtract}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}


//updating state with callback function
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    // * Note: if you ever need the old value of state
    //  * to help you determine the new value of state,
    //  * you should pass a callback function to your
    //  * state setter function instead of using
    //  * state directly. This callback function will
    //  * receive the old value of state as its parameter,
    //  * which you can then use to determine your new
    //  * value of state.

    function add() {
        setCount(function(prevCount) {
            return prevCount + 1;
        })

        // or
        //using arrow function
        // setCount(prevCount => prevCount + 1)  

    }

    function subtract() {
          setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}


//ternary instead of if else statement

export default function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = true
  
  let answer = isGoingOut === true ? "Yes" : "No"
  
  // Remove the code below 👇 once your ternary is done
  // if(isGoingOut === true) {
  //     answer = "Yes"
  // } else {
  //     answer = "No"
  // }
  
  return (
      <main>
          <h1 className="title">Do I feel like going out tonight?</h1>
          <button className="value">{answer}</button>
      </main>
  )
}

//toggling the state
import React from "react"

export default function App() {
    
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    
    function changeMind() {
        setIsGoingOut(prev => !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                onClick={changeMind} 
                className="value"
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}

//complex state arrays 
import React from "react"

export default function App() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
        
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings(
            prevFavThings => [
                ...prevFavThings,
                allFavoriteThings[prevFavThings.length]
            ]
        )
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}


//complex state : update the state object

import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                 //    or
                // firstName: "John",
                // lastName: "Doe",
                // phone: "+1 (212) 555-1212",
                // email: "itsmyrealname@example.com",
                // isFavorite: true,
                
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )

}



//forms ==> 

// html 
<html>

<head>
	<link rel="stylesheet" href="style.css">
</head>

<body>

	<form method="GET" id="my-form">
		<label for="first-name">First Name: </label>
		<input type="text" id="first-name" name="firstName" class="input" />
		<br />
		<label for="last-name">Last Name: </label>
		<input type="text" id="last-name" name="lastName" class="input" />
		<br />
		<input type="submit" value="Submit" />
	</form>

	<script src="./index.js"></script>
</body>

</html>

{/* //js  */}



{/* document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    submitViaAPI({
        firstName,
        lastName
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log("Submitted!")
} */}


{/* // form in jsx react */}

{/* in react form was bad after react 19 become better */}
{/* import React from 'react';
import ReactDOM from 'react-dom/client'; */}

/**
 * Challenge: add another label and input for the password field
 */

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

{/* ReactDOM.createRoot(document.getElementById('root')).render(<App />); */}

{/* //form submition 
'import React from 'react';
import ReactDOM from 'react-dom/client'; */}

function App() {
  
  function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const email = formData.get("email")
    // Gather the info from the form
    // Submit it to a backend
    formEl.reset()
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);




{/* //form action==>
// 

react19 magic
    import React from 'react';
import ReactDOM from 'react-dom/client'; */}

function App() {
  
  /**
   * Challenge: get the password from the form too and log
   * it to the console to be sure it came in correctly.
   */
  
  // automatic recieves formData as an argument when the form is submitted when we use the action attribute on the form element and assign it to a function that we want to run when the form is submitted and here preventDefault is not needed because react will handle it for us when we use the action attribute .
  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password)
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// form : textarea  & defaultValue
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password)
  } 

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />
        
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>
        
        

    
        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// Radio buttons in form 

import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")   
    console.log(employmentStatus)  // on 
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>
        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


//checkbox in form
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    console.log(dietaryRestrictions)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//Forms: select and option ==================>
    import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor = formData.get("favColor")
    console.log(favColor)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// Object.fromEntrie     ==== <> to much big form so use this .reduce manual task of handling forms.

import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  /**
   * Challenge: see if you can remember how to grab an array of checked
   * items from the dietaryRestrictions checkboxes.
   */

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
   
    const allData = {
      ...data,
      dietaryRestrictions
    }
    console.log(allData)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="blue" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/*
{email: "joe@schmoe.com", password: "password123", description: "This is a description", employmentStatus: "full-time", dietaryRestrictions: "gluten-free", favColor: "orange"}
*/


//conditionally rendring array check if the array is empty or not and render the content based on that
import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */
    
    return (
        <div>
            {
                unreadMessages.length > 0 && 
                <h1>You have {unreadMessages.length} unread messages!</h1>
            }
            {
                unreadMessages.length === 0 && 
                <p>You have no unread messages</p>
            }
        </div>
    )
}


{/* passing props as state  */}

import React from "react"
import Count from "./Count"

export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    console.log("App rendered")
    

    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count number={count} />

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}

export default function Count(props) {
    console.log("Count rendered")
    return (
        <h2 className="count">{props.number}</h2>
    )
}




{/* passing data round react */}


{/*data only flows down in react from parent to child component through props and if we want to pass data from child to parent we can do that by passing a function as a prop from the parent to the child and then calling that function in the child component and passing the data as an argument to that function and then in the parent component we can use that data to update the state or do whatever we want with it. */}

import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
   const [userName, setUserName] = React.useState("Joe")
    return (
        <main>
            <Header userName={userName} setUserName={setUserName } />
            <Body userName={userName} setUserName={setUserName } />
        </main >
    )
}


import React from "react"
import avatar from "./icons/user.png"

export default function Header(props) {
    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}

import React from "react"

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.userName}!</h1>
        </section>
    )
}

{/* Dynamic styling | inline css  */}

import React from "react"
import padsData from "./pads"   arraY / []

export default function App({ darkMode }) {
    const [pads, setPads] = React.useState(padsData)

    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }

    const buttonElements = pads.map(pad => (
        <button style={styles} key={pad.id}></button>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}


{/*    SOUND PAD CHALLANGE ==================> ------>  */}

import React from "react"
import padsData from "./pads"   //file with array of objects data
import Pad from "./Pad"      //component

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
         <Pad key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Pad" and
     *    replace the `button` above with our <Pad /> component
     * 2. Pass the Pad component a prop called `color` with the
     *    value of the same name from the `padsData` objects
     * 3. In the Pad component, apply an inline style to the <button>
     *    to set the backgroundColor of the button.
     * 
     * (We'll deal with the "on" property soon)
     */

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

export default function Pad(props) {
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
        ></button>
    )
}


{/* pad.js  file */}
export default [
    {
        id: 1,
        color: "#F18D8B",
        on: true
    },   
    {
        id: 2,
        color: "#F5C280",
        on: false
    },   
    {
        id: 3,
        color: "#EEEC79",
        on: true
    },   
    {
        id: 4,
        color: "#64ED98",
        on: true
    },   
    {
        id: 5,
        color: "#63DEED",
        on: false
    },   
    {
        id: 6,
        color: "#877FED",
        on: false
    },   
    {
        id: 7,
        color: "#A57FE9",
        on: false
    },   
    {
        id: 8,
        color: "#F289C1",
        on: true
    },   
]

{/* local state -----------> */}
import React from "react";

export default function Pad(props) {
  const [change, setChange] = React.useState(props.on);

  return (
    <button
      onClick={() => setChange(!change)}
      style={{ backgroundColor: props.color }}
      className={change ? "on" : undefined}
    ></button>
  );
}
{/* derived state | deriving initial stated based on in coming props but dont need this ? problem is u can end up with multiple  source of thoughts */}





{/* shared state ?  */}

{/* best thing in react is to have unified source of throughts . */}


{/* {props.key} not correct way */}
{/* Pad: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props) */}

import React from "react";
import Pad from "./components/Pad";
import padsData from "./pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    // console.log(id);
    setPads((prevPads) => prevPads.map((pad) => pad.id===id ? {...pad, on: !pad.on} : pad));
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={toggle}
      id={pad.id}
      // key={pad.id} wrong way to pass key
      color={pad.color}
      on={pad.on}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
      <button className="all-off">Turn All Off</button>
    </main>
  );
}


import React from "react";

export default function Pad(props) {
  // const [on, setOn] = React.useState(props.on);

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}

// export default function Pad(props) {
//   const [change, setChange] = React.useState(props.on);

//   return (
//     <button
//       onClick={() => setChange(!change)}
//       style={{ backgroundColor: props.color }}
//       className={change ? "on" : undefined}
//     ></button>
//   );
// }





