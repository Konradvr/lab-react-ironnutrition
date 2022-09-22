// STEP III 
// IMPORT SECTION 
import { Input,} from 'antd';
import {useState} from 'react'

// MAIN FUNCTION OF THIS COMPONENT
function AddFood(props) {
    const {addFood} = props

    // making for every KEY in the OBJ's of the JSON data a useState 
    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [calories,setCalories] = useState(0)
    const [servings,setServings] = useState(0)
    // HANDLEBAR'S SECTION 
    const handleName = (event) => {setName(event.target.value)}
    const handleImage = (event) => {setImage(event.target.value)}
    const handleCalories = (event) => {setCalories(event.target.value)}
    const handleServings = (event) => {setServings(event.target.value)}
    
    // TEMPORARY SUBMIT THE NEW FOOD TO THE FOODLIST (ONLY IN THE FRONTEND)
    const handleSubmit = (event) => {
      event.preventDefault();
    //   making a new object that hold the the added food 
      const newFood = {
        name,
        image,
        calories,
        servings
      }
    // adding the new food to the foodList BUT ONLY TEMPORARY (only in the frontend) 
    // REASON: we are not connected to any DB !! COMING SOON :P 
      addFood(newFood);
      setName("")
      setImage("")
      setCalories(0)
      setServings(0)
    };
    return(
        <div>
            {/* USING FORM to warp all INPUTS together */}
            {/* HANDLEBAR'S CRASHCOURSE */}
            {/* onClick={} -> onClick handles click events on JSX elements (namely on buttons) */}
            {/* onChange={} -> onChange handles keyboard events (namely a user typing into an input or textarea) */}
            {/* onSubmit={} -> onSubmit handles form submissions from the user */}
            <form className="addfood" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <Input name="name" value={name} type="text" id='name' onChange={handleName} /> 
                <label htmlFor="image">Image URL</label>
                <Input name="image" value={image} type="text" id='image' onChange={handleImage} />
                <label htmlFor="calories">Calories</label>
                <Input name="calories" value={calories} type="text" id='calories' onChange={handleCalories} />
                <label htmlFor="servings">Servings</label>
                <Input name="servings" value={servings} type="text" id='servings' onChange={handleServings} />
                <button type='submit'>Add a food</button>
            </form>
        </div>
    ) 
}

// EXPORT SECTION 
export default AddFood