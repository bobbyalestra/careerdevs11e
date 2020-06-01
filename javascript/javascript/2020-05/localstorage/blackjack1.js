
let cards = {
    deck: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    suits:['Hearts', 'Clubs', 'Spades', 'Diamonds'],
    player1CardsTotal: 0,
    dealerCards: [],
    dealerCardsTotal: 0,
    busted: 0,
    blackjack: 21,
    deckNew = new Array ()
  }






  function createDeck()
  {
      deck = new Array();
      for (var i = 0 ; i < deck.length; i++)
      {
          for(var x = 0; x < suits.length; x++)
          {
              var weight = parseInt(deck[i]);
              if (deck[i] == "J" || deck[i] == "Q" || deck[i] == "K")
                  weight = 10;
              if (deck[i] == "A")
                  weight = 11;
              var card = { Value: deck, Suit: suits[x], Weight: weight };
              deck.push(card);
          }
      }



  /////////////////
  let cardMethod = {
      initialDeal: function () {
        for (let i = 0; i < 2; i++) {
          cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        }
        this.updatePlayer1Cards();
        
      },
      
      // Dont forget to add the update player cards method here
      
      player1Hit: function() {
        if( cards.player1Cards.length === 0){

        }else{
          cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        }
        this.updatePlayer1Cards();
  
      },
      
      updatePlayer1Cards: function() {
        let html = `<ul>`;
        for (let i = 0; i < cards.player1Cards.length; i++) {
          html += `<li>${cards.player1Cards[i]}</li>`
  
        }
        html += `</ul>`;
        document.getElementById('player1Cards').innerHTML = html;
        this.totalPlayer1Cards();
        
      },




     


      totalPlayer1Cards: function () {
        for (let i = 0; i < cards.player1Cards.length; i++) {
          cards.player1CardsTotal += cards.player1Cards[i];
  
        }
  
        document.getElementById('player1CardsTotal').innerText = cards.player1CardsTotal;
        if (cards.player1CardsTotal > 21) {
            cards.busted = 1
            setTimeout(function() {alert('BUSTED! Give us your money!!')} , 100)
            
            cards.player1Cards= [];
        }else if (cards.player1CardsTotal = 21){
            // chill for a bit
            
        }
        cards.player1CardsTotal = 0;
          
      },
      
      totalDealerCards: function() {
          
        for (let i = 0; i < cards.dealerCards.length; i++) {
          cards.dealerCardsTotal += cards.dealerCards[i];
        } 
        
        document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;
        if (cards.dealerCardsTotal > 21) {
            cards.busted = 2
            setTimeout(function() {alert('BUSTED! Give us your money!!')} , 100)
            
            cards.dealerCards= [];
        }else if (cards.dealerCardsTotal = 21){
            
        }
        cards.dealerCardsTotal= 0;
      },


      newGame: function (){
        if( cards.player1Cards.length === 0){
        this.initialDeal(); 
        }else if (cards.dealerCards.length === 0)
    this.initialDealDealer(); 
      },

    player1Stand: function (){
      this.initialDealDealer();
        
      this.dealerPlayLogic();
        
        },
  
      //dealer gets their cards
  
      dealerPlayLogic: function (){
        setTimeout(100)
        
        if (dealerCardsTotal == 21){
              while (dealerCardsTotal <= 21) {
               cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop()); cards.dealerCards++
              }
            
            }
      
        this.updateDealerCards()
       // this.dealerHitMethod()
            
    },


    //   initialDealerCards: function() {
    //     for (let i = 0; i < 1; i++){  
    //       cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop());
    //     }
    //     // player 1 cards updated 
    //     this.updateDealerCards();
    // },


    initialDealDealer: function (){
      for(let i = 0; i <2; i++ ){
     cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
      
  }
  let html1 = '<ul>';
  for (let i = 0; i < cards.dealerCards.length; i++){
    
   html1 += `<li>${cards.dealerCards[i]}</li>`        
  }

  html1 = html1 + '</ul>'
  document.getElementById('dealersCards').innerHTML = html1
  cards.dealerCardsTotal;
    
  this.updateDealerCards()
  },
  
    // setTimeout(function() {alert('BUSTED! Give us your money!!')} , 100)
  
      
      
    updateDealerCards: function (){
        let html1 = `<ul>`;
        for (let i = 0; i < cards.dealerCards.length; i++) {
          html1 += `<li>${cards.dealerCards[i]}</li>`
  
        }
        html1 += `</ul>`;
        document.getElementById('dealersCards').innerHTML = html1;
        this.totalDealerCards();
          
      },

      dealerHitMethod : function ()  {
      for(let i = 0; i <1; i++ ){
        if (cards.dealerCardsTotal <= 20)
        cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
         
     }
}
  } 
cardMethod.initialDeal()

}