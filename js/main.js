// const svg = document.querySelectorAll("#jumbotron svg path");
// for (let i = 0; i < svg.length; i++) {
//   console.info(svg[i].getTotalLength());
// }

// menu btn
const nav = document.getElementsByTagName("nav")[0];
const hamBtn = document.querySelector(".hamBtn");
const navbar = document.querySelector(".navbar");
hamBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// scroll dan lakukan perubahan pada background nav pada kondisi media query smartphone view
let mWidth = window.matchMedia("(max-width: 650px)");
function scrollChange(mWidth) {
  if (mWidth.matches) {
    if (window.scrollY > 5) {
      nav.classList.add("show");
    } else {
      nav.classList.remove("show");
    }
  }
}

window.addEventListener("scroll", () => {
  scrollChange(mWidth);
});

// Tombol Lihat Takjil
const checkTakjil = document.querySelectorAll(".card button");
// destructuring by name
const [
  btnEla,
  btnFitriyana,
  btnFitri,
  btnYuyuh,
  btnDedeh,
  btnArni,
  btnKana,
  btnVera,
  btnShanti,
  btnLena,
] = checkTakjil;

// Detail Menu
const detailMenu = document.querySelector(".detail-menu");
const detailMenuList = document.querySelector(".detail-menu figcaption");
const detailMenuLink = document.querySelector(".detail-menu figcaption a");
const detailButton = document.querySelector(".detail-menu figcaption button");

// Menu Inside
const seller = document.querySelector(".detail-menu figcaption h3 .seller");
const menuInside = document.querySelector(
  ".detail-menu figcaption article .menu"
);
const priceInside = document.querySelector(
  ".detail-menu figcaption article .price"
);

// function menu detail
function cekDetail() {
  detailMenu.classList.add("popup");
  detailMenuList.classList.add("popup");
}
function closeDetail() {
  detailMenu.classList.remove("popup");
  setTimeout(() => {
    detailMenuList.classList.remove("popup");
  }, 100);
}

// close buttin detail
detailButton.onclick = closeDetail;

// OOP Menu
class Menu {
  constructor(namaPenjual, harga) {
    this.namaPenjual = namaPenjual;
    this.menu = [];
    this.harga = harga;
    this.link = null;
  }
  generateMenu() {
    seller.innerHTML = this.namaPenjual;
    menuInside.innerHTML = this.menu;
    priceInside.innerHTML = this.harga;
    priceInside.style.fontWeight = "600";
    detailMenuLink.setAttribute("href", this.link);
  }
}

// instance object
{
  // Ela
  btnEla.addEventListener("click", () => {
    const ela = new Menu("ela", "5 / 4pcs");
    ela.menu = ["karoket", " bakwan", " Lontong / Combro"];
    ela.link =
      "https://api.whatsapp.com/send/?phone=6281292372699&text=Hi,%20Teh%20Ela.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0AKaroket :%0ABakwan :%0ALontong/Combro:";
    ela.generateMenu();
  });
}

{
  // Fitriyana
  btnFitriyana.addEventListener("click", () => {
    const fitriyana = new Menu("Fitriyana", "Mulai 2K");
    fitriyana.menu = [
      "risol mayo",
      " sosis solo",
      " macaroni scotel",
      " Kue Gabin",
    ];
    fitriyana.link =
      "https://api.whatsapp.com/send/?phone=6281286448417&text=Hi,%20Teh%20Fitriyana.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ARisoles Mayo :%0ASosis Solo%0AMacaroni Schotel:%0AKue Gabin:";
    fitriyana.generateMenu();
  });
}

{
  // Fitri
  btnFitri.addEventListener("click", () => {
    const fitri = new Menu("fitri", "Mulai 2K");
    fitri.menu = ["risol sayuran", " tahu pedas", " piscok", " ceker pedas"];
    fitri.link =
      "https://api.whatsapp.com/send/?phone=6285890590402&text=Hi,%20Teh%20Fitri.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ARisoles Sayur :%0ATahu Pedas :%0APiscok / Pisang Pasir:";
    fitri.generateMenu();
  });
}

