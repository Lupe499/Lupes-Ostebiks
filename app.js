let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let prevOffset, nextOffset;
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var page = document.querySelector(".pageNumber");

fetch(`https://osteapi-lupe.herokuapp.com/api/v1/cheeses?offset=${offset}`)
    .then(response => response.json())
    .then(function (data){
        let maxOffset = data.count - (data.count % 5);

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 5;
        prevOffset = offset <= 0 ? 0 : parseInt(offset) - 5;

        next.href = `?offset=${nextOffset}`;
        prev.href = `?offset=${prevOffset}`;

        document.querySelector(".count").innerHTML=`${data.count}`

        if(offset == 0 || null){
            page.innerHTML= "1";
        }else{
            page.innerHTML=`${offset / 5 + 1}`
        }
        
    var osteliste = document.querySelector(".osteliste")
    data.results.forEach(result => {
        var oste = document.createElement("div");
        oste.classList.add("ost");
        oste.innerHTML=`
            <p class="name">${result.name}</p>
            <p class="price">${result.price.$numberDecimal} kr</p>
            <p class="weight">${result.weight} g</p>
            <p class="strength">${result.strength}</p>
            <p class="brand">${result.brand}</p>
        `
        osteliste.appendChild(oste);
    });
}); 
