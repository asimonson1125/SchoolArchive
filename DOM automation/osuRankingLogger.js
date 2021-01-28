// Made this to keep track of my ranking progression in Osu before the graph on your profile is deleted (after 90 days)

// Do whatever with it lol

document.querySelector("div > svg > g > path").__data__.forEach(function (x) {
    console.log(x.y * -1);
});
