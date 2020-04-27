var app = new Vue({
  el: "#app",
  data: {
    clickedIndex: [],
    styleClass: {
      flip: false,
    },
    cards: [
      {
        id: 1,
        class: "fa fa-diamond",
      },
      {
        id: 2,
        class: "fa fa-paper-plane-o",
      },
      {
        id: 3,
        class: "fa fa-anchor",
      },
      {
        id: 4,
        class: "fa fa-bolt",
      },
      {
        id: 5,
        class: "fa fa-cube",
      },
      {
        id: 6,
        class: "fa fa-anchor",
      },
      {
        id: 7,
        class: "fa fa-leaf",
      },
      {
        id: 8,
        class: "fa fa-bicycle",
      },
      {
        id: 9,
        class: "fa fa-diamond",
      },
      {
        id: 10,
        class: "fa fa-bomb",
      },
      {
        id: 11,
        class: "fa fa-leaf",
      },
      {
        id: 12,
        class: "fa fa-bolt",
      },
      {
        id: 13,
        class: "fa fa-bicycle",
      },
      {
        id: 14,
        class: "fa fa-paper-plane-o",
      },
      {
        id: 15,
        class: "fa fa-cube",
      },
      {
        id: 16,
        class: "fa fa-bomb",
      },
    ],
  },
  methods: {
    showClass: function (id) {
      if (this.clickedIndex.length !== 2) {
        this.clickedIndex.push(id);
      }
      var matches = false;
      if (this.clickedIndex.length === 2) {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < this.cards.length; j++) {
            if (this.clickedIndex[i] === this.cards[i].id) {
              console.log(true);
              matches = true;
              break;
            } else {
              console.log(false);
              matches = false;
            }
          }
        }
      }
      if (this.clickedIndex.length === 2) {
        if (matches) {
          console.log("true");
        } else {
          console.log("false");
        }
      }
      this.styleClass.flip = id;
    },
  },
});
