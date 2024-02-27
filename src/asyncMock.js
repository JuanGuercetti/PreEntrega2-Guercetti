const products = [
    { 
        id: '1', 
        name: 'pretal camuflado', 
        price: 1000, 
        category: 'pretal', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 10, 
        description:'Descripción del pretal camuflado'
    },
    { 
        id: '2', 
        name: 'collar warning', 
        price: 800, category: 'collar', 
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', 
        stock: 16, 
        description:'Descripcion de collar warning'
    },
    { 
        id: '3', 
        name: 'Correa rosa', 
        price: 1200, 
        category: 'correa', 
        img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
        stock: 0, 
        description:'Descripcion de correa rosa'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}