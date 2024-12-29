import React from 'react';

const Card = ({ salad }) => {
    const { image, name, recipe } = salad
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className=" px-5 py-3 border-orange-300 border-b rounded-lg shadow bg-slate-500 hover:bg-[#131211] hover:border-none mt-2 hover:text-orange-300 text-orange-300">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;