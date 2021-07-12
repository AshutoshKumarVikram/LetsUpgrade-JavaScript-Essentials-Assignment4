let cards = [
    {
        image: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value: 1,
        status: "closed"
    },
    {
        image: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value: 1,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://pics.filmaffinity.com/Black_Panther-623153743-large.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://pics.filmaffinity.com/Black_Panther-623153743-large.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOLaO513TNKOIXEV74L8IfbtWYCTcU-lDKUndM-dKjtg0I5pBl0cGYp-QZ5EIQyFZEOg&usqp=CAU",
        value: 5,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOLaO513TNKOIXEV74L8IfbtWYCTcU-lDKUndM-dKjtg0I5pBl0cGYp-QZ5EIQyFZEOg&usqp=CAU",
        value: 5,
        status: "closed"
    }

]

// Durnsten Shuffling Algorithm

let temp;
for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let cardsCopy = cards;
function displayCards(data) {
    let cardsString = "";
    data.forEach(function (card,index) {
        cardsString += `
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });
    document.getElementById('cards').innerHTML = cardsString;
}
displayCards(cards);

let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;
function openCard(index) {

    console.log(cards);

    cards[index].status = "opened";
    if (cardCount === 1) {
        val1 = cards[index].value;
        cardCount++;
    }
    else if (cardCount === 2) {
        val2 = cards[index].value;
        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;
            
            // reset after one guess
            val1 = null;
            val2 = null;
            cardCount = 1;
        }
        else {
            alert("game over");
            location.reload();
        }
    }

    displayCards(cards);
}
