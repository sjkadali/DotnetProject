
using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;

namespace crud_app;

    public class Recipe
    {
        public int Id { get; set;}
        public required string Recipename { get; set;}
        public string ImageId {get; set;}
        public string Category { get; set;}
        public string Owner {get; set;}
        public required string Description {get; set;}
    }
