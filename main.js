
//variables dadas en el raffle.js
var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg'git",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};


//variables globales necesitadas

var raffleBox = document.getElementById("Raffles");

//functions

//funcion para crear la info del zapato
function createShoe() {

    let textBox = document.getElementById("text");

    var div = document.createElement("div");
    div.setAttribute("class", "col-md-6");
    var title = document.createElement("h2");
    title.innerHTML = shoe.model + "<br>";
    div.appendChild(title);

    var colour = document.createElement("h4");
    colour.innerHTML = shoe.colour + "<br>";
    div.appendChild(colour);

    var otherText = document.createElement("p");
    otherText.innerHTML = shoe.code + " / "+ shoe.avaliable+" / "+ shoe.price+"<br>";
    div.appendChild(otherText);
    textBox.appendChild(div);


}

//function que crea las raffles

function createRaffles(){
for (let element of Object.entries(raffles) ){
    var div = document.createElement("div");
    div.setAttribute("class", "col-md-2");
    var image = document.createElement("image");
    image.setAttribute("src",element[1].logo);
    div.appendChild(image);

    var title = document.createElement("h6");
    title.innerHTML = element[0] + "<br>";
    div.appendChild(title);

    var country = document.createElement("p");
    country.innerHTML = element[1].country + "<br>";
    div.appendChild(country);

    var purchase = document.createElement("p");
    purchase.innerHTML = element[1].purchase + "<br>";
    div.appendChild(purchase);

    var collention = document.createElement("p");
    collention.innerHTML = element[1].collection + "<br>";
    div.appendChild(collention);

    var sizes = document.createElement("p");
    sizes.innerHTML = element[1].sizes + "<br>";
    div.appendChild(sizes);

    var opens = document.createElement("p");
    opens.innerHTML = "opens -"+element[1].Opens + "<br>";
    div.appendChild(opens);

    var closes = document.createElement("p");
    closes.innerHTML = "closes -"+element[1].Closes + "<br>";
    div.appendChild(closes);



    createButton(element[1].Opens,div, element[1].Closes);

    raffleBox.appendChild(div);
}


function createButton(Opened, div, closes){
console.log(Opened);
    var button = document.createElement("button");
    if(closes == "closed"){
        button.innerHTML = "CLOSED";
        button.setAttribute("style", "background-color: red;")
    }
    else {
        if (Opened == "live") {
            button.innerHTML = "ENTER RAFFLE";
            button.setAttribute("style", "background-color: green;")
        } else if (Opened == "announced") {
            button.innerHTML = "ANNOUNCED";
            button.setAttribute("style", "background-color: yellow;")
        }
    }
    div.appendChild(button);
}

}

createShoe();

createRaffles();


