
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFood';

function App() {

  // CONNECTION TO FOODLIST IN FOODS.JSON w/useState() 
  const [foodList, setFoodList] = useState(foods) // STEP I 
  const [stableFoodList, setStableFoodList] = useState(foods) // STEP I 

  // FUNCTIONS TO BUILD, CONNECT & INTERACT w/COMPONENTS 

  // STEP III
  // FUNCTION FOR THE COMPONENT AddFood 
  function addFood(food) {
    // copy of stableFoodList 
    const copyOfFoodList = [...stableFoodList];
    // 
    const newFoodList = [...copyOfFoodList, food];
    // 
    setFoodList(newFoodList);
    // 
    setStableFoodList(newFoodList);
  }

  // STEP IV 
  // FUNCTION FOR COMPONENT SearFood 
  function searchFood(food) {
    // copy of foodList 
    let copyOfFoodList = [...stableFoodList]
    // check if the copy is working 
    // console.log(foodList) 
    // make filter of the copy (bc of let no need to create another new function!)
    copyOfFoodList = copyOfFoodList.filter((eachFood) => {
      // eachFood new paramter that holds the foodList .name so lead the copy function to the string of all keys w/name .toLowerCase() bc of typing
      // includes(food) that we access to the updated foodList 
      return eachFood.name.toLowerCase().includes(food); 
    }) 
    // now make a setter -> that means uu update the foodList 
    setFoodList(copyOfFoodList)
  }


  return(
    <div>
      <div>
        <AddFood addFood={addFood} />
          <div>
            {/* CONNECTION TO THE "SearchBar" COMPONENTS !!don't forget to import the JSX at the beginning!! */}
            <SearchBar searchFood={searchFood} />
            {/* this DIV includes and show on the APP the latest updated foodList! */}
              <div className='Food-List'>
                {/* STEP I */}
                {/* use .map() methode to get acces to the key & values of the OBJ of the Data in JSON */}
                {/* !! wrap JS writing in a <div> etc. EVERYTIME in {} !! */}
                {/* {foodList.map((eachFood) => { 
                  // give every .map or other method their own RETURN() !! if uu forget this or write other stuff in this code part it will render is by 
                  // every existing key over and over again 
                  // for exp.: if uu want to put a signle <h1></h1> over the foodList it will show uu the heading after every food in the foodList again 
                  return(
                    <div>
                    !! to get access to the string etc of the key in the OBJ uu need to wrap the code in {} !! 
                    <p>{eachFood.name}</p> 
                    <p>{eachFood.calories}</p>
                    <img src={eachFood.image} width={100}/>
                    <p>{eachFood.servings}</p>
                    </div> 
                    )
                  })} */}
                {/* STEP II */}
                {/* REPLACE THE FIRST WITH THIS ONE */}
                {/* REASON: we created for the foodList their own COMPONENT bc we can update etc it easier in this way!! */}
                {foodList.map((eachFood) => {
                  return (
                    <FoodBox
                      food={{
                        name: eachFood.name,
                        calories: eachFood.calories,
                        image: eachFood.image,
                        servings: eachFood.servings,
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App