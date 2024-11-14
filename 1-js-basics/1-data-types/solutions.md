# 🚀 Challenges


### 'Gotchas' in JavaScript

1. Case sensitivity
```javascript
let age = 1
let Age = 2
age == Age      			// returns false
```

This is because the variables `age` and `Age` are treated as different with different values `1` and `2`. Hence when we check for equality, it returns `false`.

2. == and ===
```javascript
console.log(12 == '12')     // returns true 
console.log( 12 === '12')   // returns false
```

The `==` operator performs type coercion when 2 different data types are used to check for equality. Here, `12` is a number and `'12'` being a string. Therefore it converts the string `'12'` into a number `12` and is then returns a true value for the equality check. But the `===` operator enforces strict data type equality check where both the arguments have to be of the same data type along with the same value for it to return true, else it returns false. 

3. 0 and -0

```javascript
0 == -0;        			// true
12/0 == 12/-0;  			// false
```

This is because JavaScript handles numbers differently. There's both positive zero and a negative zero. When checking for equality, they might be the same but when divided by negative and positive zeroes separately, it results in negative and positive infinity respectively.


## JavaScript exercise

### Check if Number is Even/Odd (https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/)

```javascript
if (value%2 == 0)
	console.log("Even number");
else
	console.log("Odd number");
```

## Data types practice

Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?

| Data type | Purpose |
| :-:       | :-:         |
| Number    | Prices, quantity  |
| String    | Product name, categories, reviews |
| Arrays    | To list the products that a row in a shelf contains |
| Objects   | Entire description of a product in the shopping cart as one |
| Boolean   | To show whether an item we're finding is in available in stock or not |
| null      | To show the absence of a value, here could be missing details on the description of a product |
