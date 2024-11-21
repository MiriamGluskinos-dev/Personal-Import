import { useCallback, useState } from "react"
import axios from "axios"


const useGet = (url, { token, params = {}, headers = {} } = {}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            let response = null;
            if (params && params.CargoSearchKey)
                response = await axios.get(url, {
                    params: {
                        ...params,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers,
                    },
                    ...(token && { headers: { ...headers, Authorization: `Bearer ${token}` } }),
                });
            if (response) {
                setData(response)
            }
            console.log(data)
        } catch (err) {
            setError(err)
            if (err.response) {
                console.log(`API error: ${err.response.status} - ${err.response.statusText}`)
                throw new Error(`API error: ${err.response.status} - ${err.response.statusText}`);
            } else if (err.request) {
                throw new Error('No response received from the server');
            } else {
                throw new Error('Failed to fetch data');
            }
        } finally {
            setLoading(false)
        }
    });

    return { data, error, loading, refetch: fetchData };
};

export default useGet;