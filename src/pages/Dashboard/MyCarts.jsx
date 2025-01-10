import React from 'react';
import Section from '../../shared/Section';
import UsetansTackQuery from '../../hooks/UsetansTackQuery';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const MyCarts = () => {
    const [cart, refetch] = UsetansTackQuery();
    const postData = useAxiosSecure()
    // console.log(cart.length);

    const totalPrice = cart.reduce((total, current) => total + current.price, 0)

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                postData.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()

                        }
                    })
            }


        });

    }
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | My Carts</title>
            </Helmet>
            <div className='mb-3 pb-3 md:mb-5 md:pb-5'>
                <Section heading='Wanna Add More' subHeading='My Cart'></Section>
            </div>
            <div className='bg-white w-full p-10'>
                <div className='font-Cinzel flex items-center justify-evenly my-3 py-3 md:my-5 md:py-5'>
                    <h2 className='font-bold text-black text-xl'>Total Orders: {cart.length}</h2>
                    <h2 className='font-bold text-black text-xl'>Total Price: $ {totalPrice} </h2>
                    <button className='btn bg-[#D1A054] text-white text-xl'>Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-[#D1A054]">
                        {/* head */}
                        <thead>
                            <tr className=' font-Cinzel  '>
                                <th className='text-white text-lg'>
                                    Sl.
                                </th>
                                <th className='text-white text-lg'>Item Image</th>
                                <th className='text-white text-lg'>Item Name</th>
                                <th className='text-white text-lg'>Item Price</th>
                                <th className='text-white text-lg'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, idx) => <tr key={item._id}>
                                <th className='text-gray-400'>
                                    {idx + 1}
                                </th>
                                <td className='w-8 h-8'>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className='text-gray-400'>
                                    {item.name}
                                </td>
                                <td className='text-gray-400'>$ {item.price}</td>
                                <td>
                                    <p onClick={() => handelDelete(item._id)} className='py-2 rounded-lg border flex items-center justify-center hover:bg-red-300 bg-red-700 w-1/2'> <MdDelete size={24} /></p>
                                </td>
                            </tr>)}


                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyCarts;