var app = new Vue({
  el: "#app",
  data: {
    clickCount: 0,
    isClickable: true,
    firstCard: "",
    secondCard: "",
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
    showClass: function (card, event) {
      if (!this.isClickable) {
        console.log("click after 1 second");
        return;
      }
      event.currentTarget.classList.add("flip");
      if (this.clickCount == 0) {
        this.clickCount = 1;
        this.firstCard = event.currentTarget;
        this.firstCard.classList.add("flip");
      }
      if (this.clickCount == 1) {
        this.isClickable = false;
        this.secondCard = event.currentTarget;
        if (this.firstCard.dataset.value === this.secondCard.dataset.value) {
          console.log("matched");
        } else {
          setTimeout(
            function () {
              this.firstCard.classList.remove("flip");
              this.secondCard.classList.remove("flip");
              this.isClickable = true;
            }.bind(this),
            1000
          );
        }
      }
    },
  },
});
