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
        "country": "Swe,UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg",
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
var markEnteredString = "Mark as entered *";
var linechange = document.createElement("br");
var filterRaffles = Object.entries(raffles);
var filtersChoosen = [];
var filters = ["all"];

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
    otherText.innerHTML = shoe.code + " / " + shoe.avaliable + " / " + shoe.price + "<br>";
    div.appendChild(otherText);
    textBox.appendChild(div);


}

//function que crea las raffles

function createRaffles() {

    for (let element of filterRaffles) {
        let countryElement = element[1].country;
        let purchaseElement= element[1].purchase;
        let collectionElement= element[1].collection;
        var arrayDeStringC = countryElement.split(",");
        for (var string of arrayDeStringC) {
            if (filters.indexOf(string) < 0) {

                filters.push(string);
            }
        }
        var arrayDeStringP = purchaseElement.split(",");
        for (var string of arrayDeStringP) {
            if (filters.indexOf(string) < 0) {

                filters.push(string);
            }
        }
        var arrayDeStringCOL = collectionElement.split(",");
        for (var string of arrayDeStringCOL) {
            if (filters.indexOf(string) < 0) {

                filters.push(string);
            }
        }


        var div = document.createElement("div");
        div.setAttribute("class", "col-md-2");
        var image = document.createElement("image");
        image.setAttribute("src", element[1].logo);
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
        opens.innerHTML = "opens -" + element[1].Opens + "<br>";
        div.appendChild(opens);

        var closes = document.createElement("p");
        closes.innerHTML = "closes -" + element[1].Closes + "<br>";
        div.appendChild(closes);

        createButton(element[1].Opens, div, element[1].Closes, element[0]);

        let localStoragedVar = window.localStorage.getItem(element[0]);

        var markEntered = document.createElement("a");
        markEntered.setAttribute("id", "marked");
        if (localStoragedVar !== "" && localStoragedVar !== null) {
            markEntered.innerHTML = localStoragedVar;
        } else {
            markEntered.innerHTML = markEnteredString + "<br>";
        }
        div.appendChild(markEntered);
        raffleBox.appendChild(div);
        let MarkedElement = document.getElementById("marked");
        let valueOfElement = element[0].toString();
        let value = " markAsEntered(true," + valueOfElement + ")";
        MarkedElement.setAttribute("onclick", value);
    }
    createFilter();
}

//function que crea el button
function createButton(Opened, div, closes, whoMarks) {
    var button = document.createElement("button");
    if (closes == "closed") {
        button.innerHTML = "CLOSED";
        button.setAttribute("style", "background-color: red;")
    } else {
        if (Opened == "live") {
            button.innerHTML = "ENTER RAFFLE";
            let value = "markAsEntered(false," + whoMarks.toString() + ")";
            button.setAttribute("style", "background-color: green;");
            button.setAttribute("onclick", value);

        } else if (Opened == "announced") {
            button.innerHTML = "ANNOUNCED";
            button.setAttribute("style", "background-color: yellow;")
        }
    }
    div.appendChild(button);
    div.appendChild(linechange);
}

//function MArk As entered

function markAsEntered(fromMarker, whoMarks) {
    console.log("Entro arriba");
    let marked = document.getElementById("marked");
    if (window.loaded) {
        console.log("Entro window");
        if (marked.innerText == "Mark as entered *") {
            console.log("Entro entro dentro if");
            window.localStorage.setItem(whoMarks.toString(), 'Entered');
            marked.innerHTML = "Entered"
        } else {
            console.log("Entro entro dentro else");

            if (fromMarker) {

                console.log("Entro entro dentro else i if");

                window.localStorage.setItem(whoMarks.toString(), 'Mark as entered *');
                marked.innerHTML = "Mark as entered *"
            }
        }
    }
}

//funcion para crear los filtros
function createFilter() {
    let filterDiv = document.getElementById("filter");
    var div = document.createElement("div");
    div.setAttribute("class", "col-md-10");
    for (let filter of filters) {
        var button = document.createElement("button");
        button.innerHTML = filter;
        button.setAttribute("id",filter);
        button.setAttribute("style", "background-color: white;")
        button.setAttribute("onclick","clickedFilter("+filter+")");
        div.appendChild(button);
    }
    filterDiv.appendChild(div);
}


//funcion cuando se clican los filtros
function clickedFilter(filter){

    let filteredId = document.getElementById(+filter);
   if(filter.innerText == "all" || filtersChoosen.indexOf(filter.innerText) >= 0 ){
       filteredId.setAttribute("style", "background-color: white;");
       filterRaffles.slice(filtersChoosen.indexOf(filter.innerText)-1,filtersChoosen.indexOf(filter.innerText));
       if( filter.innerText == "all"){
           filtersChoosen = [];
           let filterDiv = document.getElementById("filter");
           while (filterDiv.firstChild) {
               filterDiv.removeChild(filterDiv.firstChild);
           }
           createFilter();

           filterRaffles = Object.entries(raffles);
           createRaffles();

       }
   }else{
       filtersChoosen.push(filter.innerText);
       filteredId.setAttribute("style", "background-color: green;");
       let pushedRaffle = [];

       for (let raffle of Object.entries(raffles)){
           if(raffle[1].country == filter.innerText ||raffle[1].purchase == filter.innerText || raffle[1].collection == filter.innerText){
                pushedRaffle.push(raffle);
           }
       }

       for (let raffle of pushedRaffle){
           if(filterRaffles.indexOf(raffle) <0){
               filterRaffles.push(raffle);
           }
       }


   }
    while (raffleBox.firstChild) {
        raffleBox.removeChild(raffleBox.firstChild);
    }

    createRaffles();

}

createShoe();

createRaffles();


