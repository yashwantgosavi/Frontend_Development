/*  Create a program that calculates the discount offer depending on the given amount and store the calculated discount in the discount variable

Use the following conditions to calculate the discount.

If the amount is less than 500, then the value of the discount should be  "No Discount." 

If the amount is greater than or equal to 500 and less than 1000, then the value of the discount should be "10% Discount."

If the amount is greater than or equal to 1000 and less than 2000, then the value of the discount should be "20% Discount."

If the amount is greater than or equal to 2000 and less than 4000, then the value of the discount should be "30% Discount."

If the amount is greater than or equal to 4000 and less than 5000, then the value of the discount should be "40% Discount."

If the amount is greater than or equal to 5000, then the value of the discount should be "50% Discount."

Note:

You must use switch statements to test the conditions.





*/     
function calculate(amount) {
    let discount;
  
    switch (true) {
      case amount < 500:
        discount = "No Discount";
        break;
      case amount >= 500 && amount < 1000:
        discount = "10% Discount";
        break;
      case amount >= 1000 && amount < 2000:
        discount = "20% Discount";
        break;
      case amount >= 2000 && amount < 4000:
        discount = "30% Discount";
        break;
      case amount >= 4000 && amount < 5000:
        discount = "40% Discount";
        break;
      case amount >= 5000:
        discount = "50% Discount";
        break;
      default:
        discount = "Invalid Amount";
    }
  
    return discount;
  }
  
  var amount = 500;
  var discount = calculateDiscount(amount);
  console.log(discount);