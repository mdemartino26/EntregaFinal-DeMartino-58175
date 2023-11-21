const products = [
    {
        id: '1',
        name:'Drivers Licence',
        artist:'Olivia Rodrigo',
        price:'5000',
        category:'singles',
        img:'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f0/19/d6/f019d61e-6bd3-d936-1214-22b732083ef0/20UM1IM14285.rgb.jpg/1200x1200bb.jpg',
        stock: 30,
        descrip:'Drivers Licence single'
    }, 
    {
        id: '2',
        name:'Brutal Bucket Hat',
        artist:'Olivia Rodrigo',
        price:'4000',
        category:'merch',
        img:'https://helios-i.mashable.com/imagery/articles/05nwFFMqJ8Q2dKmXz2Dya7D/hero-image.fill.size_1200x1200.v1628795412.jpg',
        stock: 20,
        descrip:'Brutal Bucket Hat'
    }, 
    {
        id: '3',
        name:'Guts Album',
        artist:'Olivia Rodrigo',
        price:'4500',
        category:'discos',
        img:'https://awhspitch.com/wp-content/uploads/2023/09/Fzj1ehKaYAEp6ze.jpeg',
        stock: 50,
        descrip:'Guts'
    },
   
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductByCategory = (productCategory) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}