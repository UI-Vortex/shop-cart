import Card from '../component/Card'
import './product.css'

function Products({result}) {
    return (
        <>
            <section className="card-container">
                {result}
            </section>
        </>
    )
}

export default Products