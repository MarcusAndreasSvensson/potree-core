import {Color, IUniform as IThreeUniform} from 'three';

export type IGradient = [number, Color][];

export type ClassificationEntry = {
  visible: boolean;
  name: string;
  color: [number, number, number, number];
}

export interface IClassification {
  [value: string]: ClassificationEntry;
  DEFAULT: ClassificationEntry;
}

export interface IUniform<T> extends IThreeUniform {
  type: string;
  value: T;
}
