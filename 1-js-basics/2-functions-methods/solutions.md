# 🚀 Challenges

### Difference between functions and methods in one sentence
Functions are independent set of instructions and do not depend on any objects, whereas method is a function which is linked with an object.

# Assignment
Create different functions, both functions that return something and functions that don't return anything. Also create a function that has a mix of parameters and parameters with default values.


### Function that returns a value:

```javascript
function square(n) {
    return(n*n);            // returns a value
}
```

### Function that doesn't return a value

```javascript
function square(n) {
    const result = n*n;
    console.log(`The square of ${n} is `, result);
}
```

### Function with parameters and parameters having default values
```javascript
function velocityOfRaindrop(u, a=(-9.81), t) {
    const v = u + a*t;
    return(v);
}
```