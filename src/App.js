import React from 'react'
import './App.css'
import Navbar from './comp/navbar'
import Ahmad from  './asset/ahmad.jpg'

function App() {

function abc() {
  alert(`hi ahmad`)
}

let name = "hassan"

  return(
    <div>

{/* html */}
<img src={Ahmad} alt="logo"/>


<Navbar />
<Navbar />
<Navbar />
<h1 className='ab'>{name}</h1>
<h1>Welcome to React!</h1>
<p>This is a paragraph of text.</p>

<button>Click Me!</button>
<label>Welcome to React!</label>
<input type="text" placeholder='enter your name'/>
<button type='submit' onClick={abc}>check now</button>

    </div>



  )



}



export default App