fetch("https://osteapi-lupe.herokuapp.com/api/v1/cheeses")
.then(res => res.json())
.then(function(data) {
    console.log(data);
})