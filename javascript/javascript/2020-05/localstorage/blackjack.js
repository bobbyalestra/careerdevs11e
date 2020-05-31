let cards = {
    deck :[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7,7, 7, 7,  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardsTotal: 0,
    dealerCards: [],
    dealerCardsTotal: 0,

}
let cardMethods = {
    initialDealPlayer1: function (){
        for(let i = 0; i < 2; i++ ){
       cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
        
    }
   // dont forget to add the update player cards method 
   this.updatePlayer1Cards();
   this.totalPlayer1Cards()
    },
     initialDealDealer: function (){
        for(let i = 0; i < 2; i++ ){
       cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
        
    }
    let html = '<ul>';
    for (let i = 0; i < cards.dealerCards.length; i++){
      
     html += `<li>${cards.dealerCards[i]}</li>`        
    }
 
    html = html + '</ul>'
    document.getElementById('dealerCards').innerHTML = html
    cards.dealerCardsTotal;
    this.initialDealDealer()
    },
    totalPlayer1Cards: function () {
    
        for (let i = 0; i < cards.player1Cards.length; i++) {
          cards.player1CardsTotal += cards.player1Cards[i];
        }
        console.log(cards.player1CardsTotal);
        document.getElementById('totalPlayer1Cards').innerText = cards.player1CardsTotal;
        cards.player1CardsTotal = 0 
        this.updatePlayer1Cards();    
    }, 
       
    totalDealerCards: function (){
    for (let i = 0; i < cards.dealerCards.length; i++){
        cards.dealerCardsTotal += cards.dealerCards[i];   
     }
     document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;

    
    let html1 = '<ul>';
    for (let i = 0; i < 1; i++){
              
     html1 += `<li>${cards.dealerCards[i]}</li>`    
    
    }

    html1 = html1 + '</ul>'
    document.getElementById('dealerCards').innerHTML = html1
    cards.dealerCardsTotal;

 

  },

 hitMe: function (){
     let cardTotalValue = 21;
    for(let i = 0; i < 1; i++ ){
        cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
         
     }
     this.totalPlayer1Cards()
     this.updatePlayer1Cards()  
    },
    updatePlayer1Cards: function (){
        let html = '<ul>';
        for (let i = 0; i < cards.player1Cards.length; i++){
          
         html += `<li>${cards.player1Cards[i]}</li>`    
        }
        html = html + '</ul>'
        document.getElementById('player1Cards').innerHTML = html
        this.player1CardsTotal;
    }
}


cardMethods.initialDealPlayer1()



document.getElementById('title').innerText = ' The You Lose Casino';
cardMethods.initialDealDealer();
//  document.getElementById('player1Name').innerText = prompt("What is your name")

let spades =   <div class =' spades shadow rounded'>
<h1>&spades;</h1>
</div>

let hearts =  <div class ='hearts shadow rounded '>
<div class ='top'><span>A</span><span>&hearts;</span></div>
<h1>&hearts;</h1>
<div class='botton'><span>&hearts;</span><span>A</span></div>
</div>

let clubs =
<div class= 'clubs shadow rounded'> 
    <h1>&clubs;</h1>
</div>

let diam = 
<div class ='diam shadow rounded'>
    <h1>&diam;</h1>
</div>
