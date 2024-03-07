const products = [
    { 
        id: '1', 
        name: 'pretal camuflado', 
        price: 1000, 
        category: 'pretal', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 4, 
        description:'Descripción del pretal camuflado'
    },
    { 
        id: '2', 
        name: 'collar warning', 
        price: 800, category: 'collar', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/2783879c77908aa245eeb313696118a81ea1eb036e4a39ff0bfd908d2d6c1aca39583.jpeg',  
        stock: 8, 
        description:'Descripcion de collar warning'
    },
    { 
        id: '3', 
        name: 'Correa rosa', 
        price: 1200, 
        category: 'correa', 
        img:'https://acdn.mitiendanube.com/stores/001/936/362/products/20220602_1937001-8e36051ef9206257e216551684285118-240-0.jpg', 
        stock: 0, 
        description:'Descripcion de correa rosa'
    },
    { 
        id: '4', 
        name: 'pretal camuflado', 
        price: 1000, 
        category: 'pretal', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 2, 
        description:'Descripción del pretal camuflado'
    },
    { 
        id: '5', 
        name: 'collar warning', 
        price: 800, category: 'collar', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/2783879c77908aa245eeb313696118a81ea1eb036e4a39ff0bfd908d2d6c1aca39583.jpeg',  
        stock: 7, 
        description:'Descripcion de collar warning'
    },
    { 
        id: '6', 
        name: 'Correa rosa', 
        price: 1200, 
        category: 'correa', 
        img:'https://acdn.mitiendanube.com/stores/001/936/362/products/20220602_1937001-8e36051ef9206257e216551684285118-240-0.jpg', 
        stock: 1, 
        description:'Descripcion de correa rosa'
    },
    { 
        id: '7', 
        name: 'pretal camuflado', 
        price: 1000, 
        category: 'pretal', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 11, 
        description:'Descripción del pretal camuflado'
    },
    { 
        id: '8', 
        name: 'collar warning', 
        price: 800, category: 'collar', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/2783879c77908aa245eeb313696118a81ea1eb036e4a39ff0bfd908d2d6c1aca39583.jpeg',  
        stock: 0, 
        description:'Descripcion de collar warning'
    },
    { 
        id: '9', 
        name: 'Correa rosa', 
        price: 1200, 
        category: 'correa', 
        img:'https://acdn.mitiendanube.com/stores/001/936/362/products/20220602_1937001-8e36051ef9206257e216551684285118-240-0.jpg', 
        stock: 6, 
        description:'Descripcion de correa rosa'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}