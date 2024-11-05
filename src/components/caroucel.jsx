import { useState } from 'react';

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const left = '<';
    const right = '>';

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section>
            <div key={slides[currentIndex].id} className="flex flex-col w-full p-8 text-center bg-slate-100 pt-16">
                <span>BECAUSE EVERY FAMILY'S NEEDS ARE UNIQUE</span>

                <span className="text-5xl mt-12 font-thin w-52 leading-15 mx-auto text-center">
                    TRUSTED HOMES LIKE YOURS
                </span>
                <div className="flex justify-between px-5">
                    <button onClick={prevSlide} className="bg-white w-11 rounded-full border border-gray-400">
                        {left}
                    </button>
                    <button onClick={nextSlide} className="bg-white w-11 rounded-full border border-gray-400">
                        {right}
                    </button>
                </div>
                
                <span className="text-center mt-6">{slides[currentIndex].text}</span>
                <div className="flex justify-center items-center p-6 pb-10">
                    <img src={slides[currentIndex].img} alt="user" className='w-11 rounded-full' />
                    <span className='mx-3 text-lg font-normal'>{slides[currentIndex].name}</span>
                </div>
            </div>
        </section>
    );
}
