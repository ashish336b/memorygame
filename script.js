var app = new Vue({
  el: "#app",
  data: {
    flipCard: false,
    canClick: true,
    moveCount: 0,
    clickedIndex: [],
    clickedCard: {
      firstCard: "",
      secondCard: "",
    },
    modelBox: {
      isVisible: false,
      isModelClosed: true,
    },
    styleClass: {
      flip: false,
      match: [],
    },
    cards: [
      {
        id: 9,
        class: "fa fa-diamond",
        dataKind: "diamond",
      },
      {
        id: 1,
        class: "fa fa-diamond",
        dataKind: "diamond",
      },
      {
        id: 14,
        class: "fa fa-paper-plane-o",
        dataKind: "plane",
      },
      {
        id: 2,
        class: "fa fa-paper-plane-o",
        dataKind: "plane",
      },
      {
        id: 6,
        class: "fa fa-anchor",
        dataKind: "anchor",
      },
      {
        id: 3,
        class: "fa fa-anchor",
        dataKind: "anchor",
      },
      {
        id: 4,
        class: "fa fa-bolt",
        dataKind: "bolt",
      },
      {
        id: 12,
        class: "fa fa-bolt",
        dataKind: "bolt",
      },
      {
        id: 5,
        class: "fa fa-cube",
        dataKind: "cube",
      },
      {
        id: 15,
        class: "fa fa-cube",
        dataKind: "cube",
      },
      {
        id: 7,
        class: "fa fa-leaf",
        dataKind: "leaf",
      },
      {
        id: 11,
        class: "fa fa-leaf",
        dataKind: "leaf",
      },
      {
        id: 10,
        class: "fa fa-bomb",
        dataKind: "bomb",
      },
      {
        id: 16,
        class: "fa fa-bomb",
        dataKind: "bomb",
      },
      {
        id: 13,
        class: "fa fa-bicycle",
        dataKind: "bicycle",
      },
      {
        id: 8,
        class: "fa fa-bicycle",
        dataKind: "bicycle",
      },
    ],
  },
  methods: {
    suffleCards: function () {
      var suffledArray = this.cards;
      var arrayLength = suffledArray.length,
        t,
        i;
      while (arrayLength) {
        i = Math.floor(Math.random() * arrayLength--);
        t = suffledArray[arrayLength];
        suffledArray[arrayLength] = suffledArray[i];
        suffledArray[i] = t;
      }
    },
    closeModel: function () {
      this.modelBox.isVisible = false;
    },
    resetGame: function () {
      this.styleClass.match = [];
      this.clickedIndex = [];
      this.styleClass.flip = false;
      this.moveCount = 0;
      this.flipCard = false;
      this.suffleCards();
      if (this.modelBox.isVisible) {
        this.closeModel();
      }
    },
    matchCard: function () {
      this.styleClass.match.indexOf(...this.clickedIndex) === -1
        ? this.styleClass.match.push(...this.clickedIndex)
        : (this.clickedIndex = []);
      this.canClick = true;
      this.clickedIndex = [];
      if (this.styleClass.match.length === this.cards.length) {
        setTimeout(
          function () {
            this.modelBox.isVisible = true;
          }.bind(this),
          500
        );
      }
    },
    processFirstClickEvent: function (card, event) {
      this.flipCard = true;
      this.clickedIndex.push(card.id);
      this.clickedCard.firstCard = event.currentTarget;
    },
    processSecondClickEvent: function (card, event) {
      //cannot click on one card twice
      if (this.clickedIndex[0] === card.id) return;
      this.moveCount++;
      this.canClick = false;
      this.flipCard = false;
      this.clickedIndex.push(card.id);
      this.clickedCard.secondCard = event.currentTarget;
      //check if both cards matches
      this.clickedCard.firstCard.dataset.value ===
      this.clickedCard.secondCard.dataset.value
        ? this.matchCard()
        : this.unflipCard();
    },
    unflipCard: function () {
      setTimeout(
        function () {
          this.clickedIndex = [];
          this.styleClass.flip = false;
          this.canClick = true;
        }.bind(this),
        1000
      );
    },
    showCard: function (card, event) {
      //method that execute upon click
      if (!this.canClick) return;
      if (this.styleClass.match.includes(card.id)) return;
      this.styleClass.flip = card.id;
      return !this.flipCard
        ? this.processFirstClickEvent(card, event)
        : this.processSecondClickEvent(card, event);
    },
  },
  created() {
    this.suffleCards();
  },
});
