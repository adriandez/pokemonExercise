import {useCallback} from "react";
import debounce from "lodash.debounce";

const useDebounce = (callback, delay) => {
const debouncedFn = useCallback(debounce((...args) => callback(...args), delay),
[delay]
);
return debouncedFn;
};

export default useDebounce;
export {debounce};