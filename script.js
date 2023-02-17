// SpreadDestructuringExercise

/*
    1a. Create a const variable called mcuShows and set the value to an array with the following values "Loki" and 
        "Moon Knight"
    1b. Create another const variable called starWarsShows and set the value to an array with the following values 
        "The Mandalorian" and "The Book of Boba Fett"
    1c. Create another const variable called disneyPlusShows. Using spread, set the value for disneyPlusShows to the 
        items in the mcuShows and starWarsShows arrays as well as the following string value "The Beatles: Get Back".
    1d. Using a console log, display the value of the disneyPlusShows variable in terminal
    2a. Create another const variable called netflixMovies and set the value to an object with the following key value 
        pairs (key: "action" value: "Extraction") & (key: "crime" value: "The Irishman")
    2b. Create a const variable called amazonPrimeMovies and set the value to an object with the following key value 
        pairs (key: "action" value: "The Tomorrow War") & (key: "drama" value: "One Night In Miami")
    2c. Create another const variable called streamingMovies. Using spread, set the value for streamingMovies to an 
        object with the key value pairs in the netflixMovies and amazonPrimeMovies objects as well as the following 
        key value pair (key: "musical" value: "Hamilton"). Also, spread the netflixMovies and amazonPrimeMovies in 
        the order that will set the value for the "action" key to "Extraction"
    2d. Console log the value of the streamingMovies variable
    3a. Create another const variable called disneyJunior and set the value to an array with the following values 
        "Mickey Mouse Clubhouse" and "Spidey and His Amazing Friends"
    3b. Using destructuring, set the value of the "Mickey Mouse Clubhouse" item to a variable called mickey. Also, set 
        the value of the "Spidey and His Amazing Friends" item to a variable called spidey.
    3c. Using a single console log, display the values of both the mickey and spidey variables in terminal
    4a. Create another const variable called "avengers" and set the value to an object with the following key value 
        pairs (key: "warMachine" value: "James Rhodes") & (key: "theHulk" value: "Bruce Banner")
    4b. Using destructuring, create variables with each key value pair. Have the key be the variable name and the 
        value be the value from the key value pair.
    4c. Using a single console log, display the values of the two new variables in terminal
4d. Create another const variable called "moreAvengers" and set the value to an object with the following key 
    value pairs (key: "blackWidow" value: "Natasha Romanoff"), (key: "hawkeye" value: "Clint Barton"), & 
    (key: "ironMan" value: "Tony Stark").
4e. Using destructuring again, create brand new variable names for the values in the moreAvengers object. For 
    the "Natasha Romanoff" string value use "nat" for the variable name and for the REST of the key value pairs 
    use "others" for the variable name.
4f. Using a single console log, display the values of the two new variables in terminal
*/

const mcuShows = ["Loki", "Moon Knight"];

const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"];

const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles: Get Back"];
console.log(disneyPlusShows);

const netflixMovies = {action: "Extraction", crime: "The Irishman"};

const amazonPrimeMovies = {action: "The Tomorrow War", drama: "One Night In Miami"};

const streamingMovies = {...amazonPrimeMovies, ...netflixMovies, musical: "Hamilton"};
console.log(streamingMovies);

const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];

let [mickey, spidey] = disneyJunior;
console.log(mickey, spidey);

const avengers = {warMachine: "James Rhodes", theHulk: "Bruce Banner"};

let {warMachine, theHulk} = avengers;
console.log(warMachine, theHulk);

const moreAvengers = {blackWidow: "Natasha Romanoff", hawkeye: "Clint Barton", ironMan: "Tony Stark"};

let {blackWidow: nat, ...others} = moreAvengers;
console.log(nat, others);