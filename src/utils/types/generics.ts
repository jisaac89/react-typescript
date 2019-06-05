export type ICreateContext<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export interface IDictionary<T> {
  [id: string]: T;
}

export type ITupleOfLength<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };
