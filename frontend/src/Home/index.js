import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://res.cloudinary.com/ckan719/image/upload/v1611377066/122121518_1700239773472669_8897760385241586872_o_vj78qb.jpg',
        altText: 'Nguyễn Công Nhật',
        caption: 'Nguyễn Công Nhật'
    },
    {
        src: 'https://res.cloudinary.com/ckan719/image/upload/v1611377047/minh_tzwyom.jpg',
        altText: 'Phạm Văn Minh',
        caption: 'Phạm Văn Minh'
    },
    {
        src: 'https://res.cloudinary.com/ckan719/image/upload/v1611377047/vuong_q0c60d.jpg',
        altText: 'Phạm Hùng Vương',
        caption: 'Phạm Hùng Vương'
    }
];

function Home() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                height = '500px'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );

}
export default Home;