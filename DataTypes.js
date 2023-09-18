/** 
@param {String} ID - String, Key of product 
@param {String} name - String , name
@param {String} description - String , brief description
@param {Number} price - Number(Float), price
@param {String} brand - String , name of brand 
@param {String[]} sizes - Array of string - ['XS', 'S', 'M', 'L', 'XL', 'XXL'] 
@param {String} activeSize - String , activeSize 
@param {Number} quantity - Number(Integer),quantity of products available 
@param {Date} date - Date{date(YYYY-MM-dd hh:mm:ss)}
@param {Reviews[]} reviews - Array Object of rewiews, see his commend block 
@param {String[]} images - Array of Strings */

function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images)
{
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;

    this.getID = function () {
        return this.ID;
    };

    this.setID = function (ID) {
        this.ID = ID;
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getDescription = function () {
        return this.description;
    };

    this.setDescription = function (description) {
        this.description = description;
    };

    this.getPrice = function () {
        return this.price;
    };

    this.setPrice = function (price) {
        this.price = price;
    };

    this.getBrand = function () {
        return this.brand;
    };

    this.setBrand = function (brand) {
        this.brand = brand;
    };

    this.getSizes = function () {
        return this.sizes;
    };

    this.setSizes = function (sizes) {
        this.sizes = sizes;
    };

    this.getActiveSize = function () {
        return this.activeSize;
    };

    this.setActiveSize = function (activeSize) {
        this.activeSize = activeSize;
    };

    this.getQuantity = function () {
        return this.quantity;
    };

    this.setQuantity = function (quantity) {
        this.quantity = quantity;
    };

    this.getDate = function () {
        return this.date;
    };

    this.setDate = function (date) {
        this.date = date;
    };

    this.getReviews = function () {
        return this.reviews;
    };

    this.setReviews = function (reviews) {
        this.reviews = reviews;
    };

    this.getImages = function () {
        return this.images;
    };

    this.setImages = function (images) {
        this.images = images;
    };

    this.getReviewByID = function (ID)
    {
        for (let i = 0; i < this.reviews.length; i++)
        {
            if (this.reviews[i].getReviewID() == ID)
            {
                return reviews[i];
            }
        }
    };

    this.getImage = function(image)
    {
        for (let i = 0; i < this.images.length; i++)
        {
            if (this.images[i] == image) {
                return images[i];
            }
        }
        return this.images[0];
    };

    this.addSize = function(size)
    {
        this.sizes.push(size);
    };

    this.deleteSize = function(key)
    {
        let count = -1;

        for (let i = 0; i < this.sizes.length; i++)
        {
            if (this.sizes[i] == key)
            {
                count = i;
            }    
        }
        if (count >= 0)
        {
            this.sizes.splice(count, 1);
        }
    };

    this.addReview = function(review)
    {
        this.reviews.push(review);
    };

    this.deleteReview = function (ID)
    {
        let count = -1;

        for (let i = 0; i < reviews.length; i++)
        {
            if (this.reviews[i].getReviewID() == ID)
            {
                count = i;  
            }
        }
        if (count >= 0)
        {
            this.reviews.splice(count, 1);
        }
    };

    this.getAverageRating = function ()
    {
        let summa = 0;
        let count = 0;
        
        for (let i = 0; i < this.reviews.length;i++)
        {
            let map = this.reviews[i].getReviewRating();
            for (let key in map)
            {
                let value = map[key];
                summa += value;
                count++;
            }
        }

        return +summa / count;
    };
}


/** 
@param {String} ID - String , Key of product 
@param {String} author - String , author's name 
@param {Date} date - Date{date(YYYY-MM-dd hh:mm:ss)}
@param {String} comment - String , comment
@param {Array} rating = Associate Array - rating['key']=value; 
key one of 'service', 'price', 'value', 'quality'
*/
function Reviews(ID, author, date, comment, rating)
{
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;

    this.getReviewID = function ()
    {
        return this.ID;
    }

    this.setReviewID = function(ID)
    {
        this.ID = ID;
    }

    this.getReviewAuthor = function ()
    {
        return this.author; 
    }

    this.setReviewAuthor = function (author)
    {
        this.author = author;
    }

    this.getReviewDate = function ()
    {
        return this.date;
    }

    this.setReviewDate = function (date)
    {
        this.date = date;
    }

    this.getReviewComment = function ()
    {
        return this.comment;
    }

    this.setReviewComment = function (comment)
    {
        this.comment = comment;
    }

    this.getReviewRating = function ()
    {
        return this.rating;
    }

    this.setReviewRating = function (rating)
    {
        this.rating = rating;
    }
}


/**
 * 
 * @param {Product []} products  - array of Products
 * @param {String} seach - text of seach 
 */
function searchProducts(products, seach)
{
    let finalArray = [];

    for (let i = 0; i < products.length; i++)
    {
        let seachName = products[i].getName().toLowerCase();
        let seachDescription = products[i].getDescription().toLowerCase();
        if (seachName.startsWith(seach.toLowerCase()))
        {
            finalArray.push(products[i]);
            continue;
        }
        if (seachDescription.includes(seach.toLowerCase()))
        {
            finalArray.push(products[i]);
            continue;
        }
    }

    return finalArray;
}

/**
 * 
 * @param {Product[]} products - array of Products
 * @param {String} sortRule - parametr of sort , can be "ID", "price" or "name" 
 */
function sortProducts(products, sortRule)
{
    if (sortRule == "ID")
    {
        products.sort(function (a, b) {

            if (a.getID() > b.getID())
            {
                return 1;
            }
            if (a.getID() < b.getID())
            {
                return -1;
            }
                return 0;
        });
    }

    else if (sortRule == "price")
    {
        products.sort(function (a, b)
        {
            return a.getPrice() - b.getPrice();
        });
    }

    else if (sortRule == "name")
    {
        products.sort(function (a, b) {
            if (a.getName() > b.getName()) {
                return 1;
            }
            if (a.getName() < b.getName()) {
                return -1;
            }
            return 0;
        });
    }

    return products;

}

// Test

let product1 = new Product("id4", "1Name4", "this name is description", 100.5, "Zara", ["XS", "S"], "S", 3, new Date(2023, 0, 31, 12, 30), [new Reviews("ID1", "Viktor",
    new Date(2023, 1, 20, 12, 30), "This is commend", { "rating": 5, "service": 5, "price": 5, "value": 5, "quality": 5 })], ["ZARA", "PARA "]);
    
let product2 = new Product("id2", "Name2", "this is description of second prod", 90.5, "H&M", ["M", "L"], "L", 3, new Date(2023, 2, 31, 12, 30), [new Reviews("ID2", "Viktor1",
    new Date(2023, 5, 20, 12, 30), "second commend", { "rating": 3, "service": 5, "price": 3, "value": 5, "quality": 4 })], ["ZAR", "PAR "]);

let product3 = new Product("id1", "Name3", "third description", 120.5, "Staff", ["XS", "M"], "XS", 3, new Date(2023, 8, 30, 12, 30), [new Reviews("ID11", "Diana",
    new Date(2023, 9, 20, 12, 30), "Third commend", { "rating": 1, "service": 5, "price": 1, "value": 3, "quality": 4 })], ["ARA", "SHARA "]);
    

let testArray = [product1, product2, product3]; 

//this block working !!!
// console.log(product1.getReviewByID("ID1"));
// console.log(product1.getReviewByID("ID2"));

//this block working !!!
//console.log(product1.getImage("PARA "));

//this block working !!!
// product1.addSize("XL");
// product1.addSize("L");
// console.log(product1.getSizes());

//this block working !!!
//product1.deleteSize("XS");
//console.log(product1.getSizes());

// this block working !!!
// product1.addReview(new Reviews("ID2", "Viktor1",
//     new Date(2023, 5, 20, 12, 30), "second commend", { "rating": 3, "service": 5, "price": 3, "value": 5, "quality": 4 }));
// console.log(product1.getReviews());

// this block working !!!
// product1.deleteReview("ID1");
// console.log(product1.getReviews());
// product2.deleteReview("ID1");
// console.log(product2.getReviews());
// product2.deleteReview("ID2");
// console.log(product2.getReviews());


// this block working !!!
// console.log(product1.getAverageRating());
// console.log(product2.getAverageRating());
// console.log(product3.getAverageRating());


// this block working !!!
// sortProducts(testArray,"ID");
// for (let i = 0; i < testArray.length; i++)
// {
//     console.log(testArray[i].getID());    
// }
// sortProducts(testArray,"name");
// for (let i = 0; i < testArray.length; i++)
// {
//     console.log(testArray[i].getName());    
// }
// sortProducts(testArray, "price");
// for (let i = 0; i < testArray.length; i++)
// {
//     console.log(testArray[i].getPrice());    
// }


// this block is working!!!
// let seachArray = searchProducts(testArray, "name");
// for (let i = 0; i < seachArray.length; i++)
// {
//     console.log(seachArray[i].getName());
// }

// this block working!!!
// console.log(product2.getID());
// console.log(product2.getName());
// console.log(product2.getDescription());
// console.log(product2.getPrice());
// console.log(product2.getBrand());
// console.log(product2.getSizes());
// console.log(product2.getActiveSize());
// console.log(product2.getQuantity());
// console.log(product2.getDate());
// console.log(product2.getReviews());
// console.log(product2.getImages());






