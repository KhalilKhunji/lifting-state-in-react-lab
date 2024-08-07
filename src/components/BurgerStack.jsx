const BurgerStack = ({stack}) => {
    return(
        <ul>
            {stack.map((ingredient) => (
                <li style={{backgroundColor: ingredient.color}}>{ingredient.name}</li>
            ))}
        </ul>
    );
};
  
export default BurgerStack;