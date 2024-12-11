'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProducts = () => {
    const [productList, setProductList] = useState([]);

    const fetchProduct = () => {
        axios.get('http://localhost:5000/product/getall')
            .then((result) => {
                console.table(result.data);
                setProductList(result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchProduct();

    }, [])
    const deleteProduct = (id) => {
        axios.delete('http://localhost:5000/product/delete/' + id)
            .then((result) => {
                toast.success('User Deleted Successfully');
                fetchProduct();
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to delete user');
            })

    }
    return (
        <div className=''>
            <div className='container mx-auto py-10'>
                <h1 className='text-center text-2xl font-bold'>ManageProduct</h1>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-600 text-white font-bold'>
                            <th className='p-3'>id</th>
                            <th className='p-3'>name</th>
                            <th className='p-3'>brand</th>
                            <th className='p-3'>price</th>
                            <th className='p-3'>description</th>
                            <th className='p-3'>image</th>
                            <th className='p-3'>category</th>
                            <th className='p-3'>Created At</th>
                            <th className='p-3' colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map((product) => {
                                return (
                                    <tr key={product._id} className='border bg-gray-200'>
                                        <td className='p-3'>{product._id} </td>
                                        <td className='p-3'>{product.name} </td>
                                        <td className='p-3'>{product.brand} </td>
                                        <td className='p-3'>{product.price} </td>
                                        <td className='p-3'>{product.description} </td>
                                        <td className='p-3'>
                                            <img src={product.image} alt="" />
                                        </td>
                                        <td className='p-3'>{product.category} </td>
                                        <td className='p-3'>{new Date(product.createdAt).toDateString()}</td>
                                        {<td className='p-3'>
                                            <button onClick={() => { deleteProduct(product._id) }}
                                                className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                                        </td>}
                                        <td className='p-3'>
                                            <Link href={'/updateProduct/' + product._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</Link>

                                        </td>

                                    </tr>
                                )
                            })

                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default ManageProducts;