
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(item:string, initialValue:T) {
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if(value) setValue(JSON.parse(value))
    }, [window])

    const updateLocalStorage = (newValue:T) => {
        setValue(newValue);
        localStorage.setItem(item ,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}

