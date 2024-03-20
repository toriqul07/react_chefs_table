import search from '../../assets/images/search.svg';
import friend from '../../assets/images/friend.png';

import background from '../../assets/images/background.png';
const Header = () => {
    return (
        <div>
            <div className='md:container mx-auto'>
                <div className='flex items-center justify-between p-4 mx-4'>
                    <div className='text-customColor font-Lexend text-2xl font-bold leading-10 tracking-normal text-left'>
                        <h1>Recipe Calories</h1>
                    </div>
                    <div className='flex gap-5'>
                        <h4 className='text-customColor font-Lexend text-base font-normal  leading-5 tracking-normal text-left'>Home</h4>
                        <h4 className='text-customColor font-Lexend text-base font-normal leading-5 tracking-normal text-left'>Recipes</h4>
                        <h4 className='text-customColor font-Lexend text-base font-normal leading-5 tracking-normal text-left'>About</h4>
                        <h4 className='text-customColor font-Lexend text-base font-normal leading-5 tracking-normal text-left'>Search</h4>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <div>
                            <div className='flex items-center justify-center gap-4 rounded-full bg-customColor bg-opacity-5'>
                                <img className='w-5' src={search} alt="" />
                                <h5>Search</h5>
                            </div>
                        </div>
                        <div>
                            <img src={friend} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 md:container mx-auto'>
                <div className="w-[1250px] h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
                    <div>
                        <div className='px-32 py-40'>
                            <h2 className='text-white font-Lexend text-4xl font-bold leading-96 tracking-normal text-center pb-3'>Discover an exceptional cooking <br /> class tailored for you!</h2>
                            <h5 className='text-white font-Lexend text-base font-normal leading-8 tracking-normal text-center pb-3'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</h5>
                            <div className='flex gap-4 items-center justify-center'>
                                <button className='p-4 rounded-full bg-green-400 text-base font-semibold text-customColor'>Explore Now</button>
                                <button className='p-4 box-border border border-white rounded-full text-white font-Lexend text-base font-semibold'>Our Feedback</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 md:container mx-auto mb-10'>
                <div className='items-center justify-center'>
                    <h2 className='text-customColor font-Lexend text-4xl font-semibold leading-12 tracking-normal text-center pb-3'>Our Recipes</h2>
                    <h6 className='text-customColor font-Lexend text-base font-normal leading-6 tracking-normal text-center'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque.</h6>
                </div>
            </div>
        </div>
    );
};

export default Header;