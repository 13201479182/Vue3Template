/**
 * 1. adjacent-overload-signatures
 * 强制函数重载及其其实现放在一起
 */
// export function foo(s: string): string;
// export function bar(d: boolean): boolean;
// export function foo(n: number): number;
// export function foo(arg: any): any {}

/**
 * 2. array-type
 * 强制数组始终使用T[] | readonly T[]
 */
// const x: Array<string> = ['1'];
// const y: ReadonlyArray<number> = [1];
// const z: string[] = ['1'];
// const w: readonly number[] = [1, 3];

/**
 * 3. await-thenable
 * 规避不正当的使用await
 */
// const a = () => {};
// await a();

/**
 * 4. ban-types
 * 禁止使用内置类型充当数据的类型
 */
// const str: String = 'foo';
// const bool: Boolean = true;
// const num: Number = 1;
// const symb: Symbol = Symbol('foo');
// const lowerObj: Object = {};
// const curly: {} = 1;

/**
 * 5. class-literal-property-style
 * 规定所有getter方法都使用修饰符型的字段来定义他们
 */
// class People {
//     private readonly age = 100;
//     public get age2() {
//         // eslint-disable-next-line no-magic-numbers
//         return 100;
//     }
// }

/**
 * 6. consistent-generic-constructors
 * 规定所有的泛型构造函数泛型变量都出现在构造函数上
 */
// const map: Map<string, number> = new Map();
// const map = new Map<string, number>();

/**
 * 7. consistent-indexed-object-style
 * 规定所有的索引签名采用接口 而非Record
 */
// type Foo = Record<string, unknown>;
// interface Foo {
//     [key: string]: number;
// }

/**
 * 8. consistent-type-assertions
 * 强制采用一致的断言<>
 */
// const y = {} as any;
// const z = <unknown>{};
// const x = <const>{};
