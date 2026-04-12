// In TypeScript, when an array is typed with elements of specific types, it’s called a tuple
// As far as JavaScript is concerned, tuples act just like arrays. They both have .length properties.
// An array cannot be assigned to a tuple.




let favoriteCoordinates: [number, number, string, number, number, string] = [17, 45, 'N', 142 , 30 , 'E'];


// favoriteCoordinates[6] = -6.825; // Error: Tuple type '[number, number, string, number, number, string]' of length '6' has no element at index '6'.