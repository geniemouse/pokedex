import { useState, useEffect } from "react";

function useFetch(url, defaultData) {
    const [data, updateData] = useState(defaultData);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            updateData(json);
        }

        fetchData();
    }, [url]);

    return data;
}

export default useFetch;
