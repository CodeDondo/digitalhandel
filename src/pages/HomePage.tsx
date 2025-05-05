import { useContext } from 'react'
import { useGetProducts } from '../hooks/useGetProducts.ts'
import { CartContext } from '../context/_CartContext.tsx'

export const HomePage = () => {
    const { data, loading, error } = useGetProducts()
    const { addToCart } = useContext(CartContext)

    console.log(data)

    if (loading) {
        return <h1>Loading...</h1>
    }
    

    if (error) {
        return <h1>Error: {error.message}</h1>
    }
    
    return (
        <section>
            <h1>Vores produkter</h1>
            <div>
                {data?.products.map((product) => {
                    return (
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                            <p>{product.price} DKK</p>
                            <button onClick={() => addToCart(product)}>Tilføj til kurv</button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}