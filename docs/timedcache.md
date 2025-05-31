# TimedCache Class

## Constructor

The constructor takes of type of [ITimedCacheConstructorOps](/types#ITimedCacheConstructorOps)
  
### Example

```js
import { TimedCache } from 'cachesjs';

const myCache = new TimedCache<string>({
    name: "MyCache",
    onExpire: (key, value) => console.log(`${key} has expired.`), // optional 
    defaultTTL: "10m" // Optional - Default TTL for all created keys || If not provided default will be 5 minutes 
});
```

## Methods

Given below are the methods available in the `TimedCache` class.

## add(key, value, ttl?)

Add a key to the cache. Return Type: `void`

### Parameters

- `key` *[string]*: The key to be used to access the value.
- `value` *[V]*: The value to be stored, type is assigned on creating the class.
- `ttl?` *[string]*: A specific TTL to use for this specific key, if not provided the default one will be used.

## get(key)

Searches the key in the cache and returns the value. Return Type: `<V>`

### Parameters

- `key` *[string]*: The key used to find the stored value.

## delete(key)

Deletes the provided key from the cache. Return Type: `boolean`

### Parameters

- `key` *[string]*: The key to delete.


## check(key)

Check if the key exists in the cache. Return Type: `boolean`

### Parameters

- `key` *[string]*: The key to search.

## hasExpired(key)

See if the given key has expired. Return Type: `boolean`

### Parameters

- `key` *[string]*: The key to check

## clear()

Clear the cache. Return Type: `void`

*Clearing the cache includes clearing all the data inside it.*

## size()

Returns the size of the cache. Return Type: `number`

## keys()

Returns all the keys in the cache. Return Type: `string[]`

## values()

Returns all the values in the cache. Return Type: `<V>[]`

## entires()

Returns all the entries in the cache. Return Type: `[string, <V>][]`
