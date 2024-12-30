import React from 'react';
import Parallax from '../shared/ParallasCard';
import Section from '../shared/Section';
import image1 from '../assets/menu/banner3.jpg'
import imageDesert from '../assets/menu/dessert-bg.jpeg'
import imageSalad from '../assets/menu/salad-bg.jpg'
import imageSoup from '../assets/menu/soup-bg.jpg'
import imagePizza from '../assets/menu/pizza-bg.jpg'
import useMenu from '../hooks/useMenu';
import MenuCategory from '../shared/MenuCategory';

const Menu = () => {
    const [items, loading] = useMenu();
    const offered = items.filter(item => item.category === 'offered')
    const salad = items.filter(item => item.category === 'salad')
    const pizza = items.filter(item => item.category === 'pizza')
    const soup = items.filter(item => item.category === 'soup')
    const dessert = items.filter(item => item.category === 'dessert')

    if (loading) {
        return <div className='flex items-center justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <section className='md:space-y-20 mb-10 space-y-10'>
            <div>
                <Parallax title='Our Menu' img={image1} subTitle='Would you like to try a dish?'></Parallax>
            </div>
            <div className='space-y-20'>
                <Section heading="Today's Offer" subHeading="Don't Miss"></Section>
                <MenuCategory items={offered}></MenuCategory>
                <div className='my-5 py-5 flex items-center justify-center'>
                    <button className="btn border-0 border-b-2 border-orange-500 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
            <div className='space-y-20'>
                <Parallax title='Dessert' img={imageDesert} subTitle='Dramatically negotiate superior outsourcing without exceptional total linkage. Enthusiastically negotiate global partnerships via.'></Parallax>
                <MenuCategory items={dessert}></MenuCategory>
                <div className='my-5 py-5 flex items-center justify-center'>
                    <button className="btn border-0 border-b-2 border-orange-500 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
            <div className='space-y-20'>
                <Parallax title='Pizza' img={imagePizza} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory items={pizza}></MenuCategory>
                <div className='my-5 py-5 flex items-center justify-center'>
                    <button className="btn border-0 border-b-2 border-orange-500 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </div>

            </div>
            <div className='space-y-20'>
                <Parallax title='Salad' img={imageSalad} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory items={salad}></MenuCategory>
                <div className='my-5 py-5 flex items-center justify-center'>
                    <button className="btn border-0 border-b-2 border-orange-500 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
            <div className='space-y-20'>
                <Parallax title='Soups' img={imageSoup} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory items={soup}></MenuCategory>
                <div className='my-5 py-5 flex items-center justify-center'>
                    <button className="btn border-0 border-b-2 border-orange-500  btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </section>
    );
};

export default Menu;