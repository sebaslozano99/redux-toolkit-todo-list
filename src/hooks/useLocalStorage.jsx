import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || initialValue;
    })


    useEffect(() => {
        localStorage.setItem(key , JSON.stringify(value));
    }, [value, key])


    return [value, setValue];

}
