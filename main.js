const app = Vue.createApp({
  // Data
  data() {
    return {
      product: "Pizza",
      type: "Orientale",
      price: 12,
      image: "assets/images/tomates.jpg",
      sale: true,
      notAvailable: true,
      ingredients: [
        "Olives",
        "Poulet roti",
        "Bacon",
        "Poivrons",
        "Champignons",
        "Mozzarella",
        "Oeuf",
        "Piment",
      ],
      sauces: [
        {
          id: 1001,
          type: "Sauce Tomate",
          color: "#dfe123",
          image: "assets/images/sauce_tomate.jpg",
        },
        {
          id: 1002,
          type: "Crème fraîche",
          color: "#db4006",
          image: "assets/images/creme_fraiche.jpg",
        },
      ],
      energy: {
        Kcal: 242,
        Glucides: 27.99,
        Fibres: 1.57,
        Proteines: 9.62,
        Sel: 11,
      },
      totalPrice: 0,
      nbProduct: 0,
      promo: "",
    };
  },

  // Methods
  methods: {
    addProduct() {
      if (this.sale) {
        this.nbProduct += 1;
        this.totalPrice = (this.price - 5) * this.nbProduct;
      } else {
        this.nbProduct += 1;
        this.totalPrice = this.price * this.nbProduct;
      }
    },

    updateImage(newLinkImage) {
      this.image = newLinkImage;
    },
  },

  //  Computed ou propiété calculée
  computed: {
    title() {
      return this.product + " " + this.type;
    },
  },
});
