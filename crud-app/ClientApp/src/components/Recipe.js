const Recipe = ({ recipe: { id, recipename, imageId, description, category } }) => {
    return (
        <div className="recipe" key={id}>
          <div>
            <p>{recipename}</p>
          </div>
    
          <div>
            <img src={imageId !== "N/A" ? imageId : "https://via.placeholder.com/400"} alt={recipename} />
          </div>
    
          <div>
            <span>{category}</span>
            <h3>{description}</h3>
          </div>
        </div>
      );
}

export default Recipe;