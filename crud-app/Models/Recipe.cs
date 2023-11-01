
namespace crud_app;

    public class Recipe
    {
        public int Id { get; set;}
        public required string Recipename { get; set;}
        public int ImageId {get; set;}
        public int Category { get; set;}
        public required string Description {get; set;}
    }
