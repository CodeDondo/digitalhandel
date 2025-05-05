import { useEffect, useState } from 'react';

export const useGet = (url: string) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setData(data);

            } catch (error) {
                if (error instanceof Error) {
                    setError(error)
                }
                console.error('Error fetching data', error)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url]);

    return { data, loading, error }
}