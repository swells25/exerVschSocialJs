var Friends = {
    firstName: "Jeffery",
    lastName: "Jefferies",
    age: 42,
    gender: "male",
    favoriteActors: ["Brad Pitt", "Johnny Depp", "George Cloony", "Mary Elizabeth Winstead"],
    favoriteShows: [
        {
            showName: "Big Bang Theory",
            numberOfSeasons: 13,
            favoriteCharacter: "Sheldon",
            schedule: [
                "630pm on Monday",
                "630pm on Friday",
            ]
        },
        {
            showName: "iZombie",
            numberOfSeasons: 5,
            favoriteCharacter: "Liv Moore",
            schedule: [
                "730pm on Tuesday",
                "730pm on Thursday",
            ]
        },
        {
            showName: "The Witcher",
            numberOfSeasons: 1,
            favoriteCharacter: "Geralt of Rivian",
            schedule: [
                "630pm on Saturday",
                "630pm on Sunday",
            ]
        },
        {
            showName: "The Simpsons",
            numberOfSeasons: 35,
            favoriteCharacter: "Homer",
            schedule: [
                "6pm on Wednesday"
            ],
        }
    ],
    printFavoriteActors: function() {
        for (i=0; i < this.favoriteActors.length; i++) {
            console.log(this.favoriteActors[i])
        }
    }
}
console.log(Friends.favoriteActors)
console.log(Friends.favoriteShows)