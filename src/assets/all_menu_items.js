import p1_img from '../assets/panner.avif'


let all_menu_items = [
  // Veg
  { id: 1, name: "Paneer Butter Masala", category: "veg", image: p1_img, new_price: 50.0, old_price: 80.5 },
  { id: 2, name: "Veg Biryani", category: "veg", image: "https://www.pngitem.com/pimgs/m/152-1522450_biryani-png-download-veg-biryani-images-hd-transparent.png", new_price: 50.0, old_price: 80.5 },
  { id: 3, name: "Chole Bhature", category: "veg", image: "https://static.vecteezy.com/system/resources/thumbnails/036/627/131/small_2x/ai-generated-realistic-chole-bhature-on-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 4, name: "Idli Sambar", category: "veg", image: "https://i.pinimg.com/originals/e4/b2/c2/e4b2c211c585e34088664239cf40902d.png", new_price: 50.0, old_price: 80.5 },
  { id: 5, name: "Masala Dosa", category: "veg", image: "https://png.pngtree.com/png-clipart/20250227/original/pngtree-food-masala-dosa-png-image_20519539.png", new_price: 50.0, old_price: 80.5 },
  { id: 6, name: "Pav Bhaji", category: "veg", image: "https://tse2.mm.bing.net/th/id/OIP.Ab53gzedUktO-4mCVLdgWQHaE-?w=860&h=577&rs=1&pid=ImgDetMain&o=7&rm=3", new_price: 50.0, old_price: 80.5 },
  { id: 7, name: "Aloo Paratha", category: "veg", image: "https://static.vecteezy.com/system/resources/previews/049/178/253/non_2x/aloo-paratha-on-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 8, name: "Rajma Chawal", category: "veg", image: "https://as2.ftcdn.net/v2/jpg/06/85/13/19/1000_F_685131937_ycRIGGv2So0YFgiYb8wu6lfZP1s8JsgN.jpg", new_price: 50.0, old_price: 80.5 },

  // Non-Veg
  { id: 9, name: "Chicken Curry", category: "nonveg", image: "https://www.priyom.in/wp-content/uploads/2022/05/recipe-6.png", new_price: 50.0, old_price: 80.5 },
  { id: 10, name: "Chicken Biryani", category: "nonveg", image: "https://static.vecteezy.com/system/resources/previews/027/144/484/non_2x/delicious-chicken-biryani-isolated-on-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 11, name: "Fish Curry", category: "nonveg", image: "https://www.priyom.in/wp-content/uploads/2022/05/recipe-3.png", new_price: 50.0, old_price: 80.5 },
  { id: 12, name: "Egg Curry", category: "nonveg", image: "https://tse2.mm.bing.net/th/id/OIP.izIa1H1D4G0aJUp_lWvI3wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", new_price: 50.0, old_price: 80.5 },
  { id: 13, name: "Mutton Rogan Josh", category: "nonveg", image: "https://static.vecteezy.com/system/resources/previews/047/239/051/non_2x/mutton-rogan-josh-with-tender-lamb-in-a-spiced-curry-served-on-a-transparent-glass-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 14, name: "Prawn Curry", category: "nonveg", image: "https://static.vecteezy.com/system/resources/previews/048/937/010/non_2x/prawn-curry-with-coconut-milk-and-fresh-prawns-served-in-a-transparent-glass-dish-coastal-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 15, name: "Grilled Chicken", category: "nonveg", image: "https://static.vecteezy.com/system/resources/previews/021/665/576/non_2x/delicious-grilled-chicken-cutout-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 16, name: "Butter Chicken", category: "nonveg", image: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-butter-chicken-halal-food-png-image_13370852.png", new_price: 50.0, old_price: 80.5 },

  // Desserts
  { id: 17, name: "Gulab Jamun", category: "desserts", image: "https://static.vecteezy.com/system/resources/previews/051/753/389/non_2x/delicious-gulab-jamun-on-a-plat-isolated-on-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 18, name: "Rasgulla", category: "desserts", image: "https://img.freepik.com/premium-photo/spongy-rasgulla_57665-24151.jpg", new_price: 50.0, old_price: 80.5 },
  { id: 19, name: "Kheer", category: "desserts", image: "https://static.vecteezy.com/system/resources/previews/041/925/336/non_2x/ai-generated-tasty-creamy-kheer-isolated-on-transparent-background-free-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 20, name: "Halwa", category: "desserts", image: "https://img.freepik.com/premium-photo/exquisite-halwa_895561-11089.jpg", new_price: 50.0, old_price: 80.5 },
  { id: 21, name: "Jalebi", category: "desserts", image: "https://tse1.mm.bing.net/th/id/OIP.GwOJguhGNjQQmvS33hgVTAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", new_price: 50.0, old_price: 80.5 },
  { id: 22, name: "Ice Cream", category: "desserts", image: "https://static.vecteezy.com/system/resources/previews/044/570/761/non_2x/assortment-of-colorful-ice-cream-scoops-in-waffle-cones-with-fresh-fruits-on-a-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 23, name: "Barfi", category: "desserts", image: "https://static.vecteezy.com/system/resources/previews/049/178/444/non_2x/barfi-sweet-on-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 24, name: "Laddu", category: "desserts", image: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-homemade-motichoor-laddoo-png-image_13370947.png", new_price: 50.0, old_price: 80.5 },

  // Beverages
  { id: 25, name: "Mango Lassi", category: "beverages", image: "https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-mango-lassi-recipe-png-image_14110128.png", new_price: 50.0, old_price: 80.5 },
  { id: 26, name: "Masala Chai", category: "beverages", image: "https://static.vecteezy.com/system/resources/previews/042/573/884/non_2x/ai-generated-tasty-indian-masala-chai-with-spices-isolated-on-transparent-background-png.png", new_price: 50.0, old_price: 80.5 },
  { id: 27, name: "Filter Coffee", category: "beverages", image: "https://tse4.mm.bing.net/th/id/OIP.qwLTMfn4gxioq5krQ7AzwAHaFj?w=860&h=645&rs=1&pid=ImgDetMain&o=7&rm=3e", new_price: 50.0, old_price: 80.5 },
  { id: 28, name: "Lemonade", category: "beverages", image: "https://tse3.mm.bing.net/th/id/OIP.-tWDKhbnq9Tz_VL6M4XYwgHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3", new_price: 50.0, old_price: 80.5 },
  { id: 29, name: "Buttermilk", category: "beverages", image: "https://tse4.mm.bing.net/th/id/OIP.J7g9W5H08xgyvzMW_RkdqQHaHo?w=577&h=595&rs=1&pid=ImgDetMain&o=7&rm=3", new_price: 50.0, old_price: 80.5 },
  { id: 30, name: "Fruit Juice", category: "beverages", image: "https://png.pngtree.com/png-clipart/20231018/original/pngtree-fruit-juice-transpreant-background-png-image_13354092.png", new_price: 50.0, old_price: 80.5 },
  { id: 31, name: "Soda", category: "beverages", image: "https://tse4.mm.bing.net/th/id/OIP.8kXO7n6HLijcp2gfr4KwvgHaIN?rs=1&pid=ImgDetMain&o=7&rm=3a", new_price: 50.0, old_price: 80.5 },
  { id: 32, name: "Iced Tea", category: "beverages", image: "https://jabal-coffee.com/wp-content/uploads/2024/04/6-TEA-Iced-Tea.jpg", new_price: 50.0, old_price: 80.5 },
];

export default all_menu_items;
