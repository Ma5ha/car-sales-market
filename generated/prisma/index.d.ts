
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model RefreshedHistory
 * 
 */
export type RefreshedHistory = $Result.DefaultSelection<Prisma.$RefreshedHistoryPayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FuelType: {
  Diesel: 'Diesel',
  Petrol: 'Petrol',
  Hybrid: 'Hybrid',
  LPG: 'LPG',
  Eletric: 'Eletric',
  Other: 'Other'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const TransmitionType: {
  Manual: 'Manual',
  Automatic: 'Automatic',
  SemiAutomatic: 'SemiAutomatic',
  Other: 'Other'
};

export type TransmitionType = (typeof TransmitionType)[keyof typeof TransmitionType]


export const CarType: {
  Sedan: 'Sedan',
  Hatchback: 'Hatchback',
  SUV: 'SUV',
  Coupe: 'Coupe',
  Convertible: 'Convertible',
  Wagon: 'Wagon',
  Minivan: 'Minivan',
  Pickup: 'Pickup',
  Truck: 'Truck',
  Bus: 'Bus',
  Motorcycle: 'Motorcycle',
  Other: 'Other'
};

export type CarType = (typeof CarType)[keyof typeof CarType]


export const Brand: {
  Abarth: 'Abarth',
  AlfaRomeo: 'AlfaRomeo',
  Audi: 'Audi',
  BMW: 'BMW',
  Citroen: 'Citroen',
  Fiat: 'Fiat',
  Ford: 'Ford',
  Honda: 'Honda',
  Hyundai: 'Hyundai',
  Jaguar: 'Jaguar',
  Kia: 'Kia',
  LandRover: 'LandRover',
  Mazda: 'Mazda',
  Mercedes: 'Mercedes',
  Mitsubishi: 'Mitsubishi',
  Nissan: 'Nissan',
  Opel: 'Opel',
  Peugeot: 'Peugeot',
  Porsche: 'Porsche',
  Renault: 'Renault',
  Seat: 'Seat',
  Skoda: 'Skoda',
  Smart: 'Smart',
  Subaru: 'Subaru',
  Suzuki: 'Suzuki',
  Toyota: 'Toyota',
  Volkswagen: 'Volkswagen',
  Volvo: 'Volvo',
  Other: 'Other'
};

export type Brand = (typeof Brand)[keyof typeof Brand]


export const Model: {
  Abarth_500: 'Abarth_500',
  AlfaRomeo_Giulietta: 'AlfaRomeo_Giulietta',
  Audi_A3: 'Audi_A3',
  BMW_1: 'BMW_1',
  Citroen_C4: 'Citroen_C4',
  Fiat_500: 'Fiat_500',
  Fiat_Punto: 'Fiat_Punto',
  Ford_Focus: 'Ford_Focus',
  Honda_Civic: 'Honda_Civic',
  Hyundai_i30: 'Hyundai_i30',
  Jaguar_XF: 'Jaguar_XF',
  Kia_Ceed: 'Kia_Ceed',
  LandRover_RangeRover: 'LandRover_RangeRover',
  Mazda_3: 'Mazda_3',
  Mercedes_C: 'Mercedes_C',
  Mercedes_CLA: 'Mercedes_CLA',
  Mitsubishi_Lancer: 'Mitsubishi_Lancer',
  Nissan_Qashqai: 'Nissan_Qashqai',
  Opel_Astra: 'Opel_Astra',
  Peugeot_308: 'Peugeot_308',
  Porsche_911: 'Porsche_911',
  Renault_Clio: 'Renault_Clio',
  Seat_Leon: 'Seat_Leon',
  Skoda_Octavia: 'Skoda_Octavia',
  Smart_Fortwo: 'Smart_Fortwo',
  Subaru_Impreza: 'Subaru_Impreza',
  Suzuki_Swift: 'Suzuki_Swift',
  Toyota_Corolla: 'Toyota_Corolla',
  Volkswagen_Golf: 'Volkswagen_Golf',
  Volvo_XC90: 'Volvo_XC90',
  Other: 'Other'
};

export type Model = (typeof Model)[keyof typeof Model]

}

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type TransmitionType = $Enums.TransmitionType

export const TransmitionType: typeof $Enums.TransmitionType

export type CarType = $Enums.CarType

export const CarType: typeof $Enums.CarType

export type Brand = $Enums.Brand

export const Brand: typeof $Enums.Brand

export type Model = $Enums.Model

