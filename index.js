// Froyo Survey
// Create an oject called customer with key:value pairs

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "meduim",
    favoriteStore: "Target",
    firstVisit: false
};

// modify mistakes made using bracket notation


customer["email"] = ("Jak3Smith1992@email.com")
customer["phone"] = (3195551234)
customer["zipCode"] = ("63132")
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"]


// Delete zipCode and favoriteStore from customer

delete customer["zipCode"];
delete customer["favoriteStore"];

// Add items: toppings, future flavors and today's purchase cost to customer
// To add these items user dot notation

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// Print just the keys of the survey

const keys = Object.keys(customer);
console.log("KEYS: ", keys)

console.log(customer)
console.table(customer)




