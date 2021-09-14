
// Assignments 
// Function to convert Celsius to Fahrenheit
 function   convert (num)   {
     const conversion = num * (9/5) + 32;
     const ToFourDecimalPlaces = conversion.toFixed(4);
     return ToFourDecimalPlaces;
     if (typeof num != "number")  {
         alert ("Invalid");
     };
 }
 const result = convert(50);
 console.log (result);
