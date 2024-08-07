const IngredientList = ({ingredients}) => {
    return(
        <ul>
            {ingredients.map((ingredient) => (
                <li style={{backgroundColor: ingredient.color}}>{ingredient.name}</li>
            ))}
        </ul>
    );
};
  
export default IngredientList;