import { ProductFetchResponse } from "@/Types/ProductsResponse"
import { useQuery } from "@tanstack/react-query"
import axios, {AxiosPromise} from "axios"
import useFilter from "./useFilter"
import { FilterType } from "@/Types/FilterTypes"
import getCategory from "@/utils/GetCategory"
import { PriorityTypes } from "@/Types/PriorityTypes"
import { getField } from "@/utils/GetField"

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL ,{ query })
}

const mountQuery = (type: FilterType, priority:PriorityTypes) => {
    if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return  `query {
        allProducts (sortField: "sales", sortOrder:"DSC"){
            id
            name    
            price_in_cents
            image_url
        }
    }`

    const sortSettings = getField(priority)
    const categotyFilter = getCategory(type)

    return ` query {
        allProducts(sortField: "${sortSettings.field}", sortOrder:"${sortSettings.order}", ${categotyFilter ? `filter: {category:"${categotyFilter}"}`: ""}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
      
    
    `
}

export const useProducts = () => {
    const { type, priority } = useFilter()
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey:['products', type, priority]
    })

    return {
        data: data?.data?.data?.allProducts
    }
}