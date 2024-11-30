import product from './product.json'
export default () => {
    return (
         <>
         <p className='text-lg font-thin'>{`${product.description}`}</p>
         </>
    )
}