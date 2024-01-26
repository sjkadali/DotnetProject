const Recipe = ({ recipe: { id, recipename, imageId, description, category } }) => {
    return (
        <tr className="recipe" key={id}>
          <h4>
            <p>{recipename}</p>
          </h4>
    
          <p>
            <img src={imageId !== "N/A" ? imageId : "https://via.placeholder.com/400"} alt={recipename} />
          </p>
    
          <td>
            <span>{category}</span>
            <h3>{description}</h3>
          </td>
        </tr>
      );
}

export default Recipe;