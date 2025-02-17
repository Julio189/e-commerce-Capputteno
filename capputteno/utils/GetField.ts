import { PriorityTypes } from "@/Types/PriorityTypes";

export const getField = (priority:PriorityTypes) => {
    if(priority === PriorityTypes.NEWS) return {field:'created_at', order:"ASC"}
    if(priority === PriorityTypes.BIGGEST_PRICE) return {field:'price_in_cents', order:'DSC'}
    if(priority === PriorityTypes.MINOR_PRICE) return {field:'price_in_cents', order:'ASC'}
    return {field:'sales', order:'DSC'}
}