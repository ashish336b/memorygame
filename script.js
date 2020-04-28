var app = new Vue({
  el: "#app",
  data: {
    flipCard: false,
    canClick: true,
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
      var array = this.cards;
      var m = array.length,
        t,
        i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    },
    closeModel: function () {
      this.modelBox.isVisible = false;
    },
    resetGame: function () {
      this.styleClass.match = [];
      this.styleClass.flip = false;
      this.suffleCards();
      if (this.modelBox.isVisible) {
        this.closeModel();
      }
    },
    matchCard: function () {
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
    showClass: function (card, event) {
      if (!this.canClick) {
        return;
      }
      event.currentTarget.classList.add("flip");
      this.styleClass.flip = card.id;
      if (!this.flipCard) {
        //first click
        this.flipCard = true;
        this.clickedIndex.push(card.id);
        this.clickedCard.firstCard = event.currentTarget;
      } else {
        //cannot click on one card twice
        if (this.clickedIndex[0] === card.id) {
          return;
        }
        //clicked index should be unique and unique
        if (!this.clickedIndex.indexOf(card.id) === -1) {
          this.clickedCard = [];
          return;
        }
        //second click
        this.canClick = false;
        this.flipCard = false;
        this.clickedIndex.push(card.id);

        this.clickedCard.secondCard = event.currentTarget;
        if (
          this.clickedCard.firstCard.dataset.value ===
          this.clickedCard.secondCard.dataset.value
        ) {
          //if both clicks matches
          //check for unique matched index
          if (this.styleClass.match.indexOf(...this.clickedIndex) === -1) {
            this.styleClass.match.push(...this.clickedIndex);
          } else {
            this.clickedIndex = [];
          }
          this.matchCard();
        } else {
          //if not matches
          this.unflipCard();
        }
      }
    },
  },
  created() {
    // this.suffleCards();
  },
});
