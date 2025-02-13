import React from 'react';
import Section from '../../shared/Section';
import UsetansTackQuery from '../../hooks/UsetansTackQuery';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const MyBooking = () => {
    const [cart, refetch] = UsetansTackQuery();
    const postData = useAxiosSecure()
    // console.log(cart);

    const totalPrice = cart.reduce((total, current) => total + current.price, 0)
    // console.log(totalPrice);

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
                        // console.log(res.data);
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
            <Section heading='My Booking' subHeading='Excellent Ambience'></Section>
            <div className='bg-white w-full p-10'>
                <div className='font-Cinzel flex items-center justify-evenly my-3 py-3 md:my-5 md:py-5'>
                    <h2 className='font-bold text-black text-xl'>Total Orders: {cart.length}</h2>
                    <h2 className='font-bold text-black text-xl'>Total Price: $ {totalPrice} </h2>
                    {
                        cart.length ? <Link to='/dashboard/payment'>
                            <button className='btn bg-[#D1A054] text-white text-xl'>Pay</button>
                        </Link> : <button disabled className='btn bg-[#D1A054] text-white text-xl'>Pay</button>
                    }
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
                        <tbody className='bg-white'>
                            {cart.map((item, idx) => <tr key={item._id}>
                                <th className='text-gray-600'>
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
                                <td className='text-gray-600'>
                                    {item.name}
                                </td>
                                <td className='text-gray-600'>$ {item.price}</td>
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

export default MyBooking;