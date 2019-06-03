export type ICreateContext<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export interface IDictionary<T> {
  [id: string]: T;
}
