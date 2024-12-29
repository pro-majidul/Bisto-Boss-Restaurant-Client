import MenuCard from '../shared/MenuCard';
import useMenu from '../hooks/useMenu';

const PopularMenu = () => {
    const [items, loading] = useMenu()
    const popular = items.filter(item => item.category === 'popular')
    if (loading) {
        return <div className='flex items-center justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {

    //             const popularmenu = data.filter(item => item.category === 'popular')
    //             console.log(data);
    //             setItems(popularmenu)
    //         })
    // }, [])
    return (
        <div className='grid md:grid-cols-2 gap-10 space-y-4'>
            {
                popular.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
    );
};

export default PopularMenu;