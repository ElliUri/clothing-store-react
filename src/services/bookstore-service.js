

export default class BookStoreService {
    data =  [
        {
            id: 1, 
            title: "Production-Ready Microservices",
            author: "Susan J. Fowler",
            price: 32,
            coverImage: "https://www.oreilly.com/api/v2/epubs/9781491965962/files/assets/cover.png",
        },
        {
            id: 2,
            title: "Release It!",
            author: "Micheal T. Nygard",
            price: 45,
            coverImage: "https://m.media-amazon.com/images/I/41r+60K7UjL._AC_UF1000,1000_QL80_.jpg",
        }
    ]
    getBooks() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
            reject(new Error('something bad happend'))  
            } else {
                resolve(this.data) 
             }
            }, 700)
        })
    }
}