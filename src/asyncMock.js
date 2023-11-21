const products = [
    {
        id: '1',
        name:'Can´t catch me now',
        artist:'Olivia Rodrigo',
        price:'5000',
        category:'singles',
        img:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Olivia_Rodrigo_-_Can%27t_Catch_Me_Now.png/220px-Olivia_Rodrigo_-_Can%27t_Catch_Me_Now.png',
        stock: 30,
        descrip:'Can´t catch me now single'
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