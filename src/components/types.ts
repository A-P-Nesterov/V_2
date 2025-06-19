import type { IUser } from '@/views/types';

export interface ICompositionCounterProps {
  title?: string;
}
export interface IUserBlockProps {
  user: IUser;
}
export interface IUserBlockEmits {
  (e: 'increment-age', value: string): void;
  (e: 'decrement-age'): void;
}
// type TFruits = Array<string>;

// interface IUser<T> {
//   value: unknown;
//   name: string;
//   entity: T;
// }
// export const user: IUser<string> = {
//   name: 'Sergei',
//   entity: 'Audi',
//   value: undefined,
// };

// export const fruits: TFruits = ['apple', 'banana'];
