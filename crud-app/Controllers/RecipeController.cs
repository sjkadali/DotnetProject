
using Microsoft.AspNetCore.Mvc;

namespace crud_app.Controllers;
 
    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private static readonly IEnumerable<Recipe> Recipes = new[]
        {
            new Recipe() { Id = 1, Recipename = "Rice Pudding", ImageId = 1, Category = 1, Description = ""},
            new Recipe() { Id = 2, Recipename = "Upamv", ImageId = 2, Category = 2, Description = ""},
            new Recipe() { Id = 3, Recipename = "Chicken Curry", ImageId = 3, Category = 3, Description = ""},
            new Recipe() { Id = 4, Recipename = "Pizza", ImageId = 4, Category = 2,  Description = ""},
            new Recipe() { Id = 5, Recipename = "Pasta", ImageId = 5, Category = 2,  Description = ""},
            new Recipe() { Id = 6, Recipename = "Cup Cake", ImageId = 6, Category = 1, Description = ""}
        };

        [HttpGet("GetAllRecipes")]
        public IEnumerable<Recipe> Get()
        {
            return Recipes;
        }

        [HttpGet("{Category:int}")]
        public Recipe[] Get(int Category){
            Recipe[] recipes = Recipes.Where(i => i.Category == Category).ToArray();
            return recipes;
        }

    }
