//objects
//data containers for more complex data

//structure
//We use {} for objects
//each property has two parts --> key: value

// let city={
//     cityName:"Norwich",
//     population: 250000,
//     hasTrainStation: true,
// };

// console.log(city);

// //Todo: see the value of cityname in console

// console.log(city.cityName);

// //Todo: see the value of city population in console

// console.log(city.population);

// //Todo: Add a new property
// city.country="UK";
// console.log(city.country);

// let newCity = {
//     cityName: "Kingston-Upon-Hull",
//     population:25000,
//     hasTrainStation: true,
//     coffeeShops:["Great", "Amazing Coffee", " Just Average Coffee"],

//     companies: [
//         { companyName:"TechEducators", location:"some building" },     
//         { companyName:"Tech Providers", location:"another building"},
//     ],
// };

// console.log(newCity.coffeeShops);
// console.log(newCity.coffeeShops[1]);

// Todo: I want to see techeducators in console

console.log("Hello objects");

const person = {
    name: "Bob",
    age: 40,
    favouriteColour: "red",
};

//Adding properties
person.favouriteFood="Pizza";



console.log(person);

console.table(person);

console.log(person.name);
console.log(person.age);
console.log(person.favouriteColour);

console.log(person.favouriteFood);

const blogPost = {
    title: "My first blog post",
    author: {
        name: "Bob",
        age:40,
        favouriteColour:"red",

    },
    tags: ["coding","javascript", "objects", "arrays"],
    content: "This is my blogpost about learning objects and arrays.",
};
console.log(blogPost.tags[0]);

console.log(blogPost.tags.length);

console.log(`There are ${blogPost.tags.length} tags for post " ${blogPost.title}":`);

// 
for(let tag of blogPost.tags)
{
    console.log(tag);
}


