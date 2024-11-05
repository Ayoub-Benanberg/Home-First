import Carousel from "./caroucel";
import testimonialData from '../data/testimonial';

export default function MainPage() {
    return (
        <div className="absolute w-full z-10">
            <section className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col mt-12">
                    <div className="p-16 flex flex-col">

                        {/* heading text */}
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-1">OUR</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-1">COMMITMENT TO</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-1">EXCELLENCE</span>

                        {/* smaller heading */}
                        <span className="mt-10 font-medium text-sm sm:text-base md:text-lg">GUARANTEED SATISFACTION WITH</span>
                        <span className="mb-10 font-medium text-sm sm:text-base md:text-lg">EVERY CLEAN.</span>


                        {/* paragraph */}
                        <span className="pr-16 md:pr-32 font-light mb-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque volu
                            ptates perspiciatis doloribus itaque, distinctio eius vitae, hic quis susci
                            pit eligendi nostrum eum aperiam quidem laborum repellat temporibus cum volup
                            tas voluptatem.
                        </span>

                        <button className="bg-yellow-200 w-48 p-2 rounded-lg hover:bg-yellow-400">
                            DISCOVER MORE
                        </button>

                    </div>


                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-100 flex justify-center items-center">
                    <img src="imgs/img.avif" alt="imge" className="w-[320px] my-14" />
                </div>
            </section>
            {/* img section */}
            <section className="">
                <center>

                    <img src="/imgs/hou.jpg" alt="img" className="w-full h-[90vh] object-cover object-center overflow-x-hidden" />
                </center>
            </section>
            {/*  */}
            <section className="flex justify-center p-9 bg-orange-50 pb-24">
                <div className="card text-center flex flex-col w-full max-w-screen-lg px-4 justify-center">
                    <span className="">BECAUSE EVERY FAMILY'S NEEDS ARE UNIQUE</span>
                    <hr className="border-red-200 mt-1.5 mb-4 mx-auto w-full md:w-2/3 lg:w-1/2" />
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-1 mt-8">TAILORED TO</span>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-1 ">YOUR WORLD</span>
                    <span className="font-light mb-12 w-full md:w-1/3 lg:w-1/2 mx-auto px-16 mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates
                        perspiciatis doloribus itaque, distinctio eius vitae, hic quis suscipit
                        dipisicing elit. Delectus aut aliquid at mollitia est! Odit recusandae erro
                        r natus assumenda perferendis porro facere alias s
                        apiente, laborum sit quaerat a voluptatibus qui.
                    </span>
                    <button className="bg-yellow-200 px-4 p-2 rounded-full mx-auto hover:bg-yellow-400">
                        BEGIN YOUR TAILORED EXPERIENCE
                    </button>
                </div>
            </section>

            {/*  */}
            <section>
                <center>
                    <img src="/imgs/room.jpg" alt="img" className="w-full h-[90vh] object-cover object-center overflow-x-hidden" />
                </center>
            </section>

            {/*  */}
            <section className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 order-2 flex flex-col mt-12">
                    <div className="p-16 flex flex-col">

                        {/* heading text */}
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-1">REDEFINING</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-1">CLEANLINESS</span>

                        {/* smaller heading */}
                        <span className="mt-10 font-medium text-sm sm:text-base md:text-lg">EXPERIENCE BESPOKE CONCERGE-</span>
                        <span className="mb-10 font-medium text-sm sm:text-base md:text-lg">QUALITY LUXURY IN EVERY CORNER.</span>


                        {/* paragraph */}
                        <span className="pr-16 md:pr-32 font-light mb-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque volu
                            ptates perspiciatis doloribus itaque, distinctio eius vitae, hic quis susci
                            pit eligendi nostrum eum aperiam quidem laborum repellat temporibus cum volup
                            tas voluptatem.
                        </span>

                        <button className="bg-yellow-200 w-48 p-2 rounded-lg hover:bg-yellow-400">
                            DISCOVER MORE
                        </button>

                    </div>
                </div>

                <div className="w-full md:w-1/2 order-1 bg-gray-100 flex justify-center items-center">
                    <img src="imgs/12.avif" alt="imge" className="w-[320px] my-14" />
                </div>
            </section>

            {/* img */}
            <section>
                <center>
                    <img src="/imgs/12.jpg" alt="img" className="w-full h-[90vh] object-cover object-center overflow-x-hidden" />
                </center>
            </section>

            {/*  */}
            <Carousel slides={testimonialData} />

            {/* img */}
            <section>
                <center>
                    <img src="/imgs/13.jpg" alt="img" className="w-full h-[90vh] object-cover object-center overflow-x-hidden" />
                </center>
            </section>

            {/* contact section */}

            <section className="bg-orange-50 pt-20">
                <div className="text-center flex flex-col">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-thin mb-1">CONNECT WITH US</span>
                    <div className="w-full flex justify-center mt-8">
                        <span className="w-80 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iure voluptatum quam reiciendis, voluptas molestiae quisquam maiores laudantium rem.</span>
                    </div>
                    <div className="w-full px-40 pt-20">
                        <form action="" className="w-full flex flex-col">
                            <div className="flex justify-between w-full gap-8">
                                <input type="text" id="firstName" placeholder="First Name  *" className="bg-white w-1/2 p-2 px-4 border border-gray-200" />
                                <input type="text" id="lastName" placeholder="Last Name  *" className="bg-white w-1/2 p-2 px-4 border border-gray-200" />
                            </div>
                            <div className="flex justify-between w-full gap-8 mt-6">
                                <input type="email" id="email" placeholder="Email  *" className="bg-white w-1/2 p-2 px-4 border border-gray-200" />
                                <input type="number" id="phone" placeholder="Phone  *" className="bg-white w-1/2 p-2 px-4 border border-gray-200" />
                            </div>
                            <div className="flex justify-between w-full gap-8 mt-6">
                                <input type="text" id="address" placeholder="Address  *" className="bg-white w-1/2 p-2 px-4 border border-gray-200" />
                                <input type="text" id="city" placeholder="City  *" className="bg-white w-1/2 p-2 px-4 border border-gray-200" />
                            </div>
                            <div className="w-full text-gray-400">
                                <select id="rating" className="bg-white w-full p-2 px-4 border border-gray-200 mt-6">
                                    <option value="default">Customer House Condition Rating 1-5  *</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="w-full text-gray-400">
                                <textarea id="description" placeholder="Additional Notes" className="w-full h-32 bg-white p-2 px-4 border border-gray-200 mt-6"></textarea>
                            </div>
                            <div className="w-full flex justify-center my-10">
                                <button className="bg-yellow-200 w-64 p-2 rounded-lg" onClick={(e) => {
                                    e.preventDefault();
                                }}>
                                    BEGIN YOUR TALORED EXPERIENCE
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </section>

        </div>
    )
}