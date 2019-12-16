import React, { useState } from 'react'
import ReactDOM from "react-dom";


const PrintRows = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <li>{props.name} : {props.phone}</li>
    </div>)
}
const Print = (props) => {
  return (props.persons.map(person => <PrintRows key={person.phone} name={person.name} phone={person.phone} />))

}
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Nomi',
      phone: '085437235'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState()

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked')
    console.log(persons)
    const personObject = { name: newName, phone: newPhone }
    setPersons(persons.concat(personObject))
  }

  const handlePerson = (event) => {
    setNewName(event.target.value)
  }
  const handlePhone = (event) => {
    setNewPhone(event.target.value)
  }
   const handleSearch = (event) => {
     setNewSearch(event.target.value)
   }
  let namesToShow=persons.filter(person=>person.name.startsWith(newSearch))

  return (
    <div style={{ margin: '20%', color: 'darksilver', padding: 200, background: 'lightyellow', fontSize: 18, font: 'sans-serif', backgroundImage: 'ab.bmp', textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <form>
        <div>
        </div>

      </form>
      <h2>persons</h2>
      <div >
        <form onSubmit={addPerson}>
          add new name: <br /><input value={newName} onChange={handlePerson} />
          <br />
          <br />
          phone number: <br /><input value={newPhone} onChange={handlePhone} />
          <br />
          <br />
          <button type="submit" style={{ color: 'silver', background: 'gray', fontSize: 15 }}>add</button>
          <br />
          <br />
        </form>
        <Print persons={persons} />
         { <form>
           <br/>
           <br/>
          find: <input value={newSearch} onChange={handleSearch} />
          <br />
          <br />
          <br />
          <br />
        </form>  }
      </div>
      {<Print persons={namesToShow} />}
    </div >
  )
}

// export default App
ReactDOM.render(<App />, document.getElementById("root"));