

export const fetchProducts = async () => {
    try{
    const response = await fetch('https://dummyjson.com/products?limit=5&select=id,title,description,category,price,discountPercentage')
    const data = await response.json()
    // console.log(data.products)
    return data.products  
    }
    catch (error){
        console.error("Failed to fetch products from API", error)
        return []
    }
}
