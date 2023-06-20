import { FilterType } from '@/Types/FilterTypes'

const getCategory = (type: FilterType) => {
  if (type === FilterType.MUG) return 'mugs'
  if (type === FilterType.SHIRT) return 't-shirts'
  return ''  
  
}

export default getCategory
