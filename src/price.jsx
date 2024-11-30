import product from "./product.json"
export default () => {
    return (
         <>
         <h2 className="font-bold text-xl">{`Price : ${product.price}`}</h2>
         </>
    )
}