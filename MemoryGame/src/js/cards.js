class Cards {
  constructor(id, name, url) {
    this.id = id;
    this.imgUrl = url;
    this.name = name;
    this.wasClicked = false;
  }
  click() {
    this.wasClicked = true;
  }
}

const scooby = new Cards(
  101,
  "Scooby",
  "https://th.bing.com/th/id/OIP.rGxjUInZHLXxx6cam3m6dgHaLH?rs=1&pid=ImgDetMain"
);
const shaggy = new Cards(
  102,
  "Shaggy",
  "https://i5.walmartimages.com/asr/c37c4605-698b-4b43-9cc5-bcd54bdc4955.c118c5fcf011ccd328ad09e2c283cbc5.jpeg"
);
const fred = new Cards(
  103,
  "Fred",
  "https://th.bing.com/th/id/OIP.Lzj0jjNrYWuCehTKlTBvoAHaHa?rs=1&pid=ImgDetMain"
);
const daphne = new Cards(
  104,
  "Daphne",
  "https://www.writeups.org/wp-content/uploads/Daphne-Scooby-Doo.jpg"
);
const velma = new Cards(
  105,
  "Velma",
  "https://th.bing.com/th/id/R.32ed831eec2c518869ee9b61a2aa6ee1?rik=8pjmNzcHfb6U0g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-4mUeETj_D1A%2fT9DHoAv0LRI%2fAAAAAAAAEd0%2fI4s72xqvZnE%2fs1600%2fwalt_disney_scooby_doo_velma_characters_wallpaper_6.jpg&ehk=J6LWhDwqnTTAt%2fAoSRWocvnJSm%2fqYsnqzrEFPZNbtj8%3d&risl=&pid=ImgRaw&r=0"
);
const ghostCreeper = new Cards(
  106,
  "The Creeper",
  "https://i.pinimg.com/736x/da/3f/be/da3fbe2cda9ab1278fd8bc33420f239f--scooby-doo-creeper.jpg"
);
const ghostClown = new Cards(
  107,
  "The Ghost Clown",
  "https://th.bing.com/th/id/OIP.Wt1wE2BFMueG5GaxGMDidQHaKo?rs=1&pid=ImgDetMain"
);
const ghostHeadless = new Cards(
  108,
  "The Headless Horseman",
  " https://th.bing.com/th/id/OIP.mEZJ9Ft4BWBIyVjGlSS7FwHaMZ?rs=1&pid=ImgDetMain"
);

const allCards = [
  scooby,
  shaggy,
  fred,
  daphne,
  velma,
  ghostCreeper,
  ghostClown,
  ghostHeadless,
];

export { allCards };
