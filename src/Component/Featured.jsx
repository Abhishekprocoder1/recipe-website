import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [

        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },

    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prvslider1 = () => {
        const isfirstslider = currentIndex === 0
        const newindex = isfirstslider ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newindex)
    }

    const prvslider2 = () => {
        const isfirstslider = currentIndex === sliders.length - 1
        const newindex = isfirstslider ? 0 : currentIndex + 1
        setCurrentIndex(newindex)
    }

    const moveToslide = (sliderindex) => {
        setCurrentIndex(sliderindex)
    }

    
    return (
        <div className='max-w-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            ></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prvslider1} />
            </div>

            <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={prvslider2} />
            </div>

            <div className=' flex top-4 justify-center py-2'>
                {

                    sliders.map((sliderItem, sliderindex) => (
                        <div
                            key={sliderindex}
                            onClick={() => moveToslide(sliderindex)} className=' text-2xl cursor-pointer'>
                            <RxDotFilled />
                        </div>
                    )
                    )}
            </div>

        </div>
    )
}

export default Featured