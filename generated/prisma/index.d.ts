
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model ActionStep
 * 
 */
export type ActionStep = $Result.DefaultSelection<Prisma.$ActionStepPayload>
/**
 * Model StepNote
 * 
 */
export type StepNote = $Result.DefaultSelection<Prisma.$StepNotePayload>
/**
 * Model ProgressNote
 * 
 */
export type ProgressNote = $Result.DefaultSelection<Prisma.$ProgressNotePayload>
/**
 * Model WeeklyReport
 * 
 */
export type WeeklyReport = $Result.DefaultSelection<Prisma.$WeeklyReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionStep`: Exposes CRUD operations for the **ActionStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionSteps
    * const actionSteps = await prisma.actionStep.findMany()
    * ```
    */
  get actionStep(): Prisma.ActionStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepNote`: Exposes CRUD operations for the **StepNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepNotes
    * const stepNotes = await prisma.stepNote.findMany()
    * ```
    */
  get stepNote(): Prisma.StepNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressNote`: Exposes CRUD operations for the **ProgressNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressNotes
    * const progressNotes = await prisma.progressNote.findMany()
    * ```
    */
  get progressNote(): Prisma.ProgressNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyReport`: Exposes CRUD operations for the **WeeklyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyReports
    * const weeklyReports = await prisma.weeklyReport.findMany()
    * ```
    */
  get weeklyReport(): Prisma.WeeklyReportDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Task: 'Task',
    ActionStep: 'ActionStep',
    StepNote: 'StepNote',
    ProgressNote: 'ProgressNote',
    WeeklyReport: 'WeeklyReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "task" | "actionStep" | "stepNote" | "progressNote" | "weeklyReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      ActionStep: {
        payload: Prisma.$ActionStepPayload<ExtArgs>
        fields: Prisma.ActionStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          findFirst: {
            args: Prisma.ActionStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          findMany: {
            args: Prisma.ActionStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>[]
          }
          create: {
            args: Prisma.ActionStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          createMany: {
            args: Prisma.ActionStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>[]
          }
          delete: {
            args: Prisma.ActionStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          update: {
            args: Prisma.ActionStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          deleteMany: {
            args: Prisma.ActionStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>[]
          }
          upsert: {
            args: Prisma.ActionStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionStepPayload>
          }
          aggregate: {
            args: Prisma.ActionStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionStep>
          }
          groupBy: {
            args: Prisma.ActionStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionStepCountArgs<ExtArgs>
            result: $Utils.Optional<ActionStepCountAggregateOutputType> | number
          }
        }
      }
      StepNote: {
        payload: Prisma.$StepNotePayload<ExtArgs>
        fields: Prisma.StepNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>
          }
          findFirst: {
            args: Prisma.StepNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>
          }
          findMany: {
            args: Prisma.StepNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>[]
          }
          create: {
            args: Prisma.StepNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>
          }
          createMany: {
            args: Prisma.StepNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>[]
          }
          delete: {
            args: Prisma.StepNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>
          }
          update: {
            args: Prisma.StepNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>
          }
          deleteMany: {
            args: Prisma.StepNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>[]
          }
          upsert: {
            args: Prisma.StepNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepNotePayload>
          }
          aggregate: {
            args: Prisma.StepNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepNote>
          }
          groupBy: {
            args: Prisma.StepNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepNoteCountArgs<ExtArgs>
            result: $Utils.Optional<StepNoteCountAggregateOutputType> | number
          }
        }
      }
      ProgressNote: {
        payload: Prisma.$ProgressNotePayload<ExtArgs>
        fields: Prisma.ProgressNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>
          }
          findFirst: {
            args: Prisma.ProgressNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>
          }
          findMany: {
            args: Prisma.ProgressNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>[]
          }
          create: {
            args: Prisma.ProgressNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>
          }
          createMany: {
            args: Prisma.ProgressNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>[]
          }
          delete: {
            args: Prisma.ProgressNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>
          }
          update: {
            args: Prisma.ProgressNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>
          }
          deleteMany: {
            args: Prisma.ProgressNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>[]
          }
          upsert: {
            args: Prisma.ProgressNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressNotePayload>
          }
          aggregate: {
            args: Prisma.ProgressNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressNote>
          }
          groupBy: {
            args: Prisma.ProgressNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressNoteCountAggregateOutputType> | number
          }
        }
      }
      WeeklyReport: {
        payload: Prisma.$WeeklyReportPayload<ExtArgs>
        fields: Prisma.WeeklyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          findFirst: {
            args: Prisma.WeeklyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          findMany: {
            args: Prisma.WeeklyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          create: {
            args: Prisma.WeeklyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          createMany: {
            args: Prisma.WeeklyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          delete: {
            args: Prisma.WeeklyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          update: {
            args: Prisma.WeeklyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          aggregate: {
            args: Prisma.WeeklyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyReport>
          }
          groupBy: {
            args: Prisma.WeeklyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyReportCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyReportCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    task?: TaskOmit
    actionStep?: ActionStepOmit
    stepNote?: StepNoteOmit
    progressNote?: ProgressNoteOmit
    weeklyReport?: WeeklyReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedTasks: number
    createdTasks: number
    stepNotes: number
    progressNotes: number
    weeklyReports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    stepNotes?: boolean | UserCountOutputTypeCountStepNotesArgs
    progressNotes?: boolean | UserCountOutputTypeCountProgressNotesArgs
    weeklyReports?: boolean | UserCountOutputTypeCountWeeklyReportsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyReportWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    actionSteps: number
    progressNotes: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionSteps?: boolean | TaskCountOutputTypeCountActionStepsArgs
    progressNotes?: boolean | TaskCountOutputTypeCountProgressNotesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountActionStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionStepWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountProgressNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressNoteWhereInput
  }


  /**
   * Count Type ActionStepCountOutputType
   */

  export type ActionStepCountOutputType = {
    notes: number
  }

  export type ActionStepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | ActionStepCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * ActionStepCountOutputType without action
   */
  export type ActionStepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStepCountOutputType
     */
    select?: ActionStepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActionStepCountOutputType without action
   */
  export type ActionStepCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepNoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    location: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    location: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    location: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string | null
    location: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    stepNotes?: boolean | User$stepNotesArgs<ExtArgs>
    progressNotes?: boolean | User$progressNotesArgs<ExtArgs>
    weeklyReports?: boolean | User$weeklyReportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "location" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    stepNotes?: boolean | User$stepNotesArgs<ExtArgs>
    progressNotes?: boolean | User$progressNotesArgs<ExtArgs>
    weeklyReports?: boolean | User$weeklyReportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      stepNotes: Prisma.$StepNotePayload<ExtArgs>[]
      progressNotes: Prisma.$ProgressNotePayload<ExtArgs>[]
      weeklyReports: Prisma.$WeeklyReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      location: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stepNotes<T extends User$stepNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$stepNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressNotes<T extends User$progressNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$progressNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyReports<T extends User$weeklyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.stepNotes
   */
  export type User$stepNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    where?: StepNoteWhereInput
    orderBy?: StepNoteOrderByWithRelationInput | StepNoteOrderByWithRelationInput[]
    cursor?: StepNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepNoteScalarFieldEnum | StepNoteScalarFieldEnum[]
  }

  /**
   * User.progressNotes
   */
  export type User$progressNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    where?: ProgressNoteWhereInput
    orderBy?: ProgressNoteOrderByWithRelationInput | ProgressNoteOrderByWithRelationInput[]
    cursor?: ProgressNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressNoteScalarFieldEnum | ProgressNoteScalarFieldEnum[]
  }

  /**
   * User.weeklyReports
   */
  export type User$weeklyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    where?: WeeklyReportWhereInput
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    cursor?: WeeklyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    assigneeId: string | null
    createdById: string | null
    createdAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    assigneeId: string | null
    createdById: string | null
    createdAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    assigneeId: number
    createdById: number
    createdAt: number
    completedAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assigneeId?: true
    createdById?: true
    createdAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assigneeId?: true
    createdById?: true
    createdAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assigneeId?: true
    createdById?: true
    createdAt?: true
    completedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.Priority
    dueDate: Date
    assigneeId: string
    createdById: string
    createdAt: Date
    completedAt: Date | null
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assigneeId?: boolean
    createdById?: boolean
    createdAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    actionSteps?: boolean | Task$actionStepsArgs<ExtArgs>
    progressNotes?: boolean | Task$progressNotesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assigneeId?: boolean
    createdById?: boolean
    createdAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assigneeId?: boolean
    createdById?: boolean
    createdAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assigneeId?: boolean
    createdById?: boolean
    createdAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "dueDate" | "assigneeId" | "createdById" | "createdAt" | "completedAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    actionSteps?: boolean | Task$actionStepsArgs<ExtArgs>
    progressNotes?: boolean | Task$progressNotesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignee: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      actionSteps: Prisma.$ActionStepPayload<ExtArgs>[]
      progressNotes: Prisma.$ProgressNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.Priority
      dueDate: Date
      assigneeId: string
      createdById: string
      createdAt: Date
      completedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionSteps<T extends Task$actionStepsArgs<ExtArgs> = {}>(args?: Subset<T, Task$actionStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressNotes<T extends Task$progressNotesArgs<ExtArgs> = {}>(args?: Subset<T, Task$progressNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly assigneeId: FieldRef<"Task", 'String'>
    readonly createdById: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.actionSteps
   */
  export type Task$actionStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    where?: ActionStepWhereInput
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    cursor?: ActionStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * Task.progressNotes
   */
  export type Task$progressNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    where?: ProgressNoteWhereInput
    orderBy?: ProgressNoteOrderByWithRelationInput | ProgressNoteOrderByWithRelationInput[]
    cursor?: ProgressNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressNoteScalarFieldEnum | ProgressNoteScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model ActionStep
   */

  export type AggregateActionStep = {
    _count: ActionStepCountAggregateOutputType | null
    _min: ActionStepMinAggregateOutputType | null
    _max: ActionStepMaxAggregateOutputType | null
  }

  export type ActionStepMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActionStepMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActionStepCountAggregateOutputType = {
    id: number
    taskId: number
    title: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActionStepMinAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActionStepMaxAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActionStepCountAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActionStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionStep to aggregate.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionSteps
    **/
    _count?: true | ActionStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionStepMaxAggregateInputType
  }

  export type GetActionStepAggregateType<T extends ActionStepAggregateArgs> = {
        [P in keyof T & keyof AggregateActionStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionStep[P]>
      : GetScalarType<T[P], AggregateActionStep[P]>
  }




  export type ActionStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionStepWhereInput
    orderBy?: ActionStepOrderByWithAggregationInput | ActionStepOrderByWithAggregationInput[]
    by: ActionStepScalarFieldEnum[] | ActionStepScalarFieldEnum
    having?: ActionStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionStepCountAggregateInputType | true
    _min?: ActionStepMinAggregateInputType
    _max?: ActionStepMaxAggregateInputType
  }

  export type ActionStepGroupByOutputType = {
    id: string
    taskId: string
    title: string
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ActionStepCountAggregateOutputType | null
    _min: ActionStepMinAggregateOutputType | null
    _max: ActionStepMaxAggregateOutputType | null
  }

  type GetActionStepGroupByPayload<T extends ActionStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionStepGroupByOutputType[P]>
            : GetScalarType<T[P], ActionStepGroupByOutputType[P]>
        }
      >
    >


  export type ActionStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    notes?: boolean | ActionStep$notesArgs<ExtArgs>
    _count?: boolean | ActionStepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionStep"]>

  export type ActionStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionStep"]>

  export type ActionStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionStep"]>

  export type ActionStepSelectScalar = {
    id?: boolean
    taskId?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActionStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "title" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["actionStep"]>
  export type ActionStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    notes?: boolean | ActionStep$notesArgs<ExtArgs>
    _count?: boolean | ActionStepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActionStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type ActionStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $ActionStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionStep"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      notes: Prisma.$StepNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      title: string
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["actionStep"]>
    composites: {}
  }

  type ActionStepGetPayload<S extends boolean | null | undefined | ActionStepDefaultArgs> = $Result.GetResult<Prisma.$ActionStepPayload, S>

  type ActionStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionStepCountAggregateInputType | true
    }

  export interface ActionStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionStep'], meta: { name: 'ActionStep' } }
    /**
     * Find zero or one ActionStep that matches the filter.
     * @param {ActionStepFindUniqueArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionStepFindUniqueArgs>(args: SelectSubset<T, ActionStepFindUniqueArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionStepFindUniqueOrThrowArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionStepFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepFindFirstArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionStepFindFirstArgs>(args?: SelectSubset<T, ActionStepFindFirstArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepFindFirstOrThrowArgs} args - Arguments to find a ActionStep
     * @example
     * // Get one ActionStep
     * const actionStep = await prisma.actionStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionStepFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionSteps
     * const actionSteps = await prisma.actionStep.findMany()
     * 
     * // Get first 10 ActionSteps
     * const actionSteps = await prisma.actionStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionStepWithIdOnly = await prisma.actionStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionStepFindManyArgs>(args?: SelectSubset<T, ActionStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionStep.
     * @param {ActionStepCreateArgs} args - Arguments to create a ActionStep.
     * @example
     * // Create one ActionStep
     * const ActionStep = await prisma.actionStep.create({
     *   data: {
     *     // ... data to create a ActionStep
     *   }
     * })
     * 
     */
    create<T extends ActionStepCreateArgs>(args: SelectSubset<T, ActionStepCreateArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionSteps.
     * @param {ActionStepCreateManyArgs} args - Arguments to create many ActionSteps.
     * @example
     * // Create many ActionSteps
     * const actionStep = await prisma.actionStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionStepCreateManyArgs>(args?: SelectSubset<T, ActionStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionSteps and returns the data saved in the database.
     * @param {ActionStepCreateManyAndReturnArgs} args - Arguments to create many ActionSteps.
     * @example
     * // Create many ActionSteps
     * const actionStep = await prisma.actionStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionSteps and only return the `id`
     * const actionStepWithIdOnly = await prisma.actionStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionStepCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionStep.
     * @param {ActionStepDeleteArgs} args - Arguments to delete one ActionStep.
     * @example
     * // Delete one ActionStep
     * const ActionStep = await prisma.actionStep.delete({
     *   where: {
     *     // ... filter to delete one ActionStep
     *   }
     * })
     * 
     */
    delete<T extends ActionStepDeleteArgs>(args: SelectSubset<T, ActionStepDeleteArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionStep.
     * @param {ActionStepUpdateArgs} args - Arguments to update one ActionStep.
     * @example
     * // Update one ActionStep
     * const actionStep = await prisma.actionStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionStepUpdateArgs>(args: SelectSubset<T, ActionStepUpdateArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionSteps.
     * @param {ActionStepDeleteManyArgs} args - Arguments to filter ActionSteps to delete.
     * @example
     * // Delete a few ActionSteps
     * const { count } = await prisma.actionStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionStepDeleteManyArgs>(args?: SelectSubset<T, ActionStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionSteps
     * const actionStep = await prisma.actionStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionStepUpdateManyArgs>(args: SelectSubset<T, ActionStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionSteps and returns the data updated in the database.
     * @param {ActionStepUpdateManyAndReturnArgs} args - Arguments to update many ActionSteps.
     * @example
     * // Update many ActionSteps
     * const actionStep = await prisma.actionStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionSteps and only return the `id`
     * const actionStepWithIdOnly = await prisma.actionStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActionStepUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionStep.
     * @param {ActionStepUpsertArgs} args - Arguments to update or create a ActionStep.
     * @example
     * // Update or create a ActionStep
     * const actionStep = await prisma.actionStep.upsert({
     *   create: {
     *     // ... data to create a ActionStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionStep we want to update
     *   }
     * })
     */
    upsert<T extends ActionStepUpsertArgs>(args: SelectSubset<T, ActionStepUpsertArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepCountArgs} args - Arguments to filter ActionSteps to count.
     * @example
     * // Count the number of ActionSteps
     * const count = await prisma.actionStep.count({
     *   where: {
     *     // ... the filter for the ActionSteps we want to count
     *   }
     * })
    **/
    count<T extends ActionStepCountArgs>(
      args?: Subset<T, ActionStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionStepAggregateArgs>(args: Subset<T, ActionStepAggregateArgs>): Prisma.PrismaPromise<GetActionStepAggregateType<T>>

    /**
     * Group by ActionStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionStepGroupByArgs} args - Group by arguments.
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
      T extends ActionStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionStepGroupByArgs['orderBy'] }
        : { orderBy?: ActionStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionStep model
   */
  readonly fields: ActionStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends ActionStep$notesArgs<ExtArgs> = {}>(args?: Subset<T, ActionStep$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ActionStep model
   */
  interface ActionStepFieldRefs {
    readonly id: FieldRef<"ActionStep", 'String'>
    readonly taskId: FieldRef<"ActionStep", 'String'>
    readonly title: FieldRef<"ActionStep", 'String'>
    readonly completed: FieldRef<"ActionStep", 'Boolean'>
    readonly createdAt: FieldRef<"ActionStep", 'DateTime'>
    readonly updatedAt: FieldRef<"ActionStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActionStep findUnique
   */
  export type ActionStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep findUniqueOrThrow
   */
  export type ActionStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep findFirst
   */
  export type ActionStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionSteps.
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionSteps.
     */
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * ActionStep findFirstOrThrow
   */
  export type ActionStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionStep to fetch.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionSteps.
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionSteps.
     */
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * ActionStep findMany
   */
  export type ActionStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter, which ActionSteps to fetch.
     */
    where?: ActionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionSteps to fetch.
     */
    orderBy?: ActionStepOrderByWithRelationInput | ActionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionSteps.
     */
    cursor?: ActionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionSteps.
     */
    skip?: number
    distinct?: ActionStepScalarFieldEnum | ActionStepScalarFieldEnum[]
  }

  /**
   * ActionStep create
   */
  export type ActionStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionStep.
     */
    data: XOR<ActionStepCreateInput, ActionStepUncheckedCreateInput>
  }

  /**
   * ActionStep createMany
   */
  export type ActionStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionSteps.
     */
    data: ActionStepCreateManyInput | ActionStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionStep createManyAndReturn
   */
  export type ActionStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * The data used to create many ActionSteps.
     */
    data: ActionStepCreateManyInput | ActionStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionStep update
   */
  export type ActionStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionStep.
     */
    data: XOR<ActionStepUpdateInput, ActionStepUncheckedUpdateInput>
    /**
     * Choose, which ActionStep to update.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep updateMany
   */
  export type ActionStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionSteps.
     */
    data: XOR<ActionStepUpdateManyMutationInput, ActionStepUncheckedUpdateManyInput>
    /**
     * Filter which ActionSteps to update
     */
    where?: ActionStepWhereInput
    /**
     * Limit how many ActionSteps to update.
     */
    limit?: number
  }

  /**
   * ActionStep updateManyAndReturn
   */
  export type ActionStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * The data used to update ActionSteps.
     */
    data: XOR<ActionStepUpdateManyMutationInput, ActionStepUncheckedUpdateManyInput>
    /**
     * Filter which ActionSteps to update
     */
    where?: ActionStepWhereInput
    /**
     * Limit how many ActionSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionStep upsert
   */
  export type ActionStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionStep to update in case it exists.
     */
    where: ActionStepWhereUniqueInput
    /**
     * In case the ActionStep found by the `where` argument doesn't exist, create a new ActionStep with this data.
     */
    create: XOR<ActionStepCreateInput, ActionStepUncheckedCreateInput>
    /**
     * In case the ActionStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionStepUpdateInput, ActionStepUncheckedUpdateInput>
  }

  /**
   * ActionStep delete
   */
  export type ActionStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
    /**
     * Filter which ActionStep to delete.
     */
    where: ActionStepWhereUniqueInput
  }

  /**
   * ActionStep deleteMany
   */
  export type ActionStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionSteps to delete
     */
    where?: ActionStepWhereInput
    /**
     * Limit how many ActionSteps to delete.
     */
    limit?: number
  }

  /**
   * ActionStep.notes
   */
  export type ActionStep$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    where?: StepNoteWhereInput
    orderBy?: StepNoteOrderByWithRelationInput | StepNoteOrderByWithRelationInput[]
    cursor?: StepNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepNoteScalarFieldEnum | StepNoteScalarFieldEnum[]
  }

  /**
   * ActionStep without action
   */
  export type ActionStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionStep
     */
    select?: ActionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionStep
     */
    omit?: ActionStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionStepInclude<ExtArgs> | null
  }


  /**
   * Model StepNote
   */

  export type AggregateStepNote = {
    _count: StepNoteCountAggregateOutputType | null
    _min: StepNoteMinAggregateOutputType | null
    _max: StepNoteMaxAggregateOutputType | null
  }

  export type StepNoteMinAggregateOutputType = {
    id: string | null
    stepId: string | null
    content: string | null
    authorName: string | null
    authorId: string | null
    timestamp: Date | null
  }

  export type StepNoteMaxAggregateOutputType = {
    id: string | null
    stepId: string | null
    content: string | null
    authorName: string | null
    authorId: string | null
    timestamp: Date | null
  }

  export type StepNoteCountAggregateOutputType = {
    id: number
    stepId: number
    content: number
    authorName: number
    authorId: number
    timestamp: number
    _all: number
  }


  export type StepNoteMinAggregateInputType = {
    id?: true
    stepId?: true
    content?: true
    authorName?: true
    authorId?: true
    timestamp?: true
  }

  export type StepNoteMaxAggregateInputType = {
    id?: true
    stepId?: true
    content?: true
    authorName?: true
    authorId?: true
    timestamp?: true
  }

  export type StepNoteCountAggregateInputType = {
    id?: true
    stepId?: true
    content?: true
    authorName?: true
    authorId?: true
    timestamp?: true
    _all?: true
  }

  export type StepNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepNote to aggregate.
     */
    where?: StepNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepNotes to fetch.
     */
    orderBy?: StepNoteOrderByWithRelationInput | StepNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepNotes
    **/
    _count?: true | StepNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepNoteMaxAggregateInputType
  }

  export type GetStepNoteAggregateType<T extends StepNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateStepNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepNote[P]>
      : GetScalarType<T[P], AggregateStepNote[P]>
  }




  export type StepNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepNoteWhereInput
    orderBy?: StepNoteOrderByWithAggregationInput | StepNoteOrderByWithAggregationInput[]
    by: StepNoteScalarFieldEnum[] | StepNoteScalarFieldEnum
    having?: StepNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepNoteCountAggregateInputType | true
    _min?: StepNoteMinAggregateInputType
    _max?: StepNoteMaxAggregateInputType
  }

  export type StepNoteGroupByOutputType = {
    id: string
    stepId: string
    content: string
    authorName: string
    authorId: string
    timestamp: Date
    _count: StepNoteCountAggregateOutputType | null
    _min: StepNoteMinAggregateOutputType | null
    _max: StepNoteMaxAggregateOutputType | null
  }

  type GetStepNoteGroupByPayload<T extends StepNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepNoteGroupByOutputType[P]>
            : GetScalarType<T[P], StepNoteGroupByOutputType[P]>
        }
      >
    >


  export type StepNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
    step?: boolean | ActionStepDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepNote"]>

  export type StepNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
    step?: boolean | ActionStepDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepNote"]>

  export type StepNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
    step?: boolean | ActionStepDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepNote"]>

  export type StepNoteSelectScalar = {
    id?: boolean
    stepId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
  }

  export type StepNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stepId" | "content" | "authorName" | "authorId" | "timestamp", ExtArgs["result"]["stepNote"]>
  export type StepNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | ActionStepDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | ActionStepDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | ActionStepDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StepNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepNote"
    objects: {
      step: Prisma.$ActionStepPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stepId: string
      content: string
      authorName: string
      authorId: string
      timestamp: Date
    }, ExtArgs["result"]["stepNote"]>
    composites: {}
  }

  type StepNoteGetPayload<S extends boolean | null | undefined | StepNoteDefaultArgs> = $Result.GetResult<Prisma.$StepNotePayload, S>

  type StepNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepNoteCountAggregateInputType | true
    }

  export interface StepNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepNote'], meta: { name: 'StepNote' } }
    /**
     * Find zero or one StepNote that matches the filter.
     * @param {StepNoteFindUniqueArgs} args - Arguments to find a StepNote
     * @example
     * // Get one StepNote
     * const stepNote = await prisma.stepNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepNoteFindUniqueArgs>(args: SelectSubset<T, StepNoteFindUniqueArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StepNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepNoteFindUniqueOrThrowArgs} args - Arguments to find a StepNote
     * @example
     * // Get one StepNote
     * const stepNote = await prisma.stepNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, StepNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteFindFirstArgs} args - Arguments to find a StepNote
     * @example
     * // Get one StepNote
     * const stepNote = await prisma.stepNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepNoteFindFirstArgs>(args?: SelectSubset<T, StepNoteFindFirstArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteFindFirstOrThrowArgs} args - Arguments to find a StepNote
     * @example
     * // Get one StepNote
     * const stepNote = await prisma.stepNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, StepNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepNotes
     * const stepNotes = await prisma.stepNote.findMany()
     * 
     * // Get first 10 StepNotes
     * const stepNotes = await prisma.stepNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepNoteWithIdOnly = await prisma.stepNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepNoteFindManyArgs>(args?: SelectSubset<T, StepNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StepNote.
     * @param {StepNoteCreateArgs} args - Arguments to create a StepNote.
     * @example
     * // Create one StepNote
     * const StepNote = await prisma.stepNote.create({
     *   data: {
     *     // ... data to create a StepNote
     *   }
     * })
     * 
     */
    create<T extends StepNoteCreateArgs>(args: SelectSubset<T, StepNoteCreateArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StepNotes.
     * @param {StepNoteCreateManyArgs} args - Arguments to create many StepNotes.
     * @example
     * // Create many StepNotes
     * const stepNote = await prisma.stepNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepNoteCreateManyArgs>(args?: SelectSubset<T, StepNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StepNotes and returns the data saved in the database.
     * @param {StepNoteCreateManyAndReturnArgs} args - Arguments to create many StepNotes.
     * @example
     * // Create many StepNotes
     * const stepNote = await prisma.stepNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StepNotes and only return the `id`
     * const stepNoteWithIdOnly = await prisma.stepNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, StepNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StepNote.
     * @param {StepNoteDeleteArgs} args - Arguments to delete one StepNote.
     * @example
     * // Delete one StepNote
     * const StepNote = await prisma.stepNote.delete({
     *   where: {
     *     // ... filter to delete one StepNote
     *   }
     * })
     * 
     */
    delete<T extends StepNoteDeleteArgs>(args: SelectSubset<T, StepNoteDeleteArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StepNote.
     * @param {StepNoteUpdateArgs} args - Arguments to update one StepNote.
     * @example
     * // Update one StepNote
     * const stepNote = await prisma.stepNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepNoteUpdateArgs>(args: SelectSubset<T, StepNoteUpdateArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StepNotes.
     * @param {StepNoteDeleteManyArgs} args - Arguments to filter StepNotes to delete.
     * @example
     * // Delete a few StepNotes
     * const { count } = await prisma.stepNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepNoteDeleteManyArgs>(args?: SelectSubset<T, StepNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepNotes
     * const stepNote = await prisma.stepNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepNoteUpdateManyArgs>(args: SelectSubset<T, StepNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepNotes and returns the data updated in the database.
     * @param {StepNoteUpdateManyAndReturnArgs} args - Arguments to update many StepNotes.
     * @example
     * // Update many StepNotes
     * const stepNote = await prisma.stepNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StepNotes and only return the `id`
     * const stepNoteWithIdOnly = await prisma.stepNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends StepNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, StepNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StepNote.
     * @param {StepNoteUpsertArgs} args - Arguments to update or create a StepNote.
     * @example
     * // Update or create a StepNote
     * const stepNote = await prisma.stepNote.upsert({
     *   create: {
     *     // ... data to create a StepNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepNote we want to update
     *   }
     * })
     */
    upsert<T extends StepNoteUpsertArgs>(args: SelectSubset<T, StepNoteUpsertArgs<ExtArgs>>): Prisma__StepNoteClient<$Result.GetResult<Prisma.$StepNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StepNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteCountArgs} args - Arguments to filter StepNotes to count.
     * @example
     * // Count the number of StepNotes
     * const count = await prisma.stepNote.count({
     *   where: {
     *     // ... the filter for the StepNotes we want to count
     *   }
     * })
    **/
    count<T extends StepNoteCountArgs>(
      args?: Subset<T, StepNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepNoteAggregateArgs>(args: Subset<T, StepNoteAggregateArgs>): Prisma.PrismaPromise<GetStepNoteAggregateType<T>>

    /**
     * Group by StepNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepNoteGroupByArgs} args - Group by arguments.
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
      T extends StepNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepNoteGroupByArgs['orderBy'] }
        : { orderBy?: StepNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepNote model
   */
  readonly fields: StepNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    step<T extends ActionStepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionStepDefaultArgs<ExtArgs>>): Prisma__ActionStepClient<$Result.GetResult<Prisma.$ActionStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StepNote model
   */
  interface StepNoteFieldRefs {
    readonly id: FieldRef<"StepNote", 'String'>
    readonly stepId: FieldRef<"StepNote", 'String'>
    readonly content: FieldRef<"StepNote", 'String'>
    readonly authorName: FieldRef<"StepNote", 'String'>
    readonly authorId: FieldRef<"StepNote", 'String'>
    readonly timestamp: FieldRef<"StepNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StepNote findUnique
   */
  export type StepNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * Filter, which StepNote to fetch.
     */
    where: StepNoteWhereUniqueInput
  }

  /**
   * StepNote findUniqueOrThrow
   */
  export type StepNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * Filter, which StepNote to fetch.
     */
    where: StepNoteWhereUniqueInput
  }

  /**
   * StepNote findFirst
   */
  export type StepNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * Filter, which StepNote to fetch.
     */
    where?: StepNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepNotes to fetch.
     */
    orderBy?: StepNoteOrderByWithRelationInput | StepNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepNotes.
     */
    cursor?: StepNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepNotes.
     */
    distinct?: StepNoteScalarFieldEnum | StepNoteScalarFieldEnum[]
  }

  /**
   * StepNote findFirstOrThrow
   */
  export type StepNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * Filter, which StepNote to fetch.
     */
    where?: StepNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepNotes to fetch.
     */
    orderBy?: StepNoteOrderByWithRelationInput | StepNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepNotes.
     */
    cursor?: StepNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepNotes.
     */
    distinct?: StepNoteScalarFieldEnum | StepNoteScalarFieldEnum[]
  }

  /**
   * StepNote findMany
   */
  export type StepNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * Filter, which StepNotes to fetch.
     */
    where?: StepNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepNotes to fetch.
     */
    orderBy?: StepNoteOrderByWithRelationInput | StepNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepNotes.
     */
    cursor?: StepNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepNotes.
     */
    skip?: number
    distinct?: StepNoteScalarFieldEnum | StepNoteScalarFieldEnum[]
  }

  /**
   * StepNote create
   */
  export type StepNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a StepNote.
     */
    data: XOR<StepNoteCreateInput, StepNoteUncheckedCreateInput>
  }

  /**
   * StepNote createMany
   */
  export type StepNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepNotes.
     */
    data: StepNoteCreateManyInput | StepNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StepNote createManyAndReturn
   */
  export type StepNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * The data used to create many StepNotes.
     */
    data: StepNoteCreateManyInput | StepNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepNote update
   */
  export type StepNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a StepNote.
     */
    data: XOR<StepNoteUpdateInput, StepNoteUncheckedUpdateInput>
    /**
     * Choose, which StepNote to update.
     */
    where: StepNoteWhereUniqueInput
  }

  /**
   * StepNote updateMany
   */
  export type StepNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepNotes.
     */
    data: XOR<StepNoteUpdateManyMutationInput, StepNoteUncheckedUpdateManyInput>
    /**
     * Filter which StepNotes to update
     */
    where?: StepNoteWhereInput
    /**
     * Limit how many StepNotes to update.
     */
    limit?: number
  }

  /**
   * StepNote updateManyAndReturn
   */
  export type StepNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * The data used to update StepNotes.
     */
    data: XOR<StepNoteUpdateManyMutationInput, StepNoteUncheckedUpdateManyInput>
    /**
     * Filter which StepNotes to update
     */
    where?: StepNoteWhereInput
    /**
     * Limit how many StepNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepNote upsert
   */
  export type StepNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the StepNote to update in case it exists.
     */
    where: StepNoteWhereUniqueInput
    /**
     * In case the StepNote found by the `where` argument doesn't exist, create a new StepNote with this data.
     */
    create: XOR<StepNoteCreateInput, StepNoteUncheckedCreateInput>
    /**
     * In case the StepNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepNoteUpdateInput, StepNoteUncheckedUpdateInput>
  }

  /**
   * StepNote delete
   */
  export type StepNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
    /**
     * Filter which StepNote to delete.
     */
    where: StepNoteWhereUniqueInput
  }

  /**
   * StepNote deleteMany
   */
  export type StepNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepNotes to delete
     */
    where?: StepNoteWhereInput
    /**
     * Limit how many StepNotes to delete.
     */
    limit?: number
  }

  /**
   * StepNote without action
   */
  export type StepNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepNote
     */
    select?: StepNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepNote
     */
    omit?: StepNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepNoteInclude<ExtArgs> | null
  }


  /**
   * Model ProgressNote
   */

  export type AggregateProgressNote = {
    _count: ProgressNoteCountAggregateOutputType | null
    _min: ProgressNoteMinAggregateOutputType | null
    _max: ProgressNoteMaxAggregateOutputType | null
  }

  export type ProgressNoteMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    content: string | null
    authorName: string | null
    authorId: string | null
    timestamp: Date | null
  }

  export type ProgressNoteMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    content: string | null
    authorName: string | null
    authorId: string | null
    timestamp: Date | null
  }

  export type ProgressNoteCountAggregateOutputType = {
    id: number
    taskId: number
    content: number
    authorName: number
    authorId: number
    timestamp: number
    _all: number
  }


  export type ProgressNoteMinAggregateInputType = {
    id?: true
    taskId?: true
    content?: true
    authorName?: true
    authorId?: true
    timestamp?: true
  }

  export type ProgressNoteMaxAggregateInputType = {
    id?: true
    taskId?: true
    content?: true
    authorName?: true
    authorId?: true
    timestamp?: true
  }

  export type ProgressNoteCountAggregateInputType = {
    id?: true
    taskId?: true
    content?: true
    authorName?: true
    authorId?: true
    timestamp?: true
    _all?: true
  }

  export type ProgressNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressNote to aggregate.
     */
    where?: ProgressNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressNotes to fetch.
     */
    orderBy?: ProgressNoteOrderByWithRelationInput | ProgressNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressNotes
    **/
    _count?: true | ProgressNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressNoteMaxAggregateInputType
  }

  export type GetProgressNoteAggregateType<T extends ProgressNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressNote[P]>
      : GetScalarType<T[P], AggregateProgressNote[P]>
  }




  export type ProgressNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressNoteWhereInput
    orderBy?: ProgressNoteOrderByWithAggregationInput | ProgressNoteOrderByWithAggregationInput[]
    by: ProgressNoteScalarFieldEnum[] | ProgressNoteScalarFieldEnum
    having?: ProgressNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressNoteCountAggregateInputType | true
    _min?: ProgressNoteMinAggregateInputType
    _max?: ProgressNoteMaxAggregateInputType
  }

  export type ProgressNoteGroupByOutputType = {
    id: string
    taskId: string
    content: string
    authorName: string
    authorId: string
    timestamp: Date
    _count: ProgressNoteCountAggregateOutputType | null
    _min: ProgressNoteMinAggregateOutputType | null
    _max: ProgressNoteMaxAggregateOutputType | null
  }

  type GetProgressNoteGroupByPayload<T extends ProgressNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressNoteGroupByOutputType[P]>
        }
      >
    >


  export type ProgressNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressNote"]>

  export type ProgressNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressNote"]>

  export type ProgressNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressNote"]>

  export type ProgressNoteSelectScalar = {
    id?: boolean
    taskId?: boolean
    content?: boolean
    authorName?: boolean
    authorId?: boolean
    timestamp?: boolean
  }

  export type ProgressNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "content" | "authorName" | "authorId" | "timestamp", ExtArgs["result"]["progressNote"]>
  export type ProgressNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressNote"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      content: string
      authorName: string
      authorId: string
      timestamp: Date
    }, ExtArgs["result"]["progressNote"]>
    composites: {}
  }

  type ProgressNoteGetPayload<S extends boolean | null | undefined | ProgressNoteDefaultArgs> = $Result.GetResult<Prisma.$ProgressNotePayload, S>

  type ProgressNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressNoteCountAggregateInputType | true
    }

  export interface ProgressNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressNote'], meta: { name: 'ProgressNote' } }
    /**
     * Find zero or one ProgressNote that matches the filter.
     * @param {ProgressNoteFindUniqueArgs} args - Arguments to find a ProgressNote
     * @example
     * // Get one ProgressNote
     * const progressNote = await prisma.progressNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressNoteFindUniqueArgs>(args: SelectSubset<T, ProgressNoteFindUniqueArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressNoteFindUniqueOrThrowArgs} args - Arguments to find a ProgressNote
     * @example
     * // Get one ProgressNote
     * const progressNote = await prisma.progressNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteFindFirstArgs} args - Arguments to find a ProgressNote
     * @example
     * // Get one ProgressNote
     * const progressNote = await prisma.progressNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressNoteFindFirstArgs>(args?: SelectSubset<T, ProgressNoteFindFirstArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteFindFirstOrThrowArgs} args - Arguments to find a ProgressNote
     * @example
     * // Get one ProgressNote
     * const progressNote = await prisma.progressNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressNotes
     * const progressNotes = await prisma.progressNote.findMany()
     * 
     * // Get first 10 ProgressNotes
     * const progressNotes = await prisma.progressNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressNoteWithIdOnly = await prisma.progressNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressNoteFindManyArgs>(args?: SelectSubset<T, ProgressNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressNote.
     * @param {ProgressNoteCreateArgs} args - Arguments to create a ProgressNote.
     * @example
     * // Create one ProgressNote
     * const ProgressNote = await prisma.progressNote.create({
     *   data: {
     *     // ... data to create a ProgressNote
     *   }
     * })
     * 
     */
    create<T extends ProgressNoteCreateArgs>(args: SelectSubset<T, ProgressNoteCreateArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressNotes.
     * @param {ProgressNoteCreateManyArgs} args - Arguments to create many ProgressNotes.
     * @example
     * // Create many ProgressNotes
     * const progressNote = await prisma.progressNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressNoteCreateManyArgs>(args?: SelectSubset<T, ProgressNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressNotes and returns the data saved in the database.
     * @param {ProgressNoteCreateManyAndReturnArgs} args - Arguments to create many ProgressNotes.
     * @example
     * // Create many ProgressNotes
     * const progressNote = await prisma.progressNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressNotes and only return the `id`
     * const progressNoteWithIdOnly = await prisma.progressNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressNote.
     * @param {ProgressNoteDeleteArgs} args - Arguments to delete one ProgressNote.
     * @example
     * // Delete one ProgressNote
     * const ProgressNote = await prisma.progressNote.delete({
     *   where: {
     *     // ... filter to delete one ProgressNote
     *   }
     * })
     * 
     */
    delete<T extends ProgressNoteDeleteArgs>(args: SelectSubset<T, ProgressNoteDeleteArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressNote.
     * @param {ProgressNoteUpdateArgs} args - Arguments to update one ProgressNote.
     * @example
     * // Update one ProgressNote
     * const progressNote = await prisma.progressNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressNoteUpdateArgs>(args: SelectSubset<T, ProgressNoteUpdateArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressNotes.
     * @param {ProgressNoteDeleteManyArgs} args - Arguments to filter ProgressNotes to delete.
     * @example
     * // Delete a few ProgressNotes
     * const { count } = await prisma.progressNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressNoteDeleteManyArgs>(args?: SelectSubset<T, ProgressNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressNotes
     * const progressNote = await prisma.progressNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressNoteUpdateManyArgs>(args: SelectSubset<T, ProgressNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressNotes and returns the data updated in the database.
     * @param {ProgressNoteUpdateManyAndReturnArgs} args - Arguments to update many ProgressNotes.
     * @example
     * // Update many ProgressNotes
     * const progressNote = await prisma.progressNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressNotes and only return the `id`
     * const progressNoteWithIdOnly = await prisma.progressNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressNote.
     * @param {ProgressNoteUpsertArgs} args - Arguments to update or create a ProgressNote.
     * @example
     * // Update or create a ProgressNote
     * const progressNote = await prisma.progressNote.upsert({
     *   create: {
     *     // ... data to create a ProgressNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressNote we want to update
     *   }
     * })
     */
    upsert<T extends ProgressNoteUpsertArgs>(args: SelectSubset<T, ProgressNoteUpsertArgs<ExtArgs>>): Prisma__ProgressNoteClient<$Result.GetResult<Prisma.$ProgressNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteCountArgs} args - Arguments to filter ProgressNotes to count.
     * @example
     * // Count the number of ProgressNotes
     * const count = await prisma.progressNote.count({
     *   where: {
     *     // ... the filter for the ProgressNotes we want to count
     *   }
     * })
    **/
    count<T extends ProgressNoteCountArgs>(
      args?: Subset<T, ProgressNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressNoteAggregateArgs>(args: Subset<T, ProgressNoteAggregateArgs>): Prisma.PrismaPromise<GetProgressNoteAggregateType<T>>

    /**
     * Group by ProgressNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressNoteGroupByArgs} args - Group by arguments.
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
      T extends ProgressNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressNoteGroupByArgs['orderBy'] }
        : { orderBy?: ProgressNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressNote model
   */
  readonly fields: ProgressNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressNote model
   */
  interface ProgressNoteFieldRefs {
    readonly id: FieldRef<"ProgressNote", 'String'>
    readonly taskId: FieldRef<"ProgressNote", 'String'>
    readonly content: FieldRef<"ProgressNote", 'String'>
    readonly authorName: FieldRef<"ProgressNote", 'String'>
    readonly authorId: FieldRef<"ProgressNote", 'String'>
    readonly timestamp: FieldRef<"ProgressNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressNote findUnique
   */
  export type ProgressNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * Filter, which ProgressNote to fetch.
     */
    where: ProgressNoteWhereUniqueInput
  }

  /**
   * ProgressNote findUniqueOrThrow
   */
  export type ProgressNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * Filter, which ProgressNote to fetch.
     */
    where: ProgressNoteWhereUniqueInput
  }

  /**
   * ProgressNote findFirst
   */
  export type ProgressNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * Filter, which ProgressNote to fetch.
     */
    where?: ProgressNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressNotes to fetch.
     */
    orderBy?: ProgressNoteOrderByWithRelationInput | ProgressNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressNotes.
     */
    cursor?: ProgressNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressNotes.
     */
    distinct?: ProgressNoteScalarFieldEnum | ProgressNoteScalarFieldEnum[]
  }

  /**
   * ProgressNote findFirstOrThrow
   */
  export type ProgressNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * Filter, which ProgressNote to fetch.
     */
    where?: ProgressNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressNotes to fetch.
     */
    orderBy?: ProgressNoteOrderByWithRelationInput | ProgressNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressNotes.
     */
    cursor?: ProgressNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressNotes.
     */
    distinct?: ProgressNoteScalarFieldEnum | ProgressNoteScalarFieldEnum[]
  }

  /**
   * ProgressNote findMany
   */
  export type ProgressNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * Filter, which ProgressNotes to fetch.
     */
    where?: ProgressNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressNotes to fetch.
     */
    orderBy?: ProgressNoteOrderByWithRelationInput | ProgressNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressNotes.
     */
    cursor?: ProgressNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressNotes.
     */
    skip?: number
    distinct?: ProgressNoteScalarFieldEnum | ProgressNoteScalarFieldEnum[]
  }

  /**
   * ProgressNote create
   */
  export type ProgressNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressNote.
     */
    data: XOR<ProgressNoteCreateInput, ProgressNoteUncheckedCreateInput>
  }

  /**
   * ProgressNote createMany
   */
  export type ProgressNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressNotes.
     */
    data: ProgressNoteCreateManyInput | ProgressNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressNote createManyAndReturn
   */
  export type ProgressNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressNotes.
     */
    data: ProgressNoteCreateManyInput | ProgressNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressNote update
   */
  export type ProgressNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressNote.
     */
    data: XOR<ProgressNoteUpdateInput, ProgressNoteUncheckedUpdateInput>
    /**
     * Choose, which ProgressNote to update.
     */
    where: ProgressNoteWhereUniqueInput
  }

  /**
   * ProgressNote updateMany
   */
  export type ProgressNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressNotes.
     */
    data: XOR<ProgressNoteUpdateManyMutationInput, ProgressNoteUncheckedUpdateManyInput>
    /**
     * Filter which ProgressNotes to update
     */
    where?: ProgressNoteWhereInput
    /**
     * Limit how many ProgressNotes to update.
     */
    limit?: number
  }

  /**
   * ProgressNote updateManyAndReturn
   */
  export type ProgressNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * The data used to update ProgressNotes.
     */
    data: XOR<ProgressNoteUpdateManyMutationInput, ProgressNoteUncheckedUpdateManyInput>
    /**
     * Filter which ProgressNotes to update
     */
    where?: ProgressNoteWhereInput
    /**
     * Limit how many ProgressNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressNote upsert
   */
  export type ProgressNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressNote to update in case it exists.
     */
    where: ProgressNoteWhereUniqueInput
    /**
     * In case the ProgressNote found by the `where` argument doesn't exist, create a new ProgressNote with this data.
     */
    create: XOR<ProgressNoteCreateInput, ProgressNoteUncheckedCreateInput>
    /**
     * In case the ProgressNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressNoteUpdateInput, ProgressNoteUncheckedUpdateInput>
  }

  /**
   * ProgressNote delete
   */
  export type ProgressNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
    /**
     * Filter which ProgressNote to delete.
     */
    where: ProgressNoteWhereUniqueInput
  }

  /**
   * ProgressNote deleteMany
   */
  export type ProgressNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressNotes to delete
     */
    where?: ProgressNoteWhereInput
    /**
     * Limit how many ProgressNotes to delete.
     */
    limit?: number
  }

  /**
   * ProgressNote without action
   */
  export type ProgressNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressNote
     */
    select?: ProgressNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressNote
     */
    omit?: ProgressNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressNoteInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyReport
   */

  export type AggregateWeeklyReport = {
    _count: WeeklyReportCountAggregateOutputType | null
    _avg: WeeklyReportAvgAggregateOutputType | null
    _sum: WeeklyReportSumAggregateOutputType | null
    _min: WeeklyReportMinAggregateOutputType | null
    _max: WeeklyReportMaxAggregateOutputType | null
  }

  export type WeeklyReportAvgAggregateOutputType = {
    completedCount: number | null
    inProgressCount: number | null
    overdueCount: number | null
    todoCount: number | null
  }

  export type WeeklyReportSumAggregateOutputType = {
    completedCount: number | null
    inProgressCount: number | null
    overdueCount: number | null
    todoCount: number | null
  }

  export type WeeklyReportMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    summary: string | null
    completedCount: number | null
    inProgressCount: number | null
    overdueCount: number | null
    todoCount: number | null
    createdAt: Date | null
  }

  export type WeeklyReportMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    summary: string | null
    completedCount: number | null
    inProgressCount: number | null
    overdueCount: number | null
    todoCount: number | null
    createdAt: Date | null
  }

  export type WeeklyReportCountAggregateOutputType = {
    id: number
    employeeId: number
    weekStart: number
    weekEnd: number
    summary: number
    completedCount: number
    inProgressCount: number
    overdueCount: number
    todoCount: number
    createdAt: number
    _all: number
  }


  export type WeeklyReportAvgAggregateInputType = {
    completedCount?: true
    inProgressCount?: true
    overdueCount?: true
    todoCount?: true
  }

  export type WeeklyReportSumAggregateInputType = {
    completedCount?: true
    inProgressCount?: true
    overdueCount?: true
    todoCount?: true
  }

  export type WeeklyReportMinAggregateInputType = {
    id?: true
    employeeId?: true
    weekStart?: true
    weekEnd?: true
    summary?: true
    completedCount?: true
    inProgressCount?: true
    overdueCount?: true
    todoCount?: true
    createdAt?: true
  }

  export type WeeklyReportMaxAggregateInputType = {
    id?: true
    employeeId?: true
    weekStart?: true
    weekEnd?: true
    summary?: true
    completedCount?: true
    inProgressCount?: true
    overdueCount?: true
    todoCount?: true
    createdAt?: true
  }

  export type WeeklyReportCountAggregateInputType = {
    id?: true
    employeeId?: true
    weekStart?: true
    weekEnd?: true
    summary?: true
    completedCount?: true
    inProgressCount?: true
    overdueCount?: true
    todoCount?: true
    createdAt?: true
    _all?: true
  }

  export type WeeklyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyReport to aggregate.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyReports
    **/
    _count?: true | WeeklyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyReportMaxAggregateInputType
  }

  export type GetWeeklyReportAggregateType<T extends WeeklyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyReport[P]>
      : GetScalarType<T[P], AggregateWeeklyReport[P]>
  }




  export type WeeklyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyReportWhereInput
    orderBy?: WeeklyReportOrderByWithAggregationInput | WeeklyReportOrderByWithAggregationInput[]
    by: WeeklyReportScalarFieldEnum[] | WeeklyReportScalarFieldEnum
    having?: WeeklyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyReportCountAggregateInputType | true
    _avg?: WeeklyReportAvgAggregateInputType
    _sum?: WeeklyReportSumAggregateInputType
    _min?: WeeklyReportMinAggregateInputType
    _max?: WeeklyReportMaxAggregateInputType
  }

  export type WeeklyReportGroupByOutputType = {
    id: string
    employeeId: string
    weekStart: Date
    weekEnd: Date
    summary: string
    completedCount: number
    inProgressCount: number
    overdueCount: number
    todoCount: number
    createdAt: Date
    _count: WeeklyReportCountAggregateOutputType | null
    _avg: WeeklyReportAvgAggregateOutputType | null
    _sum: WeeklyReportSumAggregateOutputType | null
    _min: WeeklyReportMinAggregateOutputType | null
    _max: WeeklyReportMaxAggregateOutputType | null
  }

  type GetWeeklyReportGroupByPayload<T extends WeeklyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyReportGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyReportGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    summary?: boolean
    completedCount?: boolean
    inProgressCount?: boolean
    overdueCount?: boolean
    todoCount?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    summary?: boolean
    completedCount?: boolean
    inProgressCount?: boolean
    overdueCount?: boolean
    todoCount?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    summary?: boolean
    completedCount?: boolean
    inProgressCount?: boolean
    overdueCount?: boolean
    todoCount?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectScalar = {
    id?: boolean
    employeeId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    summary?: boolean
    completedCount?: boolean
    inProgressCount?: boolean
    overdueCount?: boolean
    todoCount?: boolean
    createdAt?: boolean
  }

  export type WeeklyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "weekStart" | "weekEnd" | "summary" | "completedCount" | "inProgressCount" | "overdueCount" | "todoCount" | "createdAt", ExtArgs["result"]["weeklyReport"]>
  export type WeeklyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyReport"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      weekStart: Date
      weekEnd: Date
      summary: string
      completedCount: number
      inProgressCount: number
      overdueCount: number
      todoCount: number
      createdAt: Date
    }, ExtArgs["result"]["weeklyReport"]>
    composites: {}
  }

  type WeeklyReportGetPayload<S extends boolean | null | undefined | WeeklyReportDefaultArgs> = $Result.GetResult<Prisma.$WeeklyReportPayload, S>

  type WeeklyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyReportCountAggregateInputType | true
    }

  export interface WeeklyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyReport'], meta: { name: 'WeeklyReport' } }
    /**
     * Find zero or one WeeklyReport that matches the filter.
     * @param {WeeklyReportFindUniqueArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyReportFindUniqueArgs>(args: SelectSubset<T, WeeklyReportFindUniqueArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyReportFindUniqueOrThrowArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindFirstArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyReportFindFirstArgs>(args?: SelectSubset<T, WeeklyReportFindFirstArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindFirstOrThrowArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyReports
     * const weeklyReports = await prisma.weeklyReport.findMany()
     * 
     * // Get first 10 WeeklyReports
     * const weeklyReports = await prisma.weeklyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyReportFindManyArgs>(args?: SelectSubset<T, WeeklyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyReport.
     * @param {WeeklyReportCreateArgs} args - Arguments to create a WeeklyReport.
     * @example
     * // Create one WeeklyReport
     * const WeeklyReport = await prisma.weeklyReport.create({
     *   data: {
     *     // ... data to create a WeeklyReport
     *   }
     * })
     * 
     */
    create<T extends WeeklyReportCreateArgs>(args: SelectSubset<T, WeeklyReportCreateArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyReports.
     * @param {WeeklyReportCreateManyArgs} args - Arguments to create many WeeklyReports.
     * @example
     * // Create many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyReportCreateManyArgs>(args?: SelectSubset<T, WeeklyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyReports and returns the data saved in the database.
     * @param {WeeklyReportCreateManyAndReturnArgs} args - Arguments to create many WeeklyReports.
     * @example
     * // Create many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyReports and only return the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyReport.
     * @param {WeeklyReportDeleteArgs} args - Arguments to delete one WeeklyReport.
     * @example
     * // Delete one WeeklyReport
     * const WeeklyReport = await prisma.weeklyReport.delete({
     *   where: {
     *     // ... filter to delete one WeeklyReport
     *   }
     * })
     * 
     */
    delete<T extends WeeklyReportDeleteArgs>(args: SelectSubset<T, WeeklyReportDeleteArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyReport.
     * @param {WeeklyReportUpdateArgs} args - Arguments to update one WeeklyReport.
     * @example
     * // Update one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyReportUpdateArgs>(args: SelectSubset<T, WeeklyReportUpdateArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyReports.
     * @param {WeeklyReportDeleteManyArgs} args - Arguments to filter WeeklyReports to delete.
     * @example
     * // Delete a few WeeklyReports
     * const { count } = await prisma.weeklyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyReportDeleteManyArgs>(args?: SelectSubset<T, WeeklyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyReportUpdateManyArgs>(args: SelectSubset<T, WeeklyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyReports and returns the data updated in the database.
     * @param {WeeklyReportUpdateManyAndReturnArgs} args - Arguments to update many WeeklyReports.
     * @example
     * // Update many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyReports and only return the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeeklyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyReport.
     * @param {WeeklyReportUpsertArgs} args - Arguments to update or create a WeeklyReport.
     * @example
     * // Update or create a WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.upsert({
     *   create: {
     *     // ... data to create a WeeklyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyReport we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyReportUpsertArgs>(args: SelectSubset<T, WeeklyReportUpsertArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportCountArgs} args - Arguments to filter WeeklyReports to count.
     * @example
     * // Count the number of WeeklyReports
     * const count = await prisma.weeklyReport.count({
     *   where: {
     *     // ... the filter for the WeeklyReports we want to count
     *   }
     * })
    **/
    count<T extends WeeklyReportCountArgs>(
      args?: Subset<T, WeeklyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyReportAggregateArgs>(args: Subset<T, WeeklyReportAggregateArgs>): Prisma.PrismaPromise<GetWeeklyReportAggregateType<T>>

    /**
     * Group by WeeklyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportGroupByArgs} args - Group by arguments.
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
      T extends WeeklyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyReportGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyReport model
   */
  readonly fields: WeeklyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeeklyReport model
   */
  interface WeeklyReportFieldRefs {
    readonly id: FieldRef<"WeeklyReport", 'String'>
    readonly employeeId: FieldRef<"WeeklyReport", 'String'>
    readonly weekStart: FieldRef<"WeeklyReport", 'DateTime'>
    readonly weekEnd: FieldRef<"WeeklyReport", 'DateTime'>
    readonly summary: FieldRef<"WeeklyReport", 'String'>
    readonly completedCount: FieldRef<"WeeklyReport", 'Int'>
    readonly inProgressCount: FieldRef<"WeeklyReport", 'Int'>
    readonly overdueCount: FieldRef<"WeeklyReport", 'Int'>
    readonly todoCount: FieldRef<"WeeklyReport", 'Int'>
    readonly createdAt: FieldRef<"WeeklyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyReport findUnique
   */
  export type WeeklyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport findUniqueOrThrow
   */
  export type WeeklyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport findFirst
   */
  export type WeeklyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyReports.
     */
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport findFirstOrThrow
   */
  export type WeeklyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyReports.
     */
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport findMany
   */
  export type WeeklyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReports to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport create
   */
  export type WeeklyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyReport.
     */
    data: XOR<WeeklyReportCreateInput, WeeklyReportUncheckedCreateInput>
  }

  /**
   * WeeklyReport createMany
   */
  export type WeeklyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyReports.
     */
    data: WeeklyReportCreateManyInput | WeeklyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyReport createManyAndReturn
   */
  export type WeeklyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyReports.
     */
    data: WeeklyReportCreateManyInput | WeeklyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyReport update
   */
  export type WeeklyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyReport.
     */
    data: XOR<WeeklyReportUpdateInput, WeeklyReportUncheckedUpdateInput>
    /**
     * Choose, which WeeklyReport to update.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport updateMany
   */
  export type WeeklyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyReports.
     */
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyReports to update
     */
    where?: WeeklyReportWhereInput
    /**
     * Limit how many WeeklyReports to update.
     */
    limit?: number
  }

  /**
   * WeeklyReport updateManyAndReturn
   */
  export type WeeklyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyReports.
     */
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyReports to update
     */
    where?: WeeklyReportWhereInput
    /**
     * Limit how many WeeklyReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyReport upsert
   */
  export type WeeklyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyReport to update in case it exists.
     */
    where: WeeklyReportWhereUniqueInput
    /**
     * In case the WeeklyReport found by the `where` argument doesn't exist, create a new WeeklyReport with this data.
     */
    create: XOR<WeeklyReportCreateInput, WeeklyReportUncheckedCreateInput>
    /**
     * In case the WeeklyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyReportUpdateInput, WeeklyReportUncheckedUpdateInput>
  }

  /**
   * WeeklyReport delete
   */
  export type WeeklyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter which WeeklyReport to delete.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport deleteMany
   */
  export type WeeklyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyReports to delete
     */
    where?: WeeklyReportWhereInput
    /**
     * Limit how many WeeklyReports to delete.
     */
    limit?: number
  }

  /**
   * WeeklyReport without action
   */
  export type WeeklyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyReport
     */
    omit?: WeeklyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    location: 'location',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    assigneeId: 'assigneeId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ActionStepScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    title: 'title',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActionStepScalarFieldEnum = (typeof ActionStepScalarFieldEnum)[keyof typeof ActionStepScalarFieldEnum]


  export const StepNoteScalarFieldEnum: {
    id: 'id',
    stepId: 'stepId',
    content: 'content',
    authorName: 'authorName',
    authorId: 'authorId',
    timestamp: 'timestamp'
  };

  export type StepNoteScalarFieldEnum = (typeof StepNoteScalarFieldEnum)[keyof typeof StepNoteScalarFieldEnum]


  export const ProgressNoteScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    content: 'content',
    authorName: 'authorName',
    authorId: 'authorId',
    timestamp: 'timestamp'
  };

  export type ProgressNoteScalarFieldEnum = (typeof ProgressNoteScalarFieldEnum)[keyof typeof ProgressNoteScalarFieldEnum]


  export const WeeklyReportScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    summary: 'summary',
    completedCount: 'completedCount',
    inProgressCount: 'inProgressCount',
    overdueCount: 'overdueCount',
    todoCount: 'todoCount',
    createdAt: 'createdAt'
  };

  export type WeeklyReportScalarFieldEnum = (typeof WeeklyReportScalarFieldEnum)[keyof typeof WeeklyReportScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    stepNotes?: StepNoteListRelationFilter
    progressNotes?: ProgressNoteListRelationFilter
    weeklyReports?: WeeklyReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTasks?: TaskOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    stepNotes?: StepNoteOrderByRelationAggregateInput
    progressNotes?: ProgressNoteOrderByRelationAggregateInput
    weeklyReports?: WeeklyReportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    stepNotes?: StepNoteListRelationFilter
    progressNotes?: ProgressNoteListRelationFilter
    weeklyReports?: WeeklyReportListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeFilter<"Task"> | Date | string
    assigneeId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignee?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    actionSteps?: ActionStepListRelationFilter
    progressNotes?: ProgressNoteListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    assignee?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    actionSteps?: ActionStepOrderByRelationAggregateInput
    progressNotes?: ProgressNoteOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeFilter<"Task"> | Date | string
    assigneeId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignee?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    actionSteps?: ActionStepListRelationFilter
    progressNotes?: ProgressNoteListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    assigneeId?: StringWithAggregatesFilter<"Task"> | string
    createdById?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type ActionStepWhereInput = {
    AND?: ActionStepWhereInput | ActionStepWhereInput[]
    OR?: ActionStepWhereInput[]
    NOT?: ActionStepWhereInput | ActionStepWhereInput[]
    id?: StringFilter<"ActionStep"> | string
    taskId?: StringFilter<"ActionStep"> | string
    title?: StringFilter<"ActionStep"> | string
    completed?: BoolFilter<"ActionStep"> | boolean
    createdAt?: DateTimeFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeFilter<"ActionStep"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    notes?: StepNoteListRelationFilter
  }

  export type ActionStepOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    notes?: StepNoteOrderByRelationAggregateInput
  }

  export type ActionStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionStepWhereInput | ActionStepWhereInput[]
    OR?: ActionStepWhereInput[]
    NOT?: ActionStepWhereInput | ActionStepWhereInput[]
    taskId?: StringFilter<"ActionStep"> | string
    title?: StringFilter<"ActionStep"> | string
    completed?: BoolFilter<"ActionStep"> | boolean
    createdAt?: DateTimeFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeFilter<"ActionStep"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    notes?: StepNoteListRelationFilter
  }, "id">

  export type ActionStepOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActionStepCountOrderByAggregateInput
    _max?: ActionStepMaxOrderByAggregateInput
    _min?: ActionStepMinOrderByAggregateInput
  }

  export type ActionStepScalarWhereWithAggregatesInput = {
    AND?: ActionStepScalarWhereWithAggregatesInput | ActionStepScalarWhereWithAggregatesInput[]
    OR?: ActionStepScalarWhereWithAggregatesInput[]
    NOT?: ActionStepScalarWhereWithAggregatesInput | ActionStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionStep"> | string
    taskId?: StringWithAggregatesFilter<"ActionStep"> | string
    title?: StringWithAggregatesFilter<"ActionStep"> | string
    completed?: BoolWithAggregatesFilter<"ActionStep"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActionStep"> | Date | string
  }

  export type StepNoteWhereInput = {
    AND?: StepNoteWhereInput | StepNoteWhereInput[]
    OR?: StepNoteWhereInput[]
    NOT?: StepNoteWhereInput | StepNoteWhereInput[]
    id?: StringFilter<"StepNote"> | string
    stepId?: StringFilter<"StepNote"> | string
    content?: StringFilter<"StepNote"> | string
    authorName?: StringFilter<"StepNote"> | string
    authorId?: StringFilter<"StepNote"> | string
    timestamp?: DateTimeFilter<"StepNote"> | Date | string
    step?: XOR<ActionStepScalarRelationFilter, ActionStepWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StepNoteOrderByWithRelationInput = {
    id?: SortOrder
    stepId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
    step?: ActionStepOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type StepNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StepNoteWhereInput | StepNoteWhereInput[]
    OR?: StepNoteWhereInput[]
    NOT?: StepNoteWhereInput | StepNoteWhereInput[]
    stepId?: StringFilter<"StepNote"> | string
    content?: StringFilter<"StepNote"> | string
    authorName?: StringFilter<"StepNote"> | string
    authorId?: StringFilter<"StepNote"> | string
    timestamp?: DateTimeFilter<"StepNote"> | Date | string
    step?: XOR<ActionStepScalarRelationFilter, ActionStepWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StepNoteOrderByWithAggregationInput = {
    id?: SortOrder
    stepId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
    _count?: StepNoteCountOrderByAggregateInput
    _max?: StepNoteMaxOrderByAggregateInput
    _min?: StepNoteMinOrderByAggregateInput
  }

  export type StepNoteScalarWhereWithAggregatesInput = {
    AND?: StepNoteScalarWhereWithAggregatesInput | StepNoteScalarWhereWithAggregatesInput[]
    OR?: StepNoteScalarWhereWithAggregatesInput[]
    NOT?: StepNoteScalarWhereWithAggregatesInput | StepNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StepNote"> | string
    stepId?: StringWithAggregatesFilter<"StepNote"> | string
    content?: StringWithAggregatesFilter<"StepNote"> | string
    authorName?: StringWithAggregatesFilter<"StepNote"> | string
    authorId?: StringWithAggregatesFilter<"StepNote"> | string
    timestamp?: DateTimeWithAggregatesFilter<"StepNote"> | Date | string
  }

  export type ProgressNoteWhereInput = {
    AND?: ProgressNoteWhereInput | ProgressNoteWhereInput[]
    OR?: ProgressNoteWhereInput[]
    NOT?: ProgressNoteWhereInput | ProgressNoteWhereInput[]
    id?: StringFilter<"ProgressNote"> | string
    taskId?: StringFilter<"ProgressNote"> | string
    content?: StringFilter<"ProgressNote"> | string
    authorName?: StringFilter<"ProgressNote"> | string
    authorId?: StringFilter<"ProgressNote"> | string
    timestamp?: DateTimeFilter<"ProgressNote"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressNoteOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
    task?: TaskOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type ProgressNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressNoteWhereInput | ProgressNoteWhereInput[]
    OR?: ProgressNoteWhereInput[]
    NOT?: ProgressNoteWhereInput | ProgressNoteWhereInput[]
    taskId?: StringFilter<"ProgressNote"> | string
    content?: StringFilter<"ProgressNote"> | string
    authorName?: StringFilter<"ProgressNote"> | string
    authorId?: StringFilter<"ProgressNote"> | string
    timestamp?: DateTimeFilter<"ProgressNote"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProgressNoteOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
    _count?: ProgressNoteCountOrderByAggregateInput
    _max?: ProgressNoteMaxOrderByAggregateInput
    _min?: ProgressNoteMinOrderByAggregateInput
  }

  export type ProgressNoteScalarWhereWithAggregatesInput = {
    AND?: ProgressNoteScalarWhereWithAggregatesInput | ProgressNoteScalarWhereWithAggregatesInput[]
    OR?: ProgressNoteScalarWhereWithAggregatesInput[]
    NOT?: ProgressNoteScalarWhereWithAggregatesInput | ProgressNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressNote"> | string
    taskId?: StringWithAggregatesFilter<"ProgressNote"> | string
    content?: StringWithAggregatesFilter<"ProgressNote"> | string
    authorName?: StringWithAggregatesFilter<"ProgressNote"> | string
    authorId?: StringWithAggregatesFilter<"ProgressNote"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ProgressNote"> | Date | string
  }

  export type WeeklyReportWhereInput = {
    AND?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    OR?: WeeklyReportWhereInput[]
    NOT?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    id?: StringFilter<"WeeklyReport"> | string
    employeeId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    summary?: StringFilter<"WeeklyReport"> | string
    completedCount?: IntFilter<"WeeklyReport"> | number
    inProgressCount?: IntFilter<"WeeklyReport"> | number
    overdueCount?: IntFilter<"WeeklyReport"> | number
    todoCount?: IntFilter<"WeeklyReport"> | number
    createdAt?: DateTimeFilter<"WeeklyReport"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklyReportOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    summary?: SortOrder
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
    createdAt?: SortOrder
    employee?: UserOrderByWithRelationInput
  }

  export type WeeklyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    OR?: WeeklyReportWhereInput[]
    NOT?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    employeeId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    summary?: StringFilter<"WeeklyReport"> | string
    completedCount?: IntFilter<"WeeklyReport"> | number
    inProgressCount?: IntFilter<"WeeklyReport"> | number
    overdueCount?: IntFilter<"WeeklyReport"> | number
    todoCount?: IntFilter<"WeeklyReport"> | number
    createdAt?: DateTimeFilter<"WeeklyReport"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WeeklyReportOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    summary?: SortOrder
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
    createdAt?: SortOrder
    _count?: WeeklyReportCountOrderByAggregateInput
    _avg?: WeeklyReportAvgOrderByAggregateInput
    _max?: WeeklyReportMaxOrderByAggregateInput
    _min?: WeeklyReportMinOrderByAggregateInput
    _sum?: WeeklyReportSumOrderByAggregateInput
  }

  export type WeeklyReportScalarWhereWithAggregatesInput = {
    AND?: WeeklyReportScalarWhereWithAggregatesInput | WeeklyReportScalarWhereWithAggregatesInput[]
    OR?: WeeklyReportScalarWhereWithAggregatesInput[]
    NOT?: WeeklyReportScalarWhereWithAggregatesInput | WeeklyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklyReport"> | string
    employeeId?: StringWithAggregatesFilter<"WeeklyReport"> | string
    weekStart?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
    summary?: StringWithAggregatesFilter<"WeeklyReport"> | string
    completedCount?: IntWithAggregatesFilter<"WeeklyReport"> | number
    inProgressCount?: IntWithAggregatesFilter<"WeeklyReport"> | number
    overdueCount?: IntWithAggregatesFilter<"WeeklyReport"> | number
    todoCount?: IntWithAggregatesFilter<"WeeklyReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteUncheckedCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUncheckedUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    assignee: UserCreateNestedOneWithoutAssignedTasksInput
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    actionSteps?: ActionStepCreateNestedManyWithoutTaskInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    assigneeId: string
    createdById: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    actionSteps?: ActionStepUncheckedCreateNestedManyWithoutTaskInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    actionSteps?: ActionStepUpdateManyWithoutTaskNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionSteps?: ActionStepUncheckedUpdateManyWithoutTaskNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    assigneeId: string
    createdById: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepCreateInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutActionStepsInput
    notes?: StepNoteCreateNestedManyWithoutStepInput
  }

  export type ActionStepUncheckedCreateInput = {
    id?: string
    taskId: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: StepNoteUncheckedCreateNestedManyWithoutStepInput
  }

  export type ActionStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutActionStepsNestedInput
    notes?: StepNoteUpdateManyWithoutStepNestedInput
  }

  export type ActionStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StepNoteUncheckedUpdateManyWithoutStepNestedInput
  }

  export type ActionStepCreateManyInput = {
    id?: string
    taskId: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteCreateInput = {
    id?: string
    content: string
    authorName: string
    timestamp?: Date | string
    step: ActionStepCreateNestedOneWithoutNotesInput
    author: UserCreateNestedOneWithoutStepNotesInput
  }

  export type StepNoteUncheckedCreateInput = {
    id?: string
    stepId: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type StepNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: ActionStepUpdateOneRequiredWithoutNotesNestedInput
    author?: UserUpdateOneRequiredWithoutStepNotesNestedInput
  }

  export type StepNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteCreateManyInput = {
    id?: string
    stepId: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type StepNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteCreateInput = {
    id?: string
    content: string
    authorName: string
    timestamp?: Date | string
    task: TaskCreateNestedOneWithoutProgressNotesInput
    author: UserCreateNestedOneWithoutProgressNotesInput
  }

  export type ProgressNoteUncheckedCreateInput = {
    id?: string
    taskId: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type ProgressNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutProgressNotesNestedInput
    author?: UserUpdateOneRequiredWithoutProgressNotesNestedInput
  }

  export type ProgressNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteCreateManyInput = {
    id?: string
    taskId: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type ProgressNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportCreateInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    summary: string
    completedCount?: number
    inProgressCount?: number
    overdueCount?: number
    todoCount?: number
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutWeeklyReportsInput
  }

  export type WeeklyReportUncheckedCreateInput = {
    id?: string
    employeeId: string
    weekStart: Date | string
    weekEnd: Date | string
    summary: string
    completedCount?: number
    inProgressCount?: number
    overdueCount?: number
    todoCount?: number
    createdAt?: Date | string
  }

  export type WeeklyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutWeeklyReportsNestedInput
  }

  export type WeeklyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportCreateManyInput = {
    id?: string
    employeeId: string
    weekStart: Date | string
    weekEnd: Date | string
    summary: string
    completedCount?: number
    inProgressCount?: number
    overdueCount?: number
    todoCount?: number
    createdAt?: Date | string
  }

  export type WeeklyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type StepNoteListRelationFilter = {
    every?: StepNoteWhereInput
    some?: StepNoteWhereInput
    none?: StepNoteWhereInput
  }

  export type ProgressNoteListRelationFilter = {
    every?: ProgressNoteWhereInput
    some?: ProgressNoteWhereInput
    none?: ProgressNoteWhereInput
  }

  export type WeeklyReportListRelationFilter = {
    every?: WeeklyReportWhereInput
    some?: WeeklyReportWhereInput
    none?: WeeklyReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActionStepListRelationFilter = {
    every?: ActionStepWhereInput
    some?: ActionStepWhereInput
    none?: ActionStepWhereInput
  }

  export type ActionStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type ActionStepCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActionStepMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActionStepMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ActionStepScalarRelationFilter = {
    is?: ActionStepWhereInput
    isNot?: ActionStepWhereInput
  }

  export type StepNoteCountOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
  }

  export type StepNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
  }

  export type StepNoteMinOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
  }

  export type ProgressNoteCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
  }

  export type ProgressNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
  }

  export type ProgressNoteMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorId?: SortOrder
    timestamp?: SortOrder
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

  export type WeeklyReportCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    summary?: SortOrder
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklyReportAvgOrderByAggregateInput = {
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
  }

  export type WeeklyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    summary?: SortOrder
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklyReportMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    summary?: SortOrder
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklyReportSumOrderByAggregateInput = {
    completedCount?: SortOrder
    inProgressCount?: SortOrder
    overdueCount?: SortOrder
    todoCount?: SortOrder
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

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StepNoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<StepNoteCreateWithoutAuthorInput, StepNoteUncheckedCreateWithoutAuthorInput> | StepNoteCreateWithoutAuthorInput[] | StepNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutAuthorInput | StepNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: StepNoteCreateManyAuthorInputEnvelope
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
  }

  export type ProgressNoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ProgressNoteCreateWithoutAuthorInput, ProgressNoteUncheckedCreateWithoutAuthorInput> | ProgressNoteCreateWithoutAuthorInput[] | ProgressNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutAuthorInput | ProgressNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: ProgressNoteCreateManyAuthorInputEnvelope
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
  }

  export type WeeklyReportCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WeeklyReportCreateWithoutEmployeeInput, WeeklyReportUncheckedCreateWithoutEmployeeInput> | WeeklyReportCreateWithoutEmployeeInput[] | WeeklyReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutEmployeeInput | WeeklyReportCreateOrConnectWithoutEmployeeInput[]
    createMany?: WeeklyReportCreateManyEmployeeInputEnvelope
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StepNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<StepNoteCreateWithoutAuthorInput, StepNoteUncheckedCreateWithoutAuthorInput> | StepNoteCreateWithoutAuthorInput[] | StepNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutAuthorInput | StepNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: StepNoteCreateManyAuthorInputEnvelope
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
  }

  export type ProgressNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ProgressNoteCreateWithoutAuthorInput, ProgressNoteUncheckedCreateWithoutAuthorInput> | ProgressNoteCreateWithoutAuthorInput[] | ProgressNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutAuthorInput | ProgressNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: ProgressNoteCreateManyAuthorInputEnvelope
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
  }

  export type WeeklyReportUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WeeklyReportCreateWithoutEmployeeInput, WeeklyReportUncheckedCreateWithoutEmployeeInput> | WeeklyReportCreateWithoutEmployeeInput[] | WeeklyReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutEmployeeInput | WeeklyReportCreateOrConnectWithoutEmployeeInput[]
    createMany?: WeeklyReportCreateManyEmployeeInputEnvelope
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StepNoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<StepNoteCreateWithoutAuthorInput, StepNoteUncheckedCreateWithoutAuthorInput> | StepNoteCreateWithoutAuthorInput[] | StepNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutAuthorInput | StepNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: StepNoteUpsertWithWhereUniqueWithoutAuthorInput | StepNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: StepNoteCreateManyAuthorInputEnvelope
    set?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    disconnect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    delete?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    update?: StepNoteUpdateWithWhereUniqueWithoutAuthorInput | StepNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: StepNoteUpdateManyWithWhereWithoutAuthorInput | StepNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: StepNoteScalarWhereInput | StepNoteScalarWhereInput[]
  }

  export type ProgressNoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ProgressNoteCreateWithoutAuthorInput, ProgressNoteUncheckedCreateWithoutAuthorInput> | ProgressNoteCreateWithoutAuthorInput[] | ProgressNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutAuthorInput | ProgressNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: ProgressNoteUpsertWithWhereUniqueWithoutAuthorInput | ProgressNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ProgressNoteCreateManyAuthorInputEnvelope
    set?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    disconnect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    delete?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    update?: ProgressNoteUpdateWithWhereUniqueWithoutAuthorInput | ProgressNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ProgressNoteUpdateManyWithWhereWithoutAuthorInput | ProgressNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ProgressNoteScalarWhereInput | ProgressNoteScalarWhereInput[]
  }

  export type WeeklyReportUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WeeklyReportCreateWithoutEmployeeInput, WeeklyReportUncheckedCreateWithoutEmployeeInput> | WeeklyReportCreateWithoutEmployeeInput[] | WeeklyReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutEmployeeInput | WeeklyReportCreateOrConnectWithoutEmployeeInput[]
    upsert?: WeeklyReportUpsertWithWhereUniqueWithoutEmployeeInput | WeeklyReportUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WeeklyReportCreateManyEmployeeInputEnvelope
    set?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    disconnect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    delete?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    update?: WeeklyReportUpdateWithWhereUniqueWithoutEmployeeInput | WeeklyReportUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WeeklyReportUpdateManyWithWhereWithoutEmployeeInput | WeeklyReportUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StepNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<StepNoteCreateWithoutAuthorInput, StepNoteUncheckedCreateWithoutAuthorInput> | StepNoteCreateWithoutAuthorInput[] | StepNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutAuthorInput | StepNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: StepNoteUpsertWithWhereUniqueWithoutAuthorInput | StepNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: StepNoteCreateManyAuthorInputEnvelope
    set?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    disconnect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    delete?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    update?: StepNoteUpdateWithWhereUniqueWithoutAuthorInput | StepNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: StepNoteUpdateManyWithWhereWithoutAuthorInput | StepNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: StepNoteScalarWhereInput | StepNoteScalarWhereInput[]
  }

  export type ProgressNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ProgressNoteCreateWithoutAuthorInput, ProgressNoteUncheckedCreateWithoutAuthorInput> | ProgressNoteCreateWithoutAuthorInput[] | ProgressNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutAuthorInput | ProgressNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: ProgressNoteUpsertWithWhereUniqueWithoutAuthorInput | ProgressNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ProgressNoteCreateManyAuthorInputEnvelope
    set?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    disconnect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    delete?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    update?: ProgressNoteUpdateWithWhereUniqueWithoutAuthorInput | ProgressNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ProgressNoteUpdateManyWithWhereWithoutAuthorInput | ProgressNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ProgressNoteScalarWhereInput | ProgressNoteScalarWhereInput[]
  }

  export type WeeklyReportUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WeeklyReportCreateWithoutEmployeeInput, WeeklyReportUncheckedCreateWithoutEmployeeInput> | WeeklyReportCreateWithoutEmployeeInput[] | WeeklyReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutEmployeeInput | WeeklyReportCreateOrConnectWithoutEmployeeInput[]
    upsert?: WeeklyReportUpsertWithWhereUniqueWithoutEmployeeInput | WeeklyReportUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WeeklyReportCreateManyEmployeeInputEnvelope
    set?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    disconnect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    delete?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    update?: WeeklyReportUpdateWithWhereUniqueWithoutEmployeeInput | WeeklyReportUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WeeklyReportUpdateManyWithWhereWithoutEmployeeInput | WeeklyReportUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ActionStepCreateNestedManyWithoutTaskInput = {
    create?: XOR<ActionStepCreateWithoutTaskInput, ActionStepUncheckedCreateWithoutTaskInput> | ActionStepCreateWithoutTaskInput[] | ActionStepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutTaskInput | ActionStepCreateOrConnectWithoutTaskInput[]
    createMany?: ActionStepCreateManyTaskInputEnvelope
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
  }

  export type ProgressNoteCreateNestedManyWithoutTaskInput = {
    create?: XOR<ProgressNoteCreateWithoutTaskInput, ProgressNoteUncheckedCreateWithoutTaskInput> | ProgressNoteCreateWithoutTaskInput[] | ProgressNoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutTaskInput | ProgressNoteCreateOrConnectWithoutTaskInput[]
    createMany?: ProgressNoteCreateManyTaskInputEnvelope
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
  }

  export type ActionStepUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ActionStepCreateWithoutTaskInput, ActionStepUncheckedCreateWithoutTaskInput> | ActionStepCreateWithoutTaskInput[] | ActionStepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutTaskInput | ActionStepCreateOrConnectWithoutTaskInput[]
    createMany?: ActionStepCreateManyTaskInputEnvelope
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
  }

  export type ProgressNoteUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ProgressNoteCreateWithoutTaskInput, ProgressNoteUncheckedCreateWithoutTaskInput> | ProgressNoteCreateWithoutTaskInput[] | ProgressNoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutTaskInput | ProgressNoteCreateOrConnectWithoutTaskInput[]
    createMany?: ProgressNoteCreateManyTaskInputEnvelope
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type ActionStepUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ActionStepCreateWithoutTaskInput, ActionStepUncheckedCreateWithoutTaskInput> | ActionStepCreateWithoutTaskInput[] | ActionStepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutTaskInput | ActionStepCreateOrConnectWithoutTaskInput[]
    upsert?: ActionStepUpsertWithWhereUniqueWithoutTaskInput | ActionStepUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ActionStepCreateManyTaskInputEnvelope
    set?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    disconnect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    delete?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    update?: ActionStepUpdateWithWhereUniqueWithoutTaskInput | ActionStepUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ActionStepUpdateManyWithWhereWithoutTaskInput | ActionStepUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
  }

  export type ProgressNoteUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ProgressNoteCreateWithoutTaskInput, ProgressNoteUncheckedCreateWithoutTaskInput> | ProgressNoteCreateWithoutTaskInput[] | ProgressNoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutTaskInput | ProgressNoteCreateOrConnectWithoutTaskInput[]
    upsert?: ProgressNoteUpsertWithWhereUniqueWithoutTaskInput | ProgressNoteUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ProgressNoteCreateManyTaskInputEnvelope
    set?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    disconnect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    delete?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    update?: ProgressNoteUpdateWithWhereUniqueWithoutTaskInput | ProgressNoteUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ProgressNoteUpdateManyWithWhereWithoutTaskInput | ProgressNoteUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ProgressNoteScalarWhereInput | ProgressNoteScalarWhereInput[]
  }

  export type ActionStepUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ActionStepCreateWithoutTaskInput, ActionStepUncheckedCreateWithoutTaskInput> | ActionStepCreateWithoutTaskInput[] | ActionStepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ActionStepCreateOrConnectWithoutTaskInput | ActionStepCreateOrConnectWithoutTaskInput[]
    upsert?: ActionStepUpsertWithWhereUniqueWithoutTaskInput | ActionStepUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ActionStepCreateManyTaskInputEnvelope
    set?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    disconnect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    delete?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    connect?: ActionStepWhereUniqueInput | ActionStepWhereUniqueInput[]
    update?: ActionStepUpdateWithWhereUniqueWithoutTaskInput | ActionStepUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ActionStepUpdateManyWithWhereWithoutTaskInput | ActionStepUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
  }

  export type ProgressNoteUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ProgressNoteCreateWithoutTaskInput, ProgressNoteUncheckedCreateWithoutTaskInput> | ProgressNoteCreateWithoutTaskInput[] | ProgressNoteUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressNoteCreateOrConnectWithoutTaskInput | ProgressNoteCreateOrConnectWithoutTaskInput[]
    upsert?: ProgressNoteUpsertWithWhereUniqueWithoutTaskInput | ProgressNoteUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ProgressNoteCreateManyTaskInputEnvelope
    set?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    disconnect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    delete?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    connect?: ProgressNoteWhereUniqueInput | ProgressNoteWhereUniqueInput[]
    update?: ProgressNoteUpdateWithWhereUniqueWithoutTaskInput | ProgressNoteUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ProgressNoteUpdateManyWithWhereWithoutTaskInput | ProgressNoteUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ProgressNoteScalarWhereInput | ProgressNoteScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutActionStepsInput = {
    create?: XOR<TaskCreateWithoutActionStepsInput, TaskUncheckedCreateWithoutActionStepsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutActionStepsInput
    connect?: TaskWhereUniqueInput
  }

  export type StepNoteCreateNestedManyWithoutStepInput = {
    create?: XOR<StepNoteCreateWithoutStepInput, StepNoteUncheckedCreateWithoutStepInput> | StepNoteCreateWithoutStepInput[] | StepNoteUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutStepInput | StepNoteCreateOrConnectWithoutStepInput[]
    createMany?: StepNoteCreateManyStepInputEnvelope
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
  }

  export type StepNoteUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<StepNoteCreateWithoutStepInput, StepNoteUncheckedCreateWithoutStepInput> | StepNoteCreateWithoutStepInput[] | StepNoteUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutStepInput | StepNoteCreateOrConnectWithoutStepInput[]
    createMany?: StepNoteCreateManyStepInputEnvelope
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateOneRequiredWithoutActionStepsNestedInput = {
    create?: XOR<TaskCreateWithoutActionStepsInput, TaskUncheckedCreateWithoutActionStepsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutActionStepsInput
    upsert?: TaskUpsertWithoutActionStepsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutActionStepsInput, TaskUpdateWithoutActionStepsInput>, TaskUncheckedUpdateWithoutActionStepsInput>
  }

  export type StepNoteUpdateManyWithoutStepNestedInput = {
    create?: XOR<StepNoteCreateWithoutStepInput, StepNoteUncheckedCreateWithoutStepInput> | StepNoteCreateWithoutStepInput[] | StepNoteUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutStepInput | StepNoteCreateOrConnectWithoutStepInput[]
    upsert?: StepNoteUpsertWithWhereUniqueWithoutStepInput | StepNoteUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: StepNoteCreateManyStepInputEnvelope
    set?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    disconnect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    delete?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    update?: StepNoteUpdateWithWhereUniqueWithoutStepInput | StepNoteUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: StepNoteUpdateManyWithWhereWithoutStepInput | StepNoteUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: StepNoteScalarWhereInput | StepNoteScalarWhereInput[]
  }

  export type StepNoteUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<StepNoteCreateWithoutStepInput, StepNoteUncheckedCreateWithoutStepInput> | StepNoteCreateWithoutStepInput[] | StepNoteUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepNoteCreateOrConnectWithoutStepInput | StepNoteCreateOrConnectWithoutStepInput[]
    upsert?: StepNoteUpsertWithWhereUniqueWithoutStepInput | StepNoteUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: StepNoteCreateManyStepInputEnvelope
    set?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    disconnect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    delete?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    connect?: StepNoteWhereUniqueInput | StepNoteWhereUniqueInput[]
    update?: StepNoteUpdateWithWhereUniqueWithoutStepInput | StepNoteUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: StepNoteUpdateManyWithWhereWithoutStepInput | StepNoteUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: StepNoteScalarWhereInput | StepNoteScalarWhereInput[]
  }

  export type ActionStepCreateNestedOneWithoutNotesInput = {
    create?: XOR<ActionStepCreateWithoutNotesInput, ActionStepUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ActionStepCreateOrConnectWithoutNotesInput
    connect?: ActionStepWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStepNotesInput = {
    create?: XOR<UserCreateWithoutStepNotesInput, UserUncheckedCreateWithoutStepNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepNotesInput
    connect?: UserWhereUniqueInput
  }

  export type ActionStepUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<ActionStepCreateWithoutNotesInput, ActionStepUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ActionStepCreateOrConnectWithoutNotesInput
    upsert?: ActionStepUpsertWithoutNotesInput
    connect?: ActionStepWhereUniqueInput
    update?: XOR<XOR<ActionStepUpdateToOneWithWhereWithoutNotesInput, ActionStepUpdateWithoutNotesInput>, ActionStepUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutStepNotesNestedInput = {
    create?: XOR<UserCreateWithoutStepNotesInput, UserUncheckedCreateWithoutStepNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepNotesInput
    upsert?: UserUpsertWithoutStepNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepNotesInput, UserUpdateWithoutStepNotesInput>, UserUncheckedUpdateWithoutStepNotesInput>
  }

  export type TaskCreateNestedOneWithoutProgressNotesInput = {
    create?: XOR<TaskCreateWithoutProgressNotesInput, TaskUncheckedCreateWithoutProgressNotesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutProgressNotesInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProgressNotesInput = {
    create?: XOR<UserCreateWithoutProgressNotesInput, UserUncheckedCreateWithoutProgressNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressNotesInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutProgressNotesNestedInput = {
    create?: XOR<TaskCreateWithoutProgressNotesInput, TaskUncheckedCreateWithoutProgressNotesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutProgressNotesInput
    upsert?: TaskUpsertWithoutProgressNotesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutProgressNotesInput, TaskUpdateWithoutProgressNotesInput>, TaskUncheckedUpdateWithoutProgressNotesInput>
  }

  export type UserUpdateOneRequiredWithoutProgressNotesNestedInput = {
    create?: XOR<UserCreateWithoutProgressNotesInput, UserUncheckedCreateWithoutProgressNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressNotesInput
    upsert?: UserUpsertWithoutProgressNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressNotesInput, UserUpdateWithoutProgressNotesInput>, UserUncheckedUpdateWithoutProgressNotesInput>
  }

  export type UserCreateNestedOneWithoutWeeklyReportsInput = {
    create?: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWeeklyReportsNestedInput = {
    create?: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyReportsInput
    upsert?: UserUpsertWithoutWeeklyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklyReportsInput, UserUpdateWithoutWeeklyReportsInput>, UserUncheckedUpdateWithoutWeeklyReportsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    actionSteps?: ActionStepCreateNestedManyWithoutTaskInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdById: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    actionSteps?: ActionStepUncheckedCreateNestedManyWithoutTaskInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    assignee: UserCreateNestedOneWithoutAssignedTasksInput
    actionSteps?: ActionStepCreateNestedManyWithoutTaskInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    assigneeId: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    actionSteps?: ActionStepUncheckedCreateNestedManyWithoutTaskInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskCreateManyCreatedByInputEnvelope = {
    data: TaskCreateManyCreatedByInput | TaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type StepNoteCreateWithoutAuthorInput = {
    id?: string
    content: string
    authorName: string
    timestamp?: Date | string
    step: ActionStepCreateNestedOneWithoutNotesInput
  }

  export type StepNoteUncheckedCreateWithoutAuthorInput = {
    id?: string
    stepId: string
    content: string
    authorName: string
    timestamp?: Date | string
  }

  export type StepNoteCreateOrConnectWithoutAuthorInput = {
    where: StepNoteWhereUniqueInput
    create: XOR<StepNoteCreateWithoutAuthorInput, StepNoteUncheckedCreateWithoutAuthorInput>
  }

  export type StepNoteCreateManyAuthorInputEnvelope = {
    data: StepNoteCreateManyAuthorInput | StepNoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ProgressNoteCreateWithoutAuthorInput = {
    id?: string
    content: string
    authorName: string
    timestamp?: Date | string
    task: TaskCreateNestedOneWithoutProgressNotesInput
  }

  export type ProgressNoteUncheckedCreateWithoutAuthorInput = {
    id?: string
    taskId: string
    content: string
    authorName: string
    timestamp?: Date | string
  }

  export type ProgressNoteCreateOrConnectWithoutAuthorInput = {
    where: ProgressNoteWhereUniqueInput
    create: XOR<ProgressNoteCreateWithoutAuthorInput, ProgressNoteUncheckedCreateWithoutAuthorInput>
  }

  export type ProgressNoteCreateManyAuthorInputEnvelope = {
    data: ProgressNoteCreateManyAuthorInput | ProgressNoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyReportCreateWithoutEmployeeInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    summary: string
    completedCount?: number
    inProgressCount?: number
    overdueCount?: number
    todoCount?: number
    createdAt?: Date | string
  }

  export type WeeklyReportUncheckedCreateWithoutEmployeeInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    summary: string
    completedCount?: number
    inProgressCount?: number
    overdueCount?: number
    todoCount?: number
    createdAt?: Date | string
  }

  export type WeeklyReportCreateOrConnectWithoutEmployeeInput = {
    where: WeeklyReportWhereUniqueInput
    create: XOR<WeeklyReportCreateWithoutEmployeeInput, WeeklyReportUncheckedCreateWithoutEmployeeInput>
  }

  export type WeeklyReportCreateManyEmployeeInputEnvelope = {
    data: WeeklyReportCreateManyEmployeeInput | WeeklyReportCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeFilter<"Task"> | Date | string
    assigneeId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type StepNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: StepNoteWhereUniqueInput
    update: XOR<StepNoteUpdateWithoutAuthorInput, StepNoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<StepNoteCreateWithoutAuthorInput, StepNoteUncheckedCreateWithoutAuthorInput>
  }

  export type StepNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: StepNoteWhereUniqueInput
    data: XOR<StepNoteUpdateWithoutAuthorInput, StepNoteUncheckedUpdateWithoutAuthorInput>
  }

  export type StepNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: StepNoteScalarWhereInput
    data: XOR<StepNoteUpdateManyMutationInput, StepNoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type StepNoteScalarWhereInput = {
    AND?: StepNoteScalarWhereInput | StepNoteScalarWhereInput[]
    OR?: StepNoteScalarWhereInput[]
    NOT?: StepNoteScalarWhereInput | StepNoteScalarWhereInput[]
    id?: StringFilter<"StepNote"> | string
    stepId?: StringFilter<"StepNote"> | string
    content?: StringFilter<"StepNote"> | string
    authorName?: StringFilter<"StepNote"> | string
    authorId?: StringFilter<"StepNote"> | string
    timestamp?: DateTimeFilter<"StepNote"> | Date | string
  }

  export type ProgressNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ProgressNoteWhereUniqueInput
    update: XOR<ProgressNoteUpdateWithoutAuthorInput, ProgressNoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<ProgressNoteCreateWithoutAuthorInput, ProgressNoteUncheckedCreateWithoutAuthorInput>
  }

  export type ProgressNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ProgressNoteWhereUniqueInput
    data: XOR<ProgressNoteUpdateWithoutAuthorInput, ProgressNoteUncheckedUpdateWithoutAuthorInput>
  }

  export type ProgressNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: ProgressNoteScalarWhereInput
    data: XOR<ProgressNoteUpdateManyMutationInput, ProgressNoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ProgressNoteScalarWhereInput = {
    AND?: ProgressNoteScalarWhereInput | ProgressNoteScalarWhereInput[]
    OR?: ProgressNoteScalarWhereInput[]
    NOT?: ProgressNoteScalarWhereInput | ProgressNoteScalarWhereInput[]
    id?: StringFilter<"ProgressNote"> | string
    taskId?: StringFilter<"ProgressNote"> | string
    content?: StringFilter<"ProgressNote"> | string
    authorName?: StringFilter<"ProgressNote"> | string
    authorId?: StringFilter<"ProgressNote"> | string
    timestamp?: DateTimeFilter<"ProgressNote"> | Date | string
  }

  export type WeeklyReportUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WeeklyReportWhereUniqueInput
    update: XOR<WeeklyReportUpdateWithoutEmployeeInput, WeeklyReportUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WeeklyReportCreateWithoutEmployeeInput, WeeklyReportUncheckedCreateWithoutEmployeeInput>
  }

  export type WeeklyReportUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WeeklyReportWhereUniqueInput
    data: XOR<WeeklyReportUpdateWithoutEmployeeInput, WeeklyReportUncheckedUpdateWithoutEmployeeInput>
  }

  export type WeeklyReportUpdateManyWithWhereWithoutEmployeeInput = {
    where: WeeklyReportScalarWhereInput
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WeeklyReportScalarWhereInput = {
    AND?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
    OR?: WeeklyReportScalarWhereInput[]
    NOT?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
    id?: StringFilter<"WeeklyReport"> | string
    employeeId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    summary?: StringFilter<"WeeklyReport"> | string
    completedCount?: IntFilter<"WeeklyReport"> | number
    inProgressCount?: IntFilter<"WeeklyReport"> | number
    overdueCount?: IntFilter<"WeeklyReport"> | number
    todoCount?: IntFilter<"WeeklyReport"> | number
    createdAt?: DateTimeFilter<"WeeklyReport"> | Date | string
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteUncheckedCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    stepNotes?: StepNoteCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    stepNotes?: StepNoteUncheckedCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type ActionStepCreateWithoutTaskInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: StepNoteCreateNestedManyWithoutStepInput
  }

  export type ActionStepUncheckedCreateWithoutTaskInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: StepNoteUncheckedCreateNestedManyWithoutStepInput
  }

  export type ActionStepCreateOrConnectWithoutTaskInput = {
    where: ActionStepWhereUniqueInput
    create: XOR<ActionStepCreateWithoutTaskInput, ActionStepUncheckedCreateWithoutTaskInput>
  }

  export type ActionStepCreateManyTaskInputEnvelope = {
    data: ActionStepCreateManyTaskInput | ActionStepCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProgressNoteCreateWithoutTaskInput = {
    id?: string
    content: string
    authorName: string
    timestamp?: Date | string
    author: UserCreateNestedOneWithoutProgressNotesInput
  }

  export type ProgressNoteUncheckedCreateWithoutTaskInput = {
    id?: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type ProgressNoteCreateOrConnectWithoutTaskInput = {
    where: ProgressNoteWhereUniqueInput
    create: XOR<ProgressNoteCreateWithoutTaskInput, ProgressNoteUncheckedCreateWithoutTaskInput>
  }

  export type ProgressNoteCreateManyTaskInputEnvelope = {
    data: ProgressNoteCreateManyTaskInput | ProgressNoteCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUncheckedUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    stepNotes?: StepNoteUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    stepNotes?: StepNoteUncheckedUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ActionStepUpsertWithWhereUniqueWithoutTaskInput = {
    where: ActionStepWhereUniqueInput
    update: XOR<ActionStepUpdateWithoutTaskInput, ActionStepUncheckedUpdateWithoutTaskInput>
    create: XOR<ActionStepCreateWithoutTaskInput, ActionStepUncheckedCreateWithoutTaskInput>
  }

  export type ActionStepUpdateWithWhereUniqueWithoutTaskInput = {
    where: ActionStepWhereUniqueInput
    data: XOR<ActionStepUpdateWithoutTaskInput, ActionStepUncheckedUpdateWithoutTaskInput>
  }

  export type ActionStepUpdateManyWithWhereWithoutTaskInput = {
    where: ActionStepScalarWhereInput
    data: XOR<ActionStepUpdateManyMutationInput, ActionStepUncheckedUpdateManyWithoutTaskInput>
  }

  export type ActionStepScalarWhereInput = {
    AND?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
    OR?: ActionStepScalarWhereInput[]
    NOT?: ActionStepScalarWhereInput | ActionStepScalarWhereInput[]
    id?: StringFilter<"ActionStep"> | string
    taskId?: StringFilter<"ActionStep"> | string
    title?: StringFilter<"ActionStep"> | string
    completed?: BoolFilter<"ActionStep"> | boolean
    createdAt?: DateTimeFilter<"ActionStep"> | Date | string
    updatedAt?: DateTimeFilter<"ActionStep"> | Date | string
  }

  export type ProgressNoteUpsertWithWhereUniqueWithoutTaskInput = {
    where: ProgressNoteWhereUniqueInput
    update: XOR<ProgressNoteUpdateWithoutTaskInput, ProgressNoteUncheckedUpdateWithoutTaskInput>
    create: XOR<ProgressNoteCreateWithoutTaskInput, ProgressNoteUncheckedCreateWithoutTaskInput>
  }

  export type ProgressNoteUpdateWithWhereUniqueWithoutTaskInput = {
    where: ProgressNoteWhereUniqueInput
    data: XOR<ProgressNoteUpdateWithoutTaskInput, ProgressNoteUncheckedUpdateWithoutTaskInput>
  }

  export type ProgressNoteUpdateManyWithWhereWithoutTaskInput = {
    where: ProgressNoteScalarWhereInput
    data: XOR<ProgressNoteUpdateManyMutationInput, ProgressNoteUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutActionStepsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    assignee: UserCreateNestedOneWithoutAssignedTasksInput
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutActionStepsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    assigneeId: string
    createdById: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutActionStepsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutActionStepsInput, TaskUncheckedCreateWithoutActionStepsInput>
  }

  export type StepNoteCreateWithoutStepInput = {
    id?: string
    content: string
    authorName: string
    timestamp?: Date | string
    author: UserCreateNestedOneWithoutStepNotesInput
  }

  export type StepNoteUncheckedCreateWithoutStepInput = {
    id?: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type StepNoteCreateOrConnectWithoutStepInput = {
    where: StepNoteWhereUniqueInput
    create: XOR<StepNoteCreateWithoutStepInput, StepNoteUncheckedCreateWithoutStepInput>
  }

  export type StepNoteCreateManyStepInputEnvelope = {
    data: StepNoteCreateManyStepInput | StepNoteCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutActionStepsInput = {
    update: XOR<TaskUpdateWithoutActionStepsInput, TaskUncheckedUpdateWithoutActionStepsInput>
    create: XOR<TaskCreateWithoutActionStepsInput, TaskUncheckedCreateWithoutActionStepsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutActionStepsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutActionStepsInput, TaskUncheckedUpdateWithoutActionStepsInput>
  }

  export type TaskUpdateWithoutActionStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutActionStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type StepNoteUpsertWithWhereUniqueWithoutStepInput = {
    where: StepNoteWhereUniqueInput
    update: XOR<StepNoteUpdateWithoutStepInput, StepNoteUncheckedUpdateWithoutStepInput>
    create: XOR<StepNoteCreateWithoutStepInput, StepNoteUncheckedCreateWithoutStepInput>
  }

  export type StepNoteUpdateWithWhereUniqueWithoutStepInput = {
    where: StepNoteWhereUniqueInput
    data: XOR<StepNoteUpdateWithoutStepInput, StepNoteUncheckedUpdateWithoutStepInput>
  }

  export type StepNoteUpdateManyWithWhereWithoutStepInput = {
    where: StepNoteScalarWhereInput
    data: XOR<StepNoteUpdateManyMutationInput, StepNoteUncheckedUpdateManyWithoutStepInput>
  }

  export type ActionStepCreateWithoutNotesInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutActionStepsInput
  }

  export type ActionStepUncheckedCreateWithoutNotesInput = {
    id?: string
    taskId: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionStepCreateOrConnectWithoutNotesInput = {
    where: ActionStepWhereUniqueInput
    create: XOR<ActionStepCreateWithoutNotesInput, ActionStepUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutStepNotesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutStepNotesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutStepNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepNotesInput, UserUncheckedCreateWithoutStepNotesInput>
  }

  export type ActionStepUpsertWithoutNotesInput = {
    update: XOR<ActionStepUpdateWithoutNotesInput, ActionStepUncheckedUpdateWithoutNotesInput>
    create: XOR<ActionStepCreateWithoutNotesInput, ActionStepUncheckedCreateWithoutNotesInput>
    where?: ActionStepWhereInput
  }

  export type ActionStepUpdateToOneWithWhereWithoutNotesInput = {
    where?: ActionStepWhereInput
    data: XOR<ActionStepUpdateWithoutNotesInput, ActionStepUncheckedUpdateWithoutNotesInput>
  }

  export type ActionStepUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutActionStepsNestedInput
  }

  export type ActionStepUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutStepNotesInput = {
    update: XOR<UserUpdateWithoutStepNotesInput, UserUncheckedUpdateWithoutStepNotesInput>
    create: XOR<UserCreateWithoutStepNotesInput, UserUncheckedCreateWithoutStepNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepNotesInput, UserUncheckedUpdateWithoutStepNotesInput>
  }

  export type UserUpdateWithoutStepNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutStepNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type TaskCreateWithoutProgressNotesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    assignee: UserCreateNestedOneWithoutAssignedTasksInput
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    actionSteps?: ActionStepCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProgressNotesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    assigneeId: string
    createdById: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    actionSteps?: ActionStepUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProgressNotesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProgressNotesInput, TaskUncheckedCreateWithoutProgressNotesInput>
  }

  export type UserCreateWithoutProgressNotesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutProgressNotesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteUncheckedCreateNestedManyWithoutAuthorInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutProgressNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressNotesInput, UserUncheckedCreateWithoutProgressNotesInput>
  }

  export type TaskUpsertWithoutProgressNotesInput = {
    update: XOR<TaskUpdateWithoutProgressNotesInput, TaskUncheckedUpdateWithoutProgressNotesInput>
    create: XOR<TaskCreateWithoutProgressNotesInput, TaskUncheckedCreateWithoutProgressNotesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutProgressNotesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutProgressNotesInput, TaskUncheckedUpdateWithoutProgressNotesInput>
  }

  export type TaskUpdateWithoutProgressNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    actionSteps?: ActionStepUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProgressNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionSteps?: ActionStepUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutProgressNotesInput = {
    update: XOR<UserUpdateWithoutProgressNotesInput, UserUncheckedUpdateWithoutProgressNotesInput>
    create: XOR<UserCreateWithoutProgressNotesInput, UserUncheckedCreateWithoutProgressNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressNotesInput, UserUncheckedUpdateWithoutProgressNotesInput>
  }

  export type UserUpdateWithoutProgressNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUncheckedUpdateManyWithoutAuthorNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserCreateWithoutWeeklyReportsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutWeeklyReportsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    stepNotes?: StepNoteUncheckedCreateNestedManyWithoutAuthorInput
    progressNotes?: ProgressNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutWeeklyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
  }

  export type UserUpsertWithoutWeeklyReportsInput = {
    update: XOR<UserUpdateWithoutWeeklyReportsInput, UserUncheckedUpdateWithoutWeeklyReportsInput>
    create: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklyReportsInput, UserUncheckedUpdateWithoutWeeklyReportsInput>
  }

  export type UserUpdateWithoutWeeklyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    stepNotes?: StepNoteUncheckedUpdateManyWithoutAuthorNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TaskCreateManyAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    createdById: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TaskCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate: Date | string
    assigneeId: string
    createdAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type StepNoteCreateManyAuthorInput = {
    id?: string
    stepId: string
    content: string
    authorName: string
    timestamp?: Date | string
  }

  export type ProgressNoteCreateManyAuthorInput = {
    id?: string
    taskId: string
    content: string
    authorName: string
    timestamp?: Date | string
  }

  export type WeeklyReportCreateManyEmployeeInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    summary: string
    completedCount?: number
    inProgressCount?: number
    overdueCount?: number
    todoCount?: number
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    actionSteps?: ActionStepUpdateManyWithoutTaskNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionSteps?: ActionStepUncheckedUpdateManyWithoutTaskNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    actionSteps?: ActionStepUpdateManyWithoutTaskNestedInput
    progressNotes?: ProgressNoteUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionSteps?: ActionStepUncheckedUpdateManyWithoutTaskNestedInput
    progressNotes?: ProgressNoteUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: ActionStepUpdateOneRequiredWithoutNotesNestedInput
  }

  export type StepNoteUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutProgressNotesNestedInput
  }

  export type ProgressNoteUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    completedCount?: IntFieldUpdateOperationsInput | number
    inProgressCount?: IntFieldUpdateOperationsInput | number
    overdueCount?: IntFieldUpdateOperationsInput | number
    todoCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionStepCreateManyTaskInput = {
    id?: string
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressNoteCreateManyTaskInput = {
    id?: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type ActionStepUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StepNoteUpdateManyWithoutStepNestedInput
  }

  export type ActionStepUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StepNoteUncheckedUpdateManyWithoutStepNestedInput
  }

  export type ActionStepUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutProgressNotesNestedInput
  }

  export type ProgressNoteUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressNoteUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteCreateManyStepInput = {
    id?: string
    content: string
    authorName: string
    authorId: string
    timestamp?: Date | string
  }

  export type StepNoteUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutStepNotesNestedInput
  }

  export type StepNoteUncheckedUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepNoteUncheckedUpdateManyWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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