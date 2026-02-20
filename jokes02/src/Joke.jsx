import React from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }
  clonsole.log(isShown);

  return (
    <>
      {props.setup && <h3>{props.setup}</h3>}
      {/* && operation has a bug in conditional rendring eg expression that is 0 will only show /render 0 on screen  */}

      {/* {isShown && <p>{props.punchline}</p>} */}

      {/* alertive  */}

       {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </>
  );
}

// advance  conditon rendering in react
import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural) 
     */
    let text
    
    if (messages.length === 0) {
        text = "You're all caught up!"
    } else if (messages.length === 1) {
        text = "You have 1 unread message"
    } else {
        text = `You have ${message.length} unread messages`
    }
    
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])


    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    return (
        <div>
            <h1>{determineText()}</h1>
        </div>
    )
}


// Quiz conditional rendring  

// 1. What is "conditional rendering"?
// When we want to only sometimes display something on the page
// based on some kind of condition.


// 2. When would you use &&?
// When you want to either display something or NOT display something.


// 3. When would you use a ternary?
// When you need to decide which of 2 things to display


// 4. What if you need to decide between > 2 options on
//    what to display?
// if...else if...else conditional or maybe a `switch` statement.



