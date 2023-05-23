var movie = "avengers"
var movierating = 4.5
var ind = "hollywood"

var movie1 = "avengers"
var movierating1 = 4.5
var ind1 = "hollywood"

let movie = {
    name: "avengers",
    rating: 4.5,
    ind: "hollywood"
}

let movie = {
    name: "avengers",
    rating: 4.5,
    ind: "hollywood"
}

movie.name
'avengers'
movie.rating
4.5
movie.ind
'hollywood'
movie.type = "romantic"
'romantic'
movie
{name: 'avengers', rating: 4.5, ind: 'hollywood', type: 'romantic'}
delete movie.ind
true
movie
{name: 'avengers', rating: 4.5, type: 'romantic'}

movie["name"]
'avengers'

JSON > JavaScript Object Notation 
> Array of object 
> Key value pair of data 

let movies = [
    {
        "name": "Avengers",
        "rating": 4.5,
        "ind": "Hollywood"
    },
    {
        "name": "Storm Warrior",
        "rating": 4.1,
        "ind": "Hollywood"
    },
    {
        "name": "Boys over flower",
        "rating": 3.5,
        "ind": "Bollywood"
    }
]

movies[1]
{name: 'Storm Warrior', rating: 4.1, ind: 'Hollywood'}
movies[0].name
'Avengers'

movies.map((data) => {return data.name})
['Avengers', 'Storm Warrior', 'Boys over flower']
movies.map((data) => data.rating)
[4.5, 4.1, 3.5]

for(i=0;i<movies.length;i++){
    console.log(movies[i].name)
}
Avengers
Storm Warrior
Boys over flower

var movie = {
    "name": "Boys over flower",
    "rating": 3.5,
    "ind": "Bollywood"
}
for(key in movie){
    console.log(key)
}
name
rating
ind

var movie = {
    "name": "Boys over flower",
    "rating": 3.5,
    "ind": "Bollywood"
}
for(key in movie){
    console.log(movie[key])
}
Boys over flower
3.5
Bollywood