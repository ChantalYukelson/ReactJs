const products = [
    {id: '1', name: 'Camisas', price:15000, category: 'Ropa', img: 'https://ae01.alicdn.com/kf/S537433d8a897490a8a08d8bd0e759d4aD/Camisa-de-vestir-a-la-moda-para-hombre-camisa-de-manga-larga-sin-hierro-antiarrugas-el.jpg_Q90.jpg_.webp', stock: 50, description:'Camisas elegantes y laborales de muchos colores para hombre'},
    {id: '2', name: "Pantalones", price:20000, category: 'Ropa', img: 'https://i.pinimg.com/550x/4c/5a/93/4c5a9395b035495bdb2a7af7af23d28a.jpg', stock: 50, description:'Pantalones elegantes y laborales de muchos colores para hombre'},
    {id: '3', name: "Zapatos", price:40000, category: 'Ropa',   img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/118/233/products/rej0850ne-9e36cdb0bd52613ce716799283630224-640-0.webp', stock: 50, description:'Zapatos elegantes y comodos para hombre'},
    {id: '4', name: "Cinturones", price:8000, category: 'Ropa',  img: 'https://http2.mlstatic.com/D_NQ_NP_813284-MLA52667697974_112022-O.jpg', stock: 50, description:'Cinturones elegantes para hombre'},
    {id: '5', name: "Ropa elegante", price:80000, category: 'Ropa',  img: 'https://m.media-amazon.com/images/I/615GdLm+QwL._AC_UX522_.jpg', stock: 50, description:'Trajes para eventos formales'},
    {id: '6', name: "Tapados", price:60000, category: 'Ropa',  img: 'https://ae01.alicdn.com/kf/HTB1d3KhNXXXXXc8aXXXq6xXFXXXC.jpg', stock: 50, description:'Tapados formales y abrigados para el invierno'},
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};
