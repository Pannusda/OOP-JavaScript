class Book{
constructor(title,author){
    this.title=title
    this.author=author
    this.isAvailable=true
}
borrow(){
    if(this.isAvailable==true){
        console.log('Processed borrowing completely')
        this.isAvailable=false   
    }else{
        console.log('The book is not available to borrow right now.')
    }

}
return(){
    if(this.isAvailable==false){
        this.isAvailable=true
        console.log('The book was returned completely')
    }else{
        console.log('This book has been already in the library')
    }
    
}
}
class Library{
    books=[]
    addBook(book){
        this.books.push(book)
    }
    listAvailableBooks(){
        let n=0
        this.books.forEach(booksForEach=>{
            if(booksForEach.isAvailable==true){
                console.log(booksForEach.title,'by',booksForEach.author)
                n++
            }
        })
        if(n==0){console.log('No available book right now')}
    }
    findBookByTitle(title){
        let find_book
        this.books.find(findBook=>{
            if(findBook.title===title){
                find_book=findBook
            }
        })
        return find_book
    }
}
let library=new Library
let book1=new Book('1984','George Orwell')
let book2=new Book("To Kill a Mockingbird", "Harper Lee")
let book3=new Book('The Seven Husbands Of Evelyn Hugo','Taylor Jenkins')
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
let book=library.findBookByTitle('1984')
book.borrow()
book2.borrow()
book2.return()
book3.return()
library.listAvailableBooks()