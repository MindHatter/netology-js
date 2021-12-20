class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(new_state){
        this._state = new_state;
        if (this._state > 100){
            this._state = 100;
        } else if (this._state < 0){
            this._state = 0;
        }
    }

    get state(){
        return this._state;
    }

    fix() {
        this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
        this.author;
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book)
        }
    }

    findBookBy(type, value){
        let result = this.books.find((x) => x[type] === value);
        return result ? result : null
    }

    giveBookByName(bookName){
        let result = this.findBookBy("name", bookName);
        if (result){
            this.books.splice(this.books.indexOf(result));
        } else{
            result = null;
        }
        return result
    }
}

