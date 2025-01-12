import React from 'react';
import Section from '../../shared/Section';
import useMenu from '../../hooks/useMenu';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {

    const [items, loading, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handelDelete = (id) => {
        // console.log('handel Delete added ', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });


    }


    if (loading) {
        return <div className='flex items-center justify-center min-h-screen'>
            <span className='loading-spinner'></span>
        </div>
    }
    return (
        <div>
            <Section heading='Manage All Items' subHeading='Hurry Up'></Section>
            <div className=' w-full text-black p-6 mt-5'>
                <div className="overflow-x-auto">
                    <table className="table bg-[#D1A054] table-zebra">
                        {/* head */}
                        <thead >
                            <tr className=' text-white font-Cinzel'>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {items.map((menu, idx) => <tr key={menu._id}>
                                <td>{idx + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={menu.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{menu.name}</td>
                                <td className='text-right'>${menu.price}</td>
                                <td>
                                    <Link to={`/dashboard/menu/update/${menu._id}`}>
                                        <button
                                            className="btn btn-md bg-green-300"> <FaEdit size={16}></FaEdit></button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handelDelete(menu._id)}
                                        className='btn  btn-md bg-red-500'>
                                        <MdDelete size={24}></MdDelete>
                                    </button>
                                </td>
                            </tr>

                            )}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;