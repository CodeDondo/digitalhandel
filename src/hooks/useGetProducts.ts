import { useEffect, useState } from 'react';
import { Product } from '../types/Product.types';

export const useGetProducts = () => {
    const [data, setData] = useState<Product | null>();
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
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
    }, []);

    return { data, loading, error }
}