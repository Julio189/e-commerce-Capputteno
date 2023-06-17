import { Product } from "./Product"

export interface ProductFetchResponse {
    data: {
        allProducts: Product[]
    }
}