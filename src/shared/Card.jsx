import React from 'react';
import useUsers from '../hooks/useUsers';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import UsetansTackQuery from '../hooks/UsetansTackQuery';

const Card = ({ salad }) => {
    const { image, name, recipe, price, _id } = salad
    const { users } = useUsers();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [, refetch] = UsetansTackQuery()


    const handelAddCart = () => {
        const cardInfo = {
            CardId: _id,
            userEmail: users?.email,
            image, name, recipe, price
        }

        if (users && users?.email) {
            axiosSecure.post('/carts', cardInfo)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart Success`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    refetch()
                })


        } else {
            Swal.fire({
                title: "You are not login",
                text: "Please Login First if You want add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
                <p className='bg-black p-1 rounded text-xs absolute right-12 top-12'>Price ${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handelAddCart} className=" px-5 py-3 border-orange-300 border-b rounded-lg shadow bg-slate-500 hover:bg-[#131211] hover:border-none mt-2 hover:text-orange-300 text-orange-300">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;