{
  // Yuyuh
  btnYuyuh.addEventListener("click", () => {
    const yuyuh = new Menu("yuyuh", "Mulai 2K");
    yuyuh.menu = ["Pastel", " Lumpia Tahu", " Kolak Pisang"];
    yuyuh.link =
      "https://api.whatsapp.com/send/?phone=6285775805919&text=Hi,%20Teh%20Yuyuh.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0APastel :%0ALumpia Tahu :%0AKolak Pisang :";
    yuyuh.generateMenu();
  });
}

{
  // Dedeh
  btnDedeh.addEventListener("click", () => {
    const dedeh = new Menu("dedeh", "Mulai 5K");
    dedeh.menu = ["Bubur Sum-Sum", " Mie Glosor", " Kolak Candil Ubi"];
    dedeh.link =
      "https://api.whatsapp.com/send/?phone=6281296619949&text=Hi,%20Teh%20Dedeh.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ABubur Sum-sum :%0AEs Buah :%0ACandil Ubi :";
    dedeh.generateMenu();
  });
}

{
  // Arni
  btnArni.addEventListener("click", () => {
    const arni = new Menu("arni", "Mulai 2K");
    arni.menu = ["kolak", " Es buah", " pastel", " aneka gorengan"];
    arni.link =
      "https://api.whatsapp.com/send/?phone=6285773201798&text=Hi,%20Teh%20Arni.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0AKolak :%0AEs Buah :%0ARisoles :%0APastel :%0AAneka Gorengan:";
    arni.generateMenu();
  });
}

{
  // Kana
  btnKana.addEventListener("click", () => {
    const kana = new Menu("kana", "Mulai 2K");
    kana.menu = ["Sate Cilok", " Sate Kikil", "Puding Stik Keju"];
    kana.link =
      "https://api.whatsapp.com/send/?phone=6289608706983&text=Hi,%20Teh%20Kana.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ASate Cilok :%0ASate Kikil :%0APuding Stik Keju :";
    kana.generateMenu();
  });
}

{
  // Vera
  btnVera.addEventListener("click", () => {
    const vera = new Menu("vera", "Mulai 3K");
    vera.menu = ["Aneka Roti"];
    vera.link =
      "https://api.whatsapp.com/send/?phone=628569023310&text=Hi,%20Teh%20Vera.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ARoti :";
    vera.generateMenu();
  });
}

{
  // Shanti
  btnShanti.addEventListener("click", () => {
    const shanti = new Menu("shanti", "Mulai 2K");
    shanti.menu = [
      "Tongkol Balado",
      " Sate Jengkol",
      " Pepes Ayam",
      " Es Buah",
    ];
    shanti.link =
      "https://api.whatsapp.com/send/?phone=6289636172466&text=Hi,%20Teh%20Shanti.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ATongkol Balado :%0ASate Jengkol :%0APepes Ayam :%0AEs Buah :%0AAneka Puding :";
    shanti.generateMenu();
  });
}

{
  // Lena
  btnLena.addEventListener("click", () => {
    const lena = new Menu("lena", "Mulai 5K");
    lena.menu = [
      "brownis lumer",
      " bitterballen keju",
      " dumpling ayam",
      " es nyoklat",
      " ayam bakar marapi",
    ];
    lena.link =
      "https://api.whatsapp.com/send/?phone=6285156855313&text=Hi,%20Teh%20Lena.%0ASaya%20Mau%20Pesan%20Takjilnya%20.%0ABrownis Lumer :%0ABitterballen Keju :%0ADumpling Ayam :%0AEs Nyoklat Toping :%0AAyam Bakar Merapi :";
    lena.generateMenu();
  });
}
