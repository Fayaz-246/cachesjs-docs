# Types

## ExpireCallback

```ts 
export type ExpireCallback<V> = (key: string, value: V) => void;
```

## CacheFunc & AsyncCacheFunc

```ts
export type CacheFunc<Args extends any[] = any[], R = any> = (
  ...args: Args
) => R;
```

```ts
export type AsyncCacheFunc<Args extends any[] = any[], R = any> = (
  ...args: Args
) => Promise<R>;
```



