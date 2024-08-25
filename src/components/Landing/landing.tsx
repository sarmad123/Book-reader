import './landing.css';
import mainLogoImage from '../../assets/mainLogo.png';
import person1Image from '../../assets/person1.png';
import person2Image from '../../assets/person2.png';
import person3Image from '../../assets/person3.png';
import { FaArrowCircleRight } from "react-icons/fa";



const Landing = () => {
    return (
        <section className='md:mr-24'>
            <div className="flex">
                <div className="md:w-1/3 lg:w-1/3 mt-3">
                    <div className="blue-dots
            bg-[radial-gradient(circle,_rgba(29,101,212,100)_4px,_transparent_5px)]
            bg-[length:20px_20px]">
                    </div>
                </div>
                <div className="md:w-2/3 lg:w-2/3 mt-3 md:mt-0">
                    <div className="flex items-center">
                        <img className="h-16 w-16 md:h-auto md:w-auto"
                             src={mainLogoImage}
                             alt="Logo"
                        />
                        <div className='relative inline-block font-bold logoLabel'>
                            <h1>BoardPro <span className="trademark absolute font-extrabold">TM</span></h1>

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex mt-10 justify-center mb-4">
                <div className="w-[75%] mx-[18%] sm:w-[66.67%] sm:ml-[35.33%] sm:mr-0">
                    <div className="w-28 h-1.5 line border rounded-full">
                    </div>
                </div>


            </div>
            <div className="flex mt-3 justify-center">
                <div className="w-[100%] mx-[18%] sm:w-[66.67%] sm:ml-[33.33%] sm:mr-0">
                    <p className="main-font font-extrabold  text-1xl md:text-2xl primary-text-color leading-9">Is Your
                        Constitution Fit for Purpose?</p>
                </div>
            </div>
            <div className="flex mt-3 justify-center  mb-6">
                <div className="w-[100%] mx-[18%] sm:w-[66.67%] sm:ml-[33.33%] sm:mr-0">
                    <p className="main-font font-medium  text-1xl md:text-2xl secondary-text-color leading-9">
                        A Practical Guide to Effective Governance
                    </p>
                </div>
            </div>
            <div className="flex justify-center sm:block sm:w-[66.67%] sm:ml-[33.33%] sm:mr-0 mb-52">
                <div className="inline-grid grid-flow-col auto-cols-auto gap-2 text-center">
                    <div className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]'>
                        <img
                            className="persons aspect-square	"
                            src={person1Image}
                            alt="Person1"
                        />
                        <p className='secondary-text-color font-bold text-xs text-center'>Stephen
                            <br/>
                            <span className='font-medium text-xs '>Bowman</span>
                        </p>
                    </div>
                    <div className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]'>
                        <img
                            className="persons aspect-square	"
                            src={person2Image}
                            alt="Person2"
                        />
                        <p className='secondary-text-color font-bold text-xs'>Anna
                            <br/>
                            <span className='font-medium text-xs'>Fitzgibbon</span>
                        </p>
                    </div>
                    <div className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]'>
                        <img
                            className="persons aspect-square	"
                            src={person3Image}
                            alt="Person3"
                        />
                        <p className='secondary-text-color font-bold text-xs'>Gordon
                            <br/>
                            <span className='font-medium text-xs'>Shaw</span>
                        </p>
                    </div>


                </div>
            </div>
            <div className="flex  mx-[18%] sm:w-[66.67%] sm:ml-[33.33%] sm:mr-0 mb-2">
                <span
                    className="secondary-text-color secondary-font font-normal text-1xl md:text-2xl leading-9  ">for</span>
                <span className="secondary-font font-normal text-1xl md:text-2xl primary-text-color leading-9 ml-2 ">
                    BoardPro &copy; 2024
                </span>
            </div>
            <div
                className="flex items-center mx-[18%] sm:ml-[33.33%] sm:mr-0 text-center mb-32">
                <FaArrowCircleRight className="h-6 w-6 sm:h-8 sm:w-8" style={{color:'#005ade'}}/>
                <span className="secondary-text-color secondary-font font-normal text-xs sm:text-xl ml-2 sm:leading-none">
                    www.boardpro.com
                  </span>
            </div>

        </section>
    );
};

export default Landing;
