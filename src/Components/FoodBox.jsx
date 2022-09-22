// STEP II
// IMPORT SECTION 


// MAIN FUNCTION OF THIS COMPONENT 
function FoodBox(props) {
    // give this JSX script access to the foodList from the map parameter eachFood
    const {food} = props 

    return (
        <div className="foodbox">
        <span>{food.name}</span>
        <img src={food.image} alt="" />
        <span>Calories: {food.calories}</span>
        <span>Servings: {food.servings}</span>
        <span>Total calories: {food.calories * food.servings}</span>
        {/* <button onClick={handleDelete}>Delete</button> */}
      </div>
    )
}

// EXPORT SECTION
export default FoodBox