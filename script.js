var app = new Vue({
  el: "#app",
  data: {
    flipCard: false,
    canClick: true,
    clickedCard: {
      firstCard: "",
      secondCard: "",
    },
    clickedIndex: [],
    styleClass: {
      flip: false,
    },
    cards: [
      {
        id: 1,
        class: "fa fa-diamond",
        dataKind: "diamond",
      },
      {
        id: 2,
        class: "fa fa-paper-plane-o",
        dataKind: "plane",
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
        id: 5,
        class: "fa fa-cube",
        dataKind: "cube",
      },
      {
        id: 6,
        class: "fa fa-anchor",
        dataKind: "anchor",
      },
      {
        id: 7,
        class: "fa fa-leaf",
        dataKind: "leaf",
      },
      {
        id: 8,
        class: "fa fa-bicycle",
        dataKind: "bicycle",
      },
      {
        id: 9,
        class: "fa fa-diamond",
        dataKind: "diamond",
      },
      {
        id: 10,
        class: "fa fa-bomb",
        dataKind: "bomb",
      },
      {
        id: 11,
        class: "fa fa-leaf",
        dataKind: "leaf",
      },
      {
        id: 12,
        class: "fa fa-bolt",
        dataKind: "bolt",
      },
      {
        id: 13,
        class: "fa fa-bicycle",
        dataKind: "bicycle",
      },
      {
        id: 14,
        class: "fa fa-paper-plane-o",
        dataKind: "plane",
      },
      {
        id: 15,
        class: "fa fa-cube",
        dataKind: "cube",
      },
      {
        id: 16,
        class: "fa fa-bomb",
        dataKind: "bomb",
      },
    ],
  },
  methods: {
    matchCard: function () {
      this.canClick = true;
      console.log("matched");
    },
    unflipCard: function () {
      setTimeout(
        function () {
          this.clickedCard.firstCard.classList.remove("flip");
          this.clickedCard.secondCard.classList.remove("flip");
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
      if (!this.flipCard) {
        this.flipCard = true;
        this.clickedCard.firstCard = event.currentTarget;
      } else {
        this.canClick = false;
        this.flipCard = false;
        this.clickedCard.secondCard = event.currentTarget;
        if (
          this.clickedCard.firstCard.dataset.value ===
          this.clickedCard.secondCard.dataset.value
        ) {
          this.clickedCard.firstCard.parentNode.firstChild.classList.add(
            "match"
          );
          this.clickedCard.secondCard.parentNode.firstChild.classList.add(
            "match"
          );
          this.matchCard();
        } else {
          this.clickedCard.firstCard.parentNode.firstChild.classList.add(
            "unmatch"
          );
          this.clickedCard.secondCard.parentNode.firstChild.classList.add(
            "unmatch"
          );
          this.unflipCard();
        }
      }
    },
  },
  created() {
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
});
