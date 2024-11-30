import product from './product.json'
export default () => {
    return (
         <>
          <img className="w-[600px] h-[600px] ml-[300px]" src={`${product.image}`} alt="" />
         </>
    )
}