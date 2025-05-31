# Interfaces

## ITimedCacheConstructorOps
```ts
export interface ITimedCacheConstructorOps<V> {
  name: string;
  onExpire?: ExpireCallback<V>;
  defaultTTL?: string;
}
```


## ICachedFunctionConstructorOps

```ts
export interface ICachedFunctionConstructorOps<
  Args extends any[] = any[],
  R = any,
> {
  name: string;
  func: CacheFunc<Args, R> | AsyncCacheFunc<Args, R>;
  ttl?: string;
}
```
