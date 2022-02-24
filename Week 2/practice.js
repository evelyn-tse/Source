//PART 1

// Create an array called twitter_users with 1 user
let twitter_users = ["@Evelyn"];


// Add 3 usernames to the array using .push() (hint: make sure the usernames are strings)
twitter_users.push("@Deb");
twitter_users.push("@Lily");
twitter_users.push("@Source");

//Create an arrow function called print_array that loops through every username in the array and prints out the username with a "!"At the end
//Example - print_array(["@obama", "@bill", "@vinay"]) should print @obama! @bill! and @vinay to the console
//Hint - no return statement necessary

let print_array = twitter_users.forEach((element) => console.log(element + "!"));
console.log(print_array);

//Create an arrow function  that empties an array using pop and a while loop (hint: use the .length property of an array inside the while loop condition)

let empty_array = (twitter_users) => {
    while(twitter_users.length > 0){
    twitter_users.pop();
    }
};
//Call this arrow function with the usernames array to empty the array
console.log(empty_array(twitter_users));

//----------------------------------------

//PART 2

//Create two tweet objects with text author and date fields
//Example {text: "First tweet", author: "Jack Dorsey", date: "September 20th"}

let tweet1 = {
    text: text1, 
    author
}

//Create an array called tweets and add these two objects to the array

//Loop through the array and add a likes field to each tweet object with 0 likes

//Create an arrow function that takes in a tweet and adds 1 to the likes field of the tweet object
//Example add_like({text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}) should edit the object to be {text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 1}
//Hint - no return statement necessary

// Use a forEach to call this function on each tweet

//Create an arrow function that takes in the array of tweets and returns the number of tweets there are with 0 likes
//ex zero_likes([{text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}, {text: "Second tweet", author: "Jeff Bezos", date: "September 21th", likes: 1}]) should return 1