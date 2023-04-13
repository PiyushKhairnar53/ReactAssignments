import { Product } from './Product';

interface IProducts {
    products: Product[];
}

const ListProducts: React.FC<IProducts> = ({ products }) => {

    return (
        <div>
            <table className='table-row'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                    </tr>
                </thead>
            </table>
            <ul>
                {(
                    products.map((post: any) => {
                        return (
                            <div>
                                <div>
                                    <table>
                                        <tr key={post.id}>
                                            <td > <strong>{post.product_name}</strong></td>
                                            <td > {post.product_desc}</td>
                                            <td > {post.product_price}</td>
                                            <td > {post.product_qty}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                )}
            </ul>
        </div>
    )
}

export default ListProducts