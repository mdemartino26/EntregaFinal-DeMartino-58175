const products = [
    {
        id: '1',
        name:'Emails I cant send',
        artist:'Sabrina Carpenter',
        price:'5000',
        genre:'pop',
        img:'https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf',
        stock: 30,
        descrip:'Emails I cant Send'
    }, 
    {
        id: '2',
        name:'Superache',
        artist:'Conan Gray',
        price:'4000',
        genre:'pop',
        img:'https://indiehoy.com/wp-content/uploads/2023/01/conan-gray-superache.jpg',
        stock: 20,
        descrip:'Superache'
    }, 
    {
        id: '3',
        name:'Guts',
        artist:'Olivia Rodrigo',
        price:'4500',
        genre:'pop',
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