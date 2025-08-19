console.log("Week2 Loop workshop");

for(let i=0; i <5; i++)
{
    console.log("Iteration",i);
}
 let counter=1;
while(counter <=5)
{
    console.log(`counter ${counter}`);
    counter++;
}
let keeplooping = false;
let i=0;
while(keeplooping === false)
{
    console.log("Iteration", i );
    keeplooping = Math.random() < 0.1;
    i++;
}

// let food= ["pizza","burger","chips","chocolates","pastries"];
// for(let i=0;i < food.length; i++)
//     {
// console.log(food[i]);
// }

const foods= ["pizza","burger","chips","chocolates","pastries"];
for(let food of foods )
{
    console.log(food);
}

const favouriteNumbers= [4,5,16,25,42, Infinity];
for(let number of favouriteNumbers){
    console.log(number);
}

foods.forEach(function(food,index)
{
    console.log(index,food);
}
);

//forEach()
// a method --> a javascript default function
//structure

// subjects.forEach(function(subject))
// {
//     console.log(subject);
// }

//Todo: I want to render (display,show) 3 images in my page
// - I need a container for the images
// - I need a loop to perform a repetitive task(for loop)
// - I need the image source and alt text
// - I need to store the images data
// - I need create and add the images to the DOM

// let imgURL = [https://unsplash.com/photos/a-field-of-purple-flowers-in-the-middle-of-a-forest-yrd5sLUONsM, https://unsplash.com/photos/a-field-of-pink-and-red-daisies-with-yellow-centers-L5DP1x7J4fY,https://unsplash.com/photos/cherry-blossoms-bloom-vibrantly-against-a-blue-sky-N_yJGWotRaE,https://unsplash.com/photos/beautiful-peach-colored-flowers-bloom-in-the-sunlight-CZptuxEd9tc"];
// let altText = ["purple flower", "pink and red daisies","cherry-blossoms", "peach flowers", "template","joey"];

// const imageContainer = document.querySelector(".image-container")
// for(let i=0; i < altText.length; i++){
//     const pTag= document.createElement("p");
//     pTag.textContent= altText[i];
//     imageContainer.appendChild(pTag);
//    
