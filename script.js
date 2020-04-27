var app = new Vue({
  el: "#app",
  data: {
    flipCard: false,
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
      console.log("matched");
    },
    unflipCard: function () {
      console.log("not match");
      setTimeout(
        function () {
          this.clickedCard.firstCard.classList.remove("flip");
          this.clickedCard.secondCard.classList.remove("flip");
        }.bind(this),
        1000
      );
    },
    showClass: function (card, event) {
      console.log(event.currentTarget.dataset.value);
      event.currentTarget.classList.add("flip");
      if (!this.flipCard) {
        this.flipCard = true;
        this.clickedCard.firstCard = event.currentTarget;
      } else {
        this.flipCard = false;
        this.clickedCard.secondCard = event.currentTarget;
        console.log(this.clickedCard.secondCard);
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
          this.unflipCard();
        }
      }
    },
  },
});
