import product from "./product.json"
export default () => {
    return (
         <>
        <h1 className="font-semibold text-xl">{`Name : ${product.name}`} </h1>
         </>
    )
}