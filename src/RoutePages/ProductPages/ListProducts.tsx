import { Product } from '../../components/Product'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import { FaSort } from 'react-icons/fa';

interface IProducts {
    products: Product[];
}

const ListProducts: React.FC<IProducts> = ({ products }) => {

    const [sortedField, setSortedField] = useState<keyof Product | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    let sortedProducts: Product[] = [...products];

    if (sortedField !== null) {
        sortedProducts.sort((a, b) => {
            const sortValue = sortDirection === 'asc' ? 1 : -1;
            if (a[sortedField!] < b[sortedField!]) {
                return -1 * sortValue;
            }
            if (a[sortedField!] > b[sortedField!]) {
                return 1 * sortValue;
            }
            return 0;
        });
    }

    const sortByColumn = (field: keyof Product) => {
        if (sortedField === field) {
            setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortedField(field);
            setSortDirection('asc');
        }
    };

    return (
        <div>
            <Table striped bordered hover className='table-size'>
                <thead>
                    <tr>
                        <th className='col-md-2'>Product Name
                        <button type="button"
                                className='btn'
                                onClick={() => sortByColumn('product_name')}><FaSort /></button>

                        </th>
                        <th className='col-md-4'>Product Description
                        <button type="button"
                                className='btn'
                                onClick={() => sortByColumn('product_desc')}><FaSort /></button>
                        </th>
                        <th className='col-md-2'>Product Price
                        <button type="button"
                                className='btn'
                                onClick={() => sortByColumn('product_price')}><FaSort /></button>
                        </th>
                        <th className='col-md-2'>Product Quantity 
                        <button type="button"
                                className='btn'
                                onClick={() => sortByColumn('product_qty')}><FaSort /></button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(
                        sortedProducts.map((post: any) => {
                            return (
                                <tr className='border' key={post.id}>
                                    <td className='border' > <strong>{post.product_name}</strong></td>
                                    <td className='col-md-4 border' > {post.product_desc}</td>
                                    <td className='border' > {post.product_price}</td>
                                    <td className='border' > {post.product_qty}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default ListProducts