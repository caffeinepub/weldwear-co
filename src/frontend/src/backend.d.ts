import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    amazonUrl: string;
    name: string;
    description: string;
    sizes: Array<string>;
    imageUrl: string;
    price: number;
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getProduct(id: bigint): Promise<Product>;
}
