import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

const SingleProductPage = () => {
  const {id} = useParams()
    const [product,setProduct] = useState(null)
   const [isloading,setIsLoading] = useState(false)
   const [error,setError] = useState('')
   const [count,setCounter] = useState(0)

   useEffect(()=>{
    const fetchProduct = async () => {
      setIsLoading(true)
      setError('')
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      setProduct(response.data);
    } catch (error) {
      console.log(error);
      setError(error)
    }finally{
      setIsLoading(false)
    }
  }
  // calling fetchProducts function
   fetchProduct()
   },[])

   console.log(product);
   if(error) return <p>Something went wrong</p>

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2>{product?.title}</h2>
      {/* <img src={product?.images[0]} alt={product?.title} className="mb-4 rounded-md" loading="lazy"/> */}
      <button className="bg-teal-500 text-white px-4 py-2 rounded-md ">add</button>
      <p>quantity: {count}</p>
      <button className="bg-teal-500 text-white px-4 py-2 rounded-md">subtract</button>
    </div>
  )
}
export default SingleProductPage