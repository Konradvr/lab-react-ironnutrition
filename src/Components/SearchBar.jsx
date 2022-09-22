// STEP IV
// IMPORT SECTION
import {useState} from 'react'

// FUNCTION that makes the connection to the MAIN script (App.js)
// PARAMETER "props" def.: 
    // Data passed to components in JavaScript are called props. Props look identical to attributes on plain JSX/HTML elements, 
    // but you can access their values within the component itself. Props are available in parameters of the component 
    // to which they are passed. Props are always included as properties of an object.


// MAIN FUNCTION OF THIS COMPONENT 
function SearchBar(props) {
    // make a connection to the "searchFood" function in the MAIN script (App.js) 
    //  -> gives uu access to the the already prepared copyied list 
    const {searchFood} = props 

    const [searchedString, setSearchedString] = useState('')

    // HANDLEBAR THINGS YK BRO 
    const handleChange = (event) => {
        // searchFood import of the "searchFood" function in App.js ! 
        searchFood(event.target.value)
        // use [set___] to make a setter (update)
        setSearchedString(event.target.value)
        // console.log(event.target.value)
        // console.log(searchedString)
      }

    return (
        // make a form that includes: 
            // -> INPUT w/onChange HANDLEBAR
            //  -> able that we can desing in CSS 
        <div>
            <form>
                <label htmlFor="search">Search food:</label>
                <input value={searchedString} type="text" name="search" id="search" onChange={handleChange} />
            </form>
        </div>
    )
}


// EXPORT SECTION
export default SearchBar