let books = [
  {
    name: "معماری کامپیوتر",
    price: 370000,
    author: "دکتر قدرت سپیدنام",
    description: "کتاب ارشد مجموعه مهندسی کامپیوتر",
    img: "https://www.gisoom.com/book/11142419/front/000/%DA%A9%D8%AA%D8%A7%D8%A8-%D9%85%D8%B9%D9%85%D8%A7%D8%B1%DB%8C-%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%D9%87%D8%A7%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1%DB%8C.jpg?size=290x&t=",
    id: "01",
  },
  {
    name: "اصول و مفاهیم پایه کامپیوتر",
    price: 150000,
    author: "محمد سعید احسانی, ناصر نعمت بخش",
    description: "این کتاب توسط جهاد دانشگاهی واحد اصفهان به نشر رسیده",
    img: "https://cdn.fidibo.com/phoenixpub/content/b6197ab4-8c74-4338-9e36-831e39978642/30d170dc-eb39-41f0-a326-8cd9dd582460.jpg?width=192",
    id: "02",
  },
  {
    name: "آموزش گام به گام اکسل 2019",
    price: 250000,
    author: "سپیده ذاکری, مهدی کوهستانی",
    description:
      "این کتاب توسط موسسه فرهنگی همری دیباگران تهران به فروش می رسد",
    img: "https://img.ketabrah.ir/img/l/9184414174175442.jpg",
    id: "03",
  },
  {
    name: "هوش تجاری",
    price: 310000,
    author: "حسین مهاجری, محمدجعفر تارخ",
    description: "این کتاب توسط دانشگاه صنعتی خواجه نصیرالدین طوسی نشر شده",
    img: "https://www.gisoom.com/book/1761265/front/000/%DA%A9%D8%AA%D8%A7%D8%A8-%D9%87%D9%88%D8%B4-%D8%AA%D8%AC%D8%A7%D8%B1%DB%8C-%D8%B1%D9%88%DB%8C%DA%A9%D8%B1%D8%AF%DB%8C-%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA%DB%8C.jpg?size=290x&t=",
    id: "04",
  },
  {
    name: "مبانی کامپیوتر و الگوریتم ها",
    price: 125000,
    author: "دکتر انیس کریم پور",
    description: "نشر علوم رایانه",
    img: "https://img.ketabrah.ir/img/l/4366977807775286.jpg",
    id: "05",
  },
];

export const getBooks = () => {
  return books;
};

export const getBook = (id) => {
  return books.find((book) => book.id == id);
};

export const deleteBook = (id) =>{
  books=books.filter(
    book=> book.id !== id
  )
}