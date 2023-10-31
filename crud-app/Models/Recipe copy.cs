
using System;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;

namespace crud_app.Models;

    public class Recipe
    {
        public int Id { get; set;}
        public required string Recipename { get; set;}
        public int ImageId {get; set;}
        public int Category { get; set;}
        public required string Description {get; set;}
    }
