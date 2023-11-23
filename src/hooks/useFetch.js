import { useEffect,useState } from "react";

export function useFetch(fetchFn,intialValue){
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData,setFetchData]=useState(intialValue)

    useEffect(() => {
        async function fetchedData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchData(data);
          } catch (error) {
            setError({
              message: error.message || "Failed to fetch data",
            });
          }
          setIsFetching(false);
        }
        fetchedData();
      }, [fetchFn]);
      return {
        isFetching,
        fetchedData,
        setFetchData,
        error,
      }
}