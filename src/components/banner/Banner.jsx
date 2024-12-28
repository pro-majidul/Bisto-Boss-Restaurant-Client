import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './banner.css'
import picture1 from '../../assets/home/01.jpg'
import picture2 from '../../assets/home/02.jpg'
import picture3 from '../../assets/home/03.png'
import picture4 from '../../assets/home/04.jpg'
import picture5 from '../../assets/home/05.png'
import picture6 from '../../assets/home/06.png'

const Banner = () => {
    return (
        <div >
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                showThumbs={true}
                thumbWidth={100}
            >
                <div>
                    <img src={picture1} />

                </div>
                <div>
                    <img src={picture2} />

                </div>
                <div>
                    <img src={picture3} />

                </div>
                <div>
                    <img src={picture4} />

                </div>
                <div>
                    <img src={picture5} />

                </div>
                <div>
                    <img src={picture6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;

// showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}