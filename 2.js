var listOfItems = [
  { brandName: "Nike", itemName: "shoe12", dateOfPurchase: "2012-04-22" },
  { brandName: "Puma", itemName: "shoe04", dateOfPurchase: "2014-04-11" },
  { brandName: "Nike", itemName: "jeans22", dateOfPurchase: "2019-11-25" },
  { brandName: "Adidas", itemName: "shoe07", dateOfPurchase: "2013-06-27" },
  { brandName: "Nike", itemName: "t-shirt15", dateOfPurchase: "2022-11-12" },
  { brandName: "Adidas", itemName: "jacket16", dateOfPurchase: "2012-03-13" },
];
// For each particular brand-name, we have to fetch the item name, with the latest (Most recent) date of Purchase.
// Print the result: ["shoe04", "shoe07", "t-shirt15"]
