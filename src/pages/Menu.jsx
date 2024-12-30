import React from 'react';
import Parallax from '../shared/ParallasCard';
import image1 from '../assets/menu/banner3.jpg'
import imageDesert from '../assets/menu/dessert-bg.jpeg'
import imageSalad from '../assets/menu/salad-bg.jpg'
import imageSoup from '../assets/menu/soup-bg.jpg'
import imagePizza from '../assets/menu/pizza-bg.jpg'
import useMenu from '../hooks/useMenu';
import MenuCategory from '../shared/MenuCategory';
import { Link } from 'react-router-dom';
import Section from '../shared/Section';
import { Helmet } from 'react-helmet-async';

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
             <Helmet>
                    <title>Bistro Boss | Menu</title>
                  </Helmet>
            <div>
                <Parallax title='Our Menu' img={image1} subTitle='Would you like to try a dish?'></Parallax>
            </div>
            <div >
                <Section heading="Today's Offer" subHeading="Don't Miss"></Section>
                <MenuCategory title='Salad' items={offered}></MenuCategory>

            </div>
            <div className='space-y-20'>
                <Parallax title='Dessert' img={imageDesert} subTitle='Dramatically negotiate superior outsourcing without exceptional total linkage. Enthusiastically negotiate global partnerships via.'></Parallax>
                <MenuCategory title='Dessert' items={dessert}></MenuCategory>

            </div>
            <div className='space-y-20'>
                <Parallax title='Pizza' img={imagePizza} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory title='Pizza' items={pizza}></MenuCategory>
               

            </div>
            <div className='space-y-20'>
                <Parallax title='Salad' img={imageSalad} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory title='Salad' items={salad}></MenuCategory>
               
            </div>
            <div className='space-y-20'>
                <Parallax title='Soups' img={imageSoup} subTitle='Synergistically whiteboard pandemic supply chains for competitive core competencies. Synergistically envisioneer client-focused.'></Parallax>
                <MenuCategory title='Soups' items={soup}></MenuCategory>
            </div>
        </section>
    );
};

export default Menu;