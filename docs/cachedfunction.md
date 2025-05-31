# CachedFunction Class

## Constructor

The constructor takes a type of [ICachedFunctionConstructorOps](/interfaces#icachedfunctionconstructorops)

### Example
```ts
import { CachedFunction } from 'cachesjs';

const reallyComplexFunction = () => {
    // do some API calls or long tasks;
    return console.log(x)
};

const myFunc = new CachedFunction({
    name: "myFunc",
    func: reallyComplexFunction,
    ttl: "5m" // Optional, If not set default will be 5 mins
});
```

## Methods

Given below are the methods available in the `CachedFunction` class.

## runSync(...args)

Run the function synchronously. Return Type: `<R>`

## runAsync(...args)

Run the function asynchronously. Return Type: `Promise<R>`

## getCachedValue(...args)

Get the cached value of the provided arguments. Return Type: `R | Promise<R> | undefined`

## has(...args)

Check if the given argument is stored in the cache. Return Type: `boolean`

## clear() 

Clear all the cached data. Return Type: `void`