export const Model: typeof $Enums.Model

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshedHistory`: Exposes CRUD operations for the **RefreshedHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshedHistories
    * const refreshedHistories = await prisma.refreshedHistory.findMany()
    * ```
    */
  get refreshedHistory(): Prisma.RefreshedHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Car: 'Car',
    RefreshedHistory: 'RefreshedHistory',
    PriceHistory: 'PriceHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "car" | "refreshedHistory" | "priceHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      RefreshedHistory: {
        payload: Prisma.$RefreshedHistoryPayload<ExtArgs>
        fields: Prisma.RefreshedHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshedHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshedHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>
          }
          findFirst: {
            args: Prisma.RefreshedHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshedHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>
          }
          findMany: {
            args: Prisma.RefreshedHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>[]
          }
          create: {
            args: Prisma.RefreshedHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>
          }
          createMany: {
            args: Prisma.RefreshedHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshedHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>[]
          }
          delete: {
            args: Prisma.RefreshedHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>
          }
          update: {
            args: Prisma.RefreshedHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RefreshedHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshedHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshedHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RefreshedHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshedHistoryPayload>
          }
          aggregate: {
            args: Prisma.RefreshedHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshedHistory>
          }
          groupBy: {
            args: Prisma.RefreshedHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshedHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshedHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshedHistoryCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    car?: CarOmit
    refreshedHistory?: RefreshedHistoryOmit
    priceHistory?: PriceHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    priceHistory: number
    refreshed: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceHistory?: boolean | CarCountOutputTypeCountPriceHistoryArgs
    refreshed?: boolean | CarCountOutputTypeCountRefreshedArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountRefreshedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshedHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    olxId: number | null
    price: number | null
    displacement: number | null
    milage: number | null
    torque: number | null
    views: number | null
    olixCreatedAt: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    olxId: number | null
    price: number | null
    displacement: number | null
    milage: number | null
    torque: number | null
    views: number | null
    olixCreatedAt: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    olxId: number | null
    brand: string | null
    model: string | null
    manufactured: string | null
    price: number | null
    displacement: number | null
    milage: number | null
    fuel: string | null
    transmission: string | null
    torque: number | null
    type: string | null
    color: string | null
    views: number | null
    createdAt: Date | null
    olixCreatedAt: number | null
    sold: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    olxId: number | null
    brand: string | null
    model: string | null
    manufactured: string | null
    price: number | null
    displacement: number | null
    milage: number | null
    fuel: string | null
    transmission: string | null
    torque: number | null
    type: string | null
    color: string | null
    views: number | null
    createdAt: Date | null
    olixCreatedAt: number | null
    sold: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    olxId: number
    brand: number
    model: number
    manufactured: number
    price: number
    displacement: number
    milage: number
    fuel: number
    transmission: number
    torque: number
    type: number
    color: number
    views: number
    createdAt: number
    olixCreatedAt: number
    sold: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    olxId?: true
    price?: true
    displacement?: true
    milage?: true
    torque?: true
    views?: true
    olixCreatedAt?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    olxId?: true
    price?: true
    displacement?: true
    milage?: true
    torque?: true
    views?: true
    olixCreatedAt?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    olxId?: true
    brand?: true
    model?: true
    manufactured?: true
    price?: true
    displacement?: true
    milage?: true
    fuel?: true
    transmission?: true
    torque?: true
    type?: true
    color?: true
    views?: true
    createdAt?: true
    olixCreatedAt?: true
    sold?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    olxId?: true
    brand?: true
    model?: true
    manufactured?: true
    price?: true
    displacement?: true
    milage?: true
    fuel?: true
    transmission?: true
    torque?: true
    type?: true
    color?: true
    views?: true
    createdAt?: true
    olixCreatedAt?: true
    sold?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    olxId?: true
    brand?: true
    model?: true
    manufactured?: true
    price?: true
    displacement?: true
    milage?: true
    fuel?: true
    transmission?: true
    torque?: true
    type?: true
    color?: true
    views?: true
    createdAt?: true
    olixCreatedAt?: true
    sold?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt: Date
    olixCreatedAt: number
    sold: Date | null
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    olxId?: boolean
    brand?: boolean
    model?: boolean
    manufactured?: boolean
    price?: boolean
    displacement?: boolean
    milage?: boolean
    fuel?: boolean
    transmission?: boolean
    torque?: boolean
    type?: boolean
    color?: boolean
    views?: boolean
    createdAt?: boolean
    olixCreatedAt?: boolean
    sold?: boolean
    priceHistory?: boolean | Car$priceHistoryArgs<ExtArgs>
    refreshed?: boolean | Car$refreshedArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    olxId?: boolean
    brand?: boolean
    model?: boolean
    manufactured?: boolean
    price?: boolean
    displacement?: boolean
    milage?: boolean
    fuel?: boolean
    transmission?: boolean
    torque?: boolean
    type?: boolean
    color?: boolean
    views?: boolean
    createdAt?: boolean
    olixCreatedAt?: boolean
    sold?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    olxId?: boolean
    brand?: boolean
    model?: boolean
    manufactured?: boolean
    price?: boolean
    displacement?: boolean
    milage?: boolean
    fuel?: boolean
    transmission?: boolean
    torque?: boolean
    type?: boolean
    color?: boolean
    views?: boolean
    createdAt?: boolean
    olixCreatedAt?: boolean
    sold?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    olxId?: boolean
    brand?: boolean
    model?: boolean
    manufactured?: boolean
    price?: boolean
    displacement?: boolean
    milage?: boolean
    fuel?: boolean
    transmission?: boolean
    torque?: boolean
    type?: boolean
    color?: boolean
    views?: boolean
    createdAt?: boolean
    olixCreatedAt?: boolean
    sold?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "olxId" | "brand" | "model" | "manufactured" | "price" | "displacement" | "milage" | "fuel" | "transmission" | "torque" | "type" | "color" | "views" | "createdAt" | "olixCreatedAt" | "sold", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceHistory?: boolean | Car$priceHistoryArgs<ExtArgs>
    refreshed?: boolean | Car$refreshedArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
      refreshed: Prisma.$RefreshedHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      olxId: number
      brand: string
      model: string
      manufactured: string
      price: number
      displacement: number
      milage: number
      fuel: string
      transmission: string
      torque: number
      type: string
      color: string
      views: number
      createdAt: Date
      olixCreatedAt: number
      sold: Date | null
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    priceHistory<T extends Car$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Car$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshed<T extends Car$refreshedArgs<ExtArgs> = {}>(args?: Subset<T, Car$refreshedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly olxId: FieldRef<"Car", 'Int'>
    readonly brand: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly manufactured: FieldRef<"Car", 'String'>
    readonly price: FieldRef<"Car", 'Int'>
    readonly displacement: FieldRef<"Car", 'Int'>
    readonly milage: FieldRef<"Car", 'Int'>
    readonly fuel: FieldRef<"Car", 'String'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly torque: FieldRef<"Car", 'Int'>
    readonly type: FieldRef<"Car", 'String'>
    readonly color: FieldRef<"Car", 'String'>
    readonly views: FieldRef<"Car", 'Int'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly olixCreatedAt: FieldRef<"Car", 'Int'>
    readonly sold: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.priceHistory
   */
  export type Car$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Car.refreshed
   */
  export type Car$refreshedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    where?: RefreshedHistoryWhereInput
    orderBy?: RefreshedHistoryOrderByWithRelationInput | RefreshedHistoryOrderByWithRelationInput[]
    cursor?: RefreshedHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshedHistoryScalarFieldEnum | RefreshedHistoryScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model RefreshedHistory
   */

  export type AggregateRefreshedHistory = {
    _count: RefreshedHistoryCountAggregateOutputType | null
    _avg: RefreshedHistoryAvgAggregateOutputType | null
    _sum: RefreshedHistorySumAggregateOutputType | null
    _min: RefreshedHistoryMinAggregateOutputType | null
    _max: RefreshedHistoryMaxAggregateOutputType | null
  }

  export type RefreshedHistoryAvgAggregateOutputType = {
    id: number | null
    value: number | null
    carId: number | null
  }

  export type RefreshedHistorySumAggregateOutputType = {
    id: number | null
    value: number | null
    carId: number | null
  }

  export type RefreshedHistoryMinAggregateOutputType = {
    id: number | null
    update: Date | null
    value: number | null
    carId: number | null
  }

  export type RefreshedHistoryMaxAggregateOutputType = {
    id: number | null
    update: Date | null
    value: number | null
    carId: number | null
  }

  export type RefreshedHistoryCountAggregateOutputType = {
    id: number
    update: number
    value: number
    carId: number
    _all: number
  }


  export type RefreshedHistoryAvgAggregateInputType = {
    id?: true
    value?: true
    carId?: true
  }

  export type RefreshedHistorySumAggregateInputType = {
    id?: true
    value?: true
    carId?: true
  }

  export type RefreshedHistoryMinAggregateInputType = {
    id?: true
    update?: true
    value?: true
    carId?: true
  }

  export type RefreshedHistoryMaxAggregateInputType = {
    id?: true
    update?: true
    value?: true
    carId?: true
  }

  export type RefreshedHistoryCountAggregateInputType = {
    id?: true
    update?: true
    value?: true
    carId?: true
    _all?: true
  }

  export type RefreshedHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshedHistory to aggregate.
     */
    where?: RefreshedHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshedHistories to fetch.
     */
    orderBy?: RefreshedHistoryOrderByWithRelationInput | RefreshedHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshedHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshedHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshedHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshedHistories
    **/
    _count?: true | RefreshedHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshedHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshedHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshedHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshedHistoryMaxAggregateInputType
  }

  export type GetRefreshedHistoryAggregateType<T extends RefreshedHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshedHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshedHistory[P]>
      : GetScalarType<T[P], AggregateRefreshedHistory[P]>
  }




  export type RefreshedHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshedHistoryWhereInput
    orderBy?: RefreshedHistoryOrderByWithAggregationInput | RefreshedHistoryOrderByWithAggregationInput[]
    by: RefreshedHistoryScalarFieldEnum[] | RefreshedHistoryScalarFieldEnum
    having?: RefreshedHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshedHistoryCountAggregateInputType | true
    _avg?: RefreshedHistoryAvgAggregateInputType
    _sum?: RefreshedHistorySumAggregateInputType
    _min?: RefreshedHistoryMinAggregateInputType
    _max?: RefreshedHistoryMaxAggregateInputType
  }

  export type RefreshedHistoryGroupByOutputType = {
    id: number
    update: Date
    value: number
    carId: number
    _count: RefreshedHistoryCountAggregateOutputType | null
    _avg: RefreshedHistoryAvgAggregateOutputType | null
    _sum: RefreshedHistorySumAggregateOutputType | null
    _min: RefreshedHistoryMinAggregateOutputType | null
    _max: RefreshedHistoryMaxAggregateOutputType | null
  }

  type GetRefreshedHistoryGroupByPayload<T extends RefreshedHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshedHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshedHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshedHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshedHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RefreshedHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshedHistory"]>

  export type RefreshedHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshedHistory"]>

  export type RefreshedHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshedHistory"]>

  export type RefreshedHistorySelectScalar = {
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
  }

  export type RefreshedHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "update" | "value" | "carId", ExtArgs["result"]["refreshedHistory"]>
  export type RefreshedHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type RefreshedHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type RefreshedHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $RefreshedHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshedHistory"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      update: Date
      value: number
      carId: number
    }, ExtArgs["result"]["refreshedHistory"]>
    composites: {}
  }

  type RefreshedHistoryGetPayload<S extends boolean | null | undefined | RefreshedHistoryDefaultArgs> = $Result.GetResult<Prisma.$RefreshedHistoryPayload, S>

  type RefreshedHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshedHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshedHistoryCountAggregateInputType | true
    }

  export interface RefreshedHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshedHistory'], meta: { name: 'RefreshedHistory' } }
    /**
     * Find zero or one RefreshedHistory that matches the filter.
     * @param {RefreshedHistoryFindUniqueArgs} args - Arguments to find a RefreshedHistory
     * @example
     * // Get one RefreshedHistory
     * const refreshedHistory = await prisma.refreshedHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshedHistoryFindUniqueArgs>(args: SelectSubset<T, RefreshedHistoryFindUniqueArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshedHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshedHistoryFindUniqueOrThrowArgs} args - Arguments to find a RefreshedHistory
     * @example
     * // Get one RefreshedHistory
     * const refreshedHistory = await prisma.refreshedHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshedHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshedHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshedHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryFindFirstArgs} args - Arguments to find a RefreshedHistory
     * @example
     * // Get one RefreshedHistory
     * const refreshedHistory = await prisma.refreshedHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshedHistoryFindFirstArgs>(args?: SelectSubset<T, RefreshedHistoryFindFirstArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshedHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryFindFirstOrThrowArgs} args - Arguments to find a RefreshedHistory
     * @example
     * // Get one RefreshedHistory
     * const refreshedHistory = await prisma.refreshedHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshedHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshedHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshedHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshedHistories
     * const refreshedHistories = await prisma.refreshedHistory.findMany()
     * 
     * // Get first 10 RefreshedHistories
     * const refreshedHistories = await prisma.refreshedHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshedHistoryWithIdOnly = await prisma.refreshedHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshedHistoryFindManyArgs>(args?: SelectSubset<T, RefreshedHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshedHistory.
     * @param {RefreshedHistoryCreateArgs} args - Arguments to create a RefreshedHistory.
     * @example
     * // Create one RefreshedHistory
     * const RefreshedHistory = await prisma.refreshedHistory.create({
     *   data: {
     *     // ... data to create a RefreshedHistory
     *   }
     * })
     * 
     */
    create<T extends RefreshedHistoryCreateArgs>(args: SelectSubset<T, RefreshedHistoryCreateArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshedHistories.
     * @param {RefreshedHistoryCreateManyArgs} args - Arguments to create many RefreshedHistories.
     * @example
     * // Create many RefreshedHistories
     * const refreshedHistory = await prisma.refreshedHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshedHistoryCreateManyArgs>(args?: SelectSubset<T, RefreshedHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshedHistories and returns the data saved in the database.
     * @param {RefreshedHistoryCreateManyAndReturnArgs} args - Arguments to create many RefreshedHistories.
     * @example
     * // Create many RefreshedHistories
     * const refreshedHistory = await prisma.refreshedHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshedHistories and only return the `id`
     * const refreshedHistoryWithIdOnly = await prisma.refreshedHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshedHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshedHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshedHistory.
     * @param {RefreshedHistoryDeleteArgs} args - Arguments to delete one RefreshedHistory.
     * @example
     * // Delete one RefreshedHistory
     * const RefreshedHistory = await prisma.refreshedHistory.delete({
     *   where: {
     *     // ... filter to delete one RefreshedHistory
     *   }
     * })
     * 
     */
    delete<T extends RefreshedHistoryDeleteArgs>(args: SelectSubset<T, RefreshedHistoryDeleteArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshedHistory.
     * @param {RefreshedHistoryUpdateArgs} args - Arguments to update one RefreshedHistory.
     * @example
     * // Update one RefreshedHistory
     * const refreshedHistory = await prisma.refreshedHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshedHistoryUpdateArgs>(args: SelectSubset<T, RefreshedHistoryUpdateArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshedHistories.
     * @param {RefreshedHistoryDeleteManyArgs} args - Arguments to filter RefreshedHistories to delete.
     * @example
     * // Delete a few RefreshedHistories
     * const { count } = await prisma.refreshedHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshedHistoryDeleteManyArgs>(args?: SelectSubset<T, RefreshedHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshedHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshedHistories
     * const refreshedHistory = await prisma.refreshedHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshedHistoryUpdateManyArgs>(args: SelectSubset<T, RefreshedHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshedHistories and returns the data updated in the database.
     * @param {RefreshedHistoryUpdateManyAndReturnArgs} args - Arguments to update many RefreshedHistories.
     * @example
     * // Update many RefreshedHistories
     * const refreshedHistory = await prisma.refreshedHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshedHistories and only return the `id`
     * const refreshedHistoryWithIdOnly = await prisma.refreshedHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshedHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshedHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshedHistory.
     * @param {RefreshedHistoryUpsertArgs} args - Arguments to update or create a RefreshedHistory.
     * @example
     * // Update or create a RefreshedHistory
     * const refreshedHistory = await prisma.refreshedHistory.upsert({
     *   create: {
     *     // ... data to create a RefreshedHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshedHistory we want to update
     *   }
     * })
     */
    upsert<T extends RefreshedHistoryUpsertArgs>(args: SelectSubset<T, RefreshedHistoryUpsertArgs<ExtArgs>>): Prisma__RefreshedHistoryClient<$Result.GetResult<Prisma.$RefreshedHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshedHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryCountArgs} args - Arguments to filter RefreshedHistories to count.
     * @example
     * // Count the number of RefreshedHistories
     * const count = await prisma.refreshedHistory.count({
     *   where: {
     *     // ... the filter for the RefreshedHistories we want to count
     *   }
     * })
    **/
    count<T extends RefreshedHistoryCountArgs>(
      args?: Subset<T, RefreshedHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshedHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshedHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshedHistoryAggregateArgs>(args: Subset<T, RefreshedHistoryAggregateArgs>): Prisma.PrismaPromise<GetRefreshedHistoryAggregateType<T>>

    /**
     * Group by RefreshedHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshedHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshedHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshedHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RefreshedHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshedHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshedHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshedHistory model
   */
  readonly fields: RefreshedHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshedHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshedHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshedHistory model
   */
  interface RefreshedHistoryFieldRefs {
    readonly id: FieldRef<"RefreshedHistory", 'Int'>
    readonly update: FieldRef<"RefreshedHistory", 'DateTime'>
    readonly value: FieldRef<"RefreshedHistory", 'Int'>
    readonly carId: FieldRef<"RefreshedHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RefreshedHistory findUnique
   */
  export type RefreshedHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RefreshedHistory to fetch.
     */
    where: RefreshedHistoryWhereUniqueInput
  }

  /**
   * RefreshedHistory findUniqueOrThrow
   */
  export type RefreshedHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RefreshedHistory to fetch.
     */
    where: RefreshedHistoryWhereUniqueInput
  }

  /**
   * RefreshedHistory findFirst
   */
  export type RefreshedHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RefreshedHistory to fetch.
     */
    where?: RefreshedHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshedHistories to fetch.
     */
    orderBy?: RefreshedHistoryOrderByWithRelationInput | RefreshedHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshedHistories.
     */
    cursor?: RefreshedHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshedHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshedHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshedHistories.
     */
    distinct?: RefreshedHistoryScalarFieldEnum | RefreshedHistoryScalarFieldEnum[]
  }

  /**
   * RefreshedHistory findFirstOrThrow
   */
  export type RefreshedHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RefreshedHistory to fetch.
     */
    where?: RefreshedHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshedHistories to fetch.
     */
    orderBy?: RefreshedHistoryOrderByWithRelationInput | RefreshedHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshedHistories.
     */
    cursor?: RefreshedHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshedHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshedHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshedHistories.
     */
    distinct?: RefreshedHistoryScalarFieldEnum | RefreshedHistoryScalarFieldEnum[]
  }

  /**
   * RefreshedHistory findMany
   */
  export type RefreshedHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RefreshedHistories to fetch.
     */
    where?: RefreshedHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshedHistories to fetch.
     */
    orderBy?: RefreshedHistoryOrderByWithRelationInput | RefreshedHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshedHistories.
     */
    cursor?: RefreshedHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshedHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshedHistories.
     */
    skip?: number
    distinct?: RefreshedHistoryScalarFieldEnum | RefreshedHistoryScalarFieldEnum[]
  }

  /**
   * RefreshedHistory create
   */
  export type RefreshedHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshedHistory.
     */
    data: XOR<RefreshedHistoryCreateInput, RefreshedHistoryUncheckedCreateInput>
  }

  /**
   * RefreshedHistory createMany
   */
  export type RefreshedHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshedHistories.
     */
    data: RefreshedHistoryCreateManyInput | RefreshedHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshedHistory createManyAndReturn
   */
  export type RefreshedHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshedHistories.
     */
    data: RefreshedHistoryCreateManyInput | RefreshedHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshedHistory update
   */
  export type RefreshedHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshedHistory.
     */
    data: XOR<RefreshedHistoryUpdateInput, RefreshedHistoryUncheckedUpdateInput>
    /**
     * Choose, which RefreshedHistory to update.
     */
    where: RefreshedHistoryWhereUniqueInput
  }

  /**
   * RefreshedHistory updateMany
   */
  export type RefreshedHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshedHistories.
     */
    data: XOR<RefreshedHistoryUpdateManyMutationInput, RefreshedHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RefreshedHistories to update
     */
    where?: RefreshedHistoryWhereInput
    /**
     * Limit how many RefreshedHistories to update.
     */
    limit?: number
  }

  /**
   * RefreshedHistory updateManyAndReturn
   */
  export type RefreshedHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RefreshedHistories.
     */
    data: XOR<RefreshedHistoryUpdateManyMutationInput, RefreshedHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RefreshedHistories to update
     */
    where?: RefreshedHistoryWhereInput
    /**
     * Limit how many RefreshedHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshedHistory upsert
   */
  export type RefreshedHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshedHistory to update in case it exists.
     */
    where: RefreshedHistoryWhereUniqueInput
    /**
     * In case the RefreshedHistory found by the `where` argument doesn't exist, create a new RefreshedHistory with this data.
     */
    create: XOR<RefreshedHistoryCreateInput, RefreshedHistoryUncheckedCreateInput>
    /**
     * In case the RefreshedHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshedHistoryUpdateInput, RefreshedHistoryUncheckedUpdateInput>
  }

  /**
   * RefreshedHistory delete
   */
  export type RefreshedHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
    /**
     * Filter which RefreshedHistory to delete.
     */
    where: RefreshedHistoryWhereUniqueInput
  }

  /**
   * RefreshedHistory deleteMany
   */
  export type RefreshedHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshedHistories to delete
     */
    where?: RefreshedHistoryWhereInput
    /**
     * Limit how many RefreshedHistories to delete.
     */
    limit?: number
  }

  /**
   * RefreshedHistory without action
   */
  export type RefreshedHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshedHistory
     */
    select?: RefreshedHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshedHistory
     */
    omit?: RefreshedHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshedHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    id: number | null
    value: number | null
    carId: number | null
  }

  export type PriceHistorySumAggregateOutputType = {
    id: number | null
    value: number | null
    carId: number | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    id: number | null
    update: Date | null
    value: number | null
    carId: number | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    id: number | null
    update: Date | null
    value: number | null
    carId: number | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    id: number
    update: number
    value: number
    carId: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    id?: true
    value?: true
    carId?: true
  }

  export type PriceHistorySumAggregateInputType = {
    id?: true
    value?: true
    carId?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    id?: true
    update?: true
    value?: true
    carId?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    id?: true
    update?: true
    value?: true
    carId?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    id?: true
    update?: true
    value?: true
    carId?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    id: number
    update: Date
    value: number
    carId: number
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectScalar = {
    id?: boolean
    update?: boolean
    value?: boolean
    carId?: boolean
  }

  export type PriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "update" | "value" | "carId", ExtArgs["result"]["priceHistory"]>
  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      update: Date
      value: number
      carId: number
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceHistories and returns the data saved in the database.
     * @param {PriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories and returns the data updated in the database.
     * @param {PriceHistoryUpdateManyAndReturnArgs} args - Arguments to update many PriceHistories.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceHistory model
   */
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<"PriceHistory", 'Int'>
    readonly update: FieldRef<"PriceHistory", 'DateTime'>
    readonly value: FieldRef<"PriceHistory", 'Int'>
    readonly carId: FieldRef<"PriceHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceHistory createManyAndReturn
   */
  export type PriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number
  }

  /**
   * PriceHistory updateManyAndReturn
   */
  export type PriceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to delete.
     */
    limit?: number
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarScalarFieldEnum: {
    id: 'id',
    olxId: 'olxId',
    brand: 'brand',
    model: 'model',
    manufactured: 'manufactured',
    price: 'price',
    displacement: 'displacement',
    milage: 'milage',
    fuel: 'fuel',
    transmission: 'transmission',
    torque: 'torque',
    type: 'type',
    color: 'color',
    views: 'views',
    createdAt: 'createdAt',
    olixCreatedAt: 'olixCreatedAt',
    sold: 'sold'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const RefreshedHistoryScalarFieldEnum: {
    id: 'id',
    update: 'update',
    value: 'value',
    carId: 'carId'
  };

  export type RefreshedHistoryScalarFieldEnum = (typeof RefreshedHistoryScalarFieldEnum)[keyof typeof RefreshedHistoryScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    id: 'id',
    update: 'update',
    value: 'value',
    carId: 'carId'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    olxId?: IntFilter<"Car"> | number
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    manufactured?: StringFilter<"Car"> | string
    price?: IntFilter<"Car"> | number
    displacement?: IntFilter<"Car"> | number
    milage?: IntFilter<"Car"> | number
    fuel?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    torque?: IntFilter<"Car"> | number
    type?: StringFilter<"Car"> | string
    color?: StringFilter<"Car"> | string
    views?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    olixCreatedAt?: IntFilter<"Car"> | number
    sold?: DateTimeNullableFilter<"Car"> | Date | string | null
    priceHistory?: PriceHistoryListRelationFilter
    refreshed?: RefreshedHistoryListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    olxId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    manufactured?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    fuel?: SortOrder
    transmission?: SortOrder
    torque?: SortOrder
    type?: SortOrder
    color?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    olixCreatedAt?: SortOrder
    sold?: SortOrderInput | SortOrder
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
    refreshed?: RefreshedHistoryOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    olxId?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    brand?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    manufactured?: StringFilter<"Car"> | string
    price?: IntFilter<"Car"> | number
    displacement?: IntFilter<"Car"> | number
    milage?: IntFilter<"Car"> | number
    fuel?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    torque?: IntFilter<"Car"> | number
    type?: StringFilter<"Car"> | string
    color?: StringFilter<"Car"> | string
    views?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    olixCreatedAt?: IntFilter<"Car"> | number
    sold?: DateTimeNullableFilter<"Car"> | Date | string | null
    priceHistory?: PriceHistoryListRelationFilter
    refreshed?: RefreshedHistoryListRelationFilter
  }, "id" | "olxId">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    olxId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    manufactured?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    fuel?: SortOrder
    transmission?: SortOrder
    torque?: SortOrder
    type?: SortOrder
    color?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    olixCreatedAt?: SortOrder
    sold?: SortOrderInput | SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    olxId?: IntWithAggregatesFilter<"Car"> | number
    brand?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    manufactured?: StringWithAggregatesFilter<"Car"> | string
    price?: IntWithAggregatesFilter<"Car"> | number
    displacement?: IntWithAggregatesFilter<"Car"> | number
    milage?: IntWithAggregatesFilter<"Car"> | number
    fuel?: StringWithAggregatesFilter<"Car"> | string
    transmission?: StringWithAggregatesFilter<"Car"> | string
    torque?: IntWithAggregatesFilter<"Car"> | number
    type?: StringWithAggregatesFilter<"Car"> | string
    color?: StringWithAggregatesFilter<"Car"> | string
    views?: IntWithAggregatesFilter<"Car"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    olixCreatedAt?: IntWithAggregatesFilter<"Car"> | number
    sold?: DateTimeNullableWithAggregatesFilter<"Car"> | Date | string | null
  }

  export type RefreshedHistoryWhereInput = {
    AND?: RefreshedHistoryWhereInput | RefreshedHistoryWhereInput[]
    OR?: RefreshedHistoryWhereInput[]
    NOT?: RefreshedHistoryWhereInput | RefreshedHistoryWhereInput[]
    id?: IntFilter<"RefreshedHistory"> | number
    update?: DateTimeFilter<"RefreshedHistory"> | Date | string
    value?: IntFilter<"RefreshedHistory"> | number
    carId?: IntFilter<"RefreshedHistory"> | number
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type RefreshedHistoryOrderByWithRelationInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type RefreshedHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RefreshedHistoryWhereInput | RefreshedHistoryWhereInput[]
    OR?: RefreshedHistoryWhereInput[]
    NOT?: RefreshedHistoryWhereInput | RefreshedHistoryWhereInput[]
    update?: DateTimeFilter<"RefreshedHistory"> | Date | string
    value?: IntFilter<"RefreshedHistory"> | number
    carId?: IntFilter<"RefreshedHistory"> | number
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type RefreshedHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
    _count?: RefreshedHistoryCountOrderByAggregateInput
    _avg?: RefreshedHistoryAvgOrderByAggregateInput
    _max?: RefreshedHistoryMaxOrderByAggregateInput
    _min?: RefreshedHistoryMinOrderByAggregateInput
    _sum?: RefreshedHistorySumOrderByAggregateInput
  }

  export type RefreshedHistoryScalarWhereWithAggregatesInput = {
    AND?: RefreshedHistoryScalarWhereWithAggregatesInput | RefreshedHistoryScalarWhereWithAggregatesInput[]
    OR?: RefreshedHistoryScalarWhereWithAggregatesInput[]
    NOT?: RefreshedHistoryScalarWhereWithAggregatesInput | RefreshedHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshedHistory"> | number
    update?: DateTimeWithAggregatesFilter<"RefreshedHistory"> | Date | string
    value?: IntWithAggregatesFilter<"RefreshedHistory"> | number
    carId?: IntWithAggregatesFilter<"RefreshedHistory"> | number
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    update?: DateTimeFilter<"PriceHistory"> | Date | string
    value?: IntFilter<"PriceHistory"> | number
    carId?: IntFilter<"PriceHistory"> | number
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    update?: DateTimeFilter<"PriceHistory"> | Date | string
    value?: IntFilter<"PriceHistory"> | number
    carId?: IntFilter<"PriceHistory"> | number
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceHistory"> | number
    update?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
    value?: IntWithAggregatesFilter<"PriceHistory"> | number
    carId?: IntWithAggregatesFilter<"PriceHistory"> | number
  }

  export type CarCreateInput = {
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
    priceHistory?: PriceHistoryCreateNestedManyWithoutCarInput
    refreshed?: RefreshedHistoryCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutCarInput
    refreshed?: RefreshedHistoryUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceHistory?: PriceHistoryUpdateManyWithoutCarNestedInput
    refreshed?: RefreshedHistoryUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutCarNestedInput
    refreshed?: RefreshedHistoryUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
  }

  export type CarUpdateManyMutationInput = {
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshedHistoryCreateInput = {
    update: Date | string
    value: number
    car: CarCreateNestedOneWithoutRefreshedInput
  }

  export type RefreshedHistoryUncheckedCreateInput = {
    id?: number
    update: Date | string
    value: number
    carId: number
  }

  export type RefreshedHistoryUpdateInput = {
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutRefreshedNestedInput
  }

  export type RefreshedHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshedHistoryCreateManyInput = {
    id?: number
    update: Date | string
    value: number
    carId: number
  }

  export type RefreshedHistoryUpdateManyMutationInput = {
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshedHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type PriceHistoryCreateInput = {
    update: Date | string
    value: number
    car: CarCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    id?: number
    update: Date | string
    value: number
    carId: number
  }

  export type PriceHistoryUpdateInput = {
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type PriceHistoryCreateManyInput = {
    id?: number
    update: Date | string
    value: number
    carId: number
  }

  export type PriceHistoryUpdateManyMutationInput = {
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type RefreshedHistoryListRelationFilter = {
    every?: RefreshedHistoryWhereInput
    some?: RefreshedHistoryWhereInput
    none?: RefreshedHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshedHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    olxId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    manufactured?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    fuel?: SortOrder
    transmission?: SortOrder
    torque?: SortOrder
    type?: SortOrder
    color?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    olixCreatedAt?: SortOrder
    sold?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    olxId?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    torque?: SortOrder
    views?: SortOrder
    olixCreatedAt?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    olxId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    manufactured?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    fuel?: SortOrder
    transmission?: SortOrder
    torque?: SortOrder
    type?: SortOrder
    color?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    olixCreatedAt?: SortOrder
    sold?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    olxId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    manufactured?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    fuel?: SortOrder
    transmission?: SortOrder
    torque?: SortOrder
    type?: SortOrder
    color?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    olixCreatedAt?: SortOrder
    sold?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    olxId?: SortOrder
    price?: SortOrder
    displacement?: SortOrder
    milage?: SortOrder
    torque?: SortOrder
    views?: SortOrder
    olixCreatedAt?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type RefreshedHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type RefreshedHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type RefreshedHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type RefreshedHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type RefreshedHistorySumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    update?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    carId?: SortOrder
  }

  export type PriceHistoryCreateNestedManyWithoutCarInput = {
    create?: XOR<PriceHistoryCreateWithoutCarInput, PriceHistoryUncheckedCreateWithoutCarInput> | PriceHistoryCreateWithoutCarInput[] | PriceHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutCarInput | PriceHistoryCreateOrConnectWithoutCarInput[]
    createMany?: PriceHistoryCreateManyCarInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type RefreshedHistoryCreateNestedManyWithoutCarInput = {
    create?: XOR<RefreshedHistoryCreateWithoutCarInput, RefreshedHistoryUncheckedCreateWithoutCarInput> | RefreshedHistoryCreateWithoutCarInput[] | RefreshedHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RefreshedHistoryCreateOrConnectWithoutCarInput | RefreshedHistoryCreateOrConnectWithoutCarInput[]
    createMany?: RefreshedHistoryCreateManyCarInputEnvelope
    connect?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<PriceHistoryCreateWithoutCarInput, PriceHistoryUncheckedCreateWithoutCarInput> | PriceHistoryCreateWithoutCarInput[] | PriceHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutCarInput | PriceHistoryCreateOrConnectWithoutCarInput[]
    createMany?: PriceHistoryCreateManyCarInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type RefreshedHistoryUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<RefreshedHistoryCreateWithoutCarInput, RefreshedHistoryUncheckedCreateWithoutCarInput> | RefreshedHistoryCreateWithoutCarInput[] | RefreshedHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RefreshedHistoryCreateOrConnectWithoutCarInput | RefreshedHistoryCreateOrConnectWithoutCarInput[]
    createMany?: RefreshedHistoryCreateManyCarInputEnvelope
    connect?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PriceHistoryUpdateManyWithoutCarNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutCarInput, PriceHistoryUncheckedCreateWithoutCarInput> | PriceHistoryCreateWithoutCarInput[] | PriceHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutCarInput | PriceHistoryCreateOrConnectWithoutCarInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutCarInput | PriceHistoryUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PriceHistoryCreateManyCarInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutCarInput | PriceHistoryUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutCarInput | PriceHistoryUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type RefreshedHistoryUpdateManyWithoutCarNestedInput = {
    create?: XOR<RefreshedHistoryCreateWithoutCarInput, RefreshedHistoryUncheckedCreateWithoutCarInput> | RefreshedHistoryCreateWithoutCarInput[] | RefreshedHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RefreshedHistoryCreateOrConnectWithoutCarInput | RefreshedHistoryCreateOrConnectWithoutCarInput[]
    upsert?: RefreshedHistoryUpsertWithWhereUniqueWithoutCarInput | RefreshedHistoryUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: RefreshedHistoryCreateManyCarInputEnvelope
    set?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    disconnect?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    delete?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    connect?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    update?: RefreshedHistoryUpdateWithWhereUniqueWithoutCarInput | RefreshedHistoryUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: RefreshedHistoryUpdateManyWithWhereWithoutCarInput | RefreshedHistoryUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: RefreshedHistoryScalarWhereInput | RefreshedHistoryScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutCarInput, PriceHistoryUncheckedCreateWithoutCarInput> | PriceHistoryCreateWithoutCarInput[] | PriceHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutCarInput | PriceHistoryCreateOrConnectWithoutCarInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutCarInput | PriceHistoryUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PriceHistoryCreateManyCarInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutCarInput | PriceHistoryUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutCarInput | PriceHistoryUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type RefreshedHistoryUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<RefreshedHistoryCreateWithoutCarInput, RefreshedHistoryUncheckedCreateWithoutCarInput> | RefreshedHistoryCreateWithoutCarInput[] | RefreshedHistoryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RefreshedHistoryCreateOrConnectWithoutCarInput | RefreshedHistoryCreateOrConnectWithoutCarInput[]
    upsert?: RefreshedHistoryUpsertWithWhereUniqueWithoutCarInput | RefreshedHistoryUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: RefreshedHistoryCreateManyCarInputEnvelope
    set?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    disconnect?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    delete?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    connect?: RefreshedHistoryWhereUniqueInput | RefreshedHistoryWhereUniqueInput[]
    update?: RefreshedHistoryUpdateWithWhereUniqueWithoutCarInput | RefreshedHistoryUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: RefreshedHistoryUpdateManyWithWhereWithoutCarInput | RefreshedHistoryUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: RefreshedHistoryScalarWhereInput | RefreshedHistoryScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutRefreshedInput = {
    create?: XOR<CarCreateWithoutRefreshedInput, CarUncheckedCreateWithoutRefreshedInput>
    connectOrCreate?: CarCreateOrConnectWithoutRefreshedInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutRefreshedNestedInput = {
    create?: XOR<CarCreateWithoutRefreshedInput, CarUncheckedCreateWithoutRefreshedInput>
    connectOrCreate?: CarCreateOrConnectWithoutRefreshedInput
    upsert?: CarUpsertWithoutRefreshedInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutRefreshedInput, CarUpdateWithoutRefreshedInput>, CarUncheckedUpdateWithoutRefreshedInput>
  }

  export type CarCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<CarCreateWithoutPriceHistoryInput, CarUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: CarCreateOrConnectWithoutPriceHistoryInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<CarCreateWithoutPriceHistoryInput, CarUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: CarCreateOrConnectWithoutPriceHistoryInput
    upsert?: CarUpsertWithoutPriceHistoryInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutPriceHistoryInput, CarUpdateWithoutPriceHistoryInput>, CarUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PriceHistoryCreateWithoutCarInput = {
    update: Date | string
    value: number
  }

  export type PriceHistoryUncheckedCreateWithoutCarInput = {
    id?: number
    update: Date | string
    value: number
  }

  export type PriceHistoryCreateOrConnectWithoutCarInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutCarInput, PriceHistoryUncheckedCreateWithoutCarInput>
  }

  export type PriceHistoryCreateManyCarInputEnvelope = {
    data: PriceHistoryCreateManyCarInput | PriceHistoryCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type RefreshedHistoryCreateWithoutCarInput = {
    update: Date | string
    value: number
  }

  export type RefreshedHistoryUncheckedCreateWithoutCarInput = {
    id?: number
    update: Date | string
    value: number
  }

  export type RefreshedHistoryCreateOrConnectWithoutCarInput = {
    where: RefreshedHistoryWhereUniqueInput
    create: XOR<RefreshedHistoryCreateWithoutCarInput, RefreshedHistoryUncheckedCreateWithoutCarInput>
  }

  export type RefreshedHistoryCreateManyCarInputEnvelope = {
    data: RefreshedHistoryCreateManyCarInput | RefreshedHistoryCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutCarInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutCarInput, PriceHistoryUncheckedUpdateWithoutCarInput>
    create: XOR<PriceHistoryCreateWithoutCarInput, PriceHistoryUncheckedCreateWithoutCarInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutCarInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutCarInput, PriceHistoryUncheckedUpdateWithoutCarInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutCarInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutCarInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    update?: DateTimeFilter<"PriceHistory"> | Date | string
    value?: IntFilter<"PriceHistory"> | number
    carId?: IntFilter<"PriceHistory"> | number
  }

  export type RefreshedHistoryUpsertWithWhereUniqueWithoutCarInput = {
    where: RefreshedHistoryWhereUniqueInput
    update: XOR<RefreshedHistoryUpdateWithoutCarInput, RefreshedHistoryUncheckedUpdateWithoutCarInput>
    create: XOR<RefreshedHistoryCreateWithoutCarInput, RefreshedHistoryUncheckedCreateWithoutCarInput>
  }

  export type RefreshedHistoryUpdateWithWhereUniqueWithoutCarInput = {
    where: RefreshedHistoryWhereUniqueInput
    data: XOR<RefreshedHistoryUpdateWithoutCarInput, RefreshedHistoryUncheckedUpdateWithoutCarInput>
  }

  export type RefreshedHistoryUpdateManyWithWhereWithoutCarInput = {
    where: RefreshedHistoryScalarWhereInput
    data: XOR<RefreshedHistoryUpdateManyMutationInput, RefreshedHistoryUncheckedUpdateManyWithoutCarInput>
  }

  export type RefreshedHistoryScalarWhereInput = {
    AND?: RefreshedHistoryScalarWhereInput | RefreshedHistoryScalarWhereInput[]
    OR?: RefreshedHistoryScalarWhereInput[]
    NOT?: RefreshedHistoryScalarWhereInput | RefreshedHistoryScalarWhereInput[]
    id?: IntFilter<"RefreshedHistory"> | number
    update?: DateTimeFilter<"RefreshedHistory"> | Date | string
    value?: IntFilter<"RefreshedHistory"> | number
    carId?: IntFilter<"RefreshedHistory"> | number
  }

  export type CarCreateWithoutRefreshedInput = {
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
    priceHistory?: PriceHistoryCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutRefreshedInput = {
    id?: number
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutRefreshedInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutRefreshedInput, CarUncheckedCreateWithoutRefreshedInput>
  }

  export type CarUpsertWithoutRefreshedInput = {
    update: XOR<CarUpdateWithoutRefreshedInput, CarUncheckedUpdateWithoutRefreshedInput>
    create: XOR<CarCreateWithoutRefreshedInput, CarUncheckedCreateWithoutRefreshedInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutRefreshedInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutRefreshedInput, CarUncheckedUpdateWithoutRefreshedInput>
  }

  export type CarUpdateWithoutRefreshedInput = {
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceHistory?: PriceHistoryUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutRefreshedInput = {
    id?: IntFieldUpdateOperationsInput | number
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutPriceHistoryInput = {
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
    refreshed?: RefreshedHistoryCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutPriceHistoryInput = {
    id?: number
    olxId: number
    brand: string
    model: string
    manufactured: string
    price: number
    displacement: number
    milage: number
    fuel: string
    transmission: string
    torque: number
    type: string
    color: string
    views: number
    createdAt?: Date | string
    olixCreatedAt: number
    sold?: Date | string | null
    refreshed?: RefreshedHistoryUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutPriceHistoryInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutPriceHistoryInput, CarUncheckedCreateWithoutPriceHistoryInput>
  }

  export type CarUpsertWithoutPriceHistoryInput = {
    update: XOR<CarUpdateWithoutPriceHistoryInput, CarUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<CarCreateWithoutPriceHistoryInput, CarUncheckedCreateWithoutPriceHistoryInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutPriceHistoryInput, CarUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type CarUpdateWithoutPriceHistoryInput = {
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed?: RefreshedHistoryUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutPriceHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    olxId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    manufactured?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    displacement?: IntFieldUpdateOperationsInput | number
    milage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    torque?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    olixCreatedAt?: IntFieldUpdateOperationsInput | number
    sold?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshed?: RefreshedHistoryUncheckedUpdateManyWithoutCarNestedInput
  }

  export type PriceHistoryCreateManyCarInput = {
    id?: number
    update: Date | string
    value: number
  }

  export type RefreshedHistoryCreateManyCarInput = {
    id?: number
    update: Date | string
    value: number
  }

  export type PriceHistoryUpdateWithoutCarInput = {
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type PriceHistoryUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type PriceHistoryUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshedHistoryUpdateWithoutCarInput = {
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshedHistoryUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshedHistoryUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    update?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}