import PropTypes from 'prop-types';
import clock from '../../assets/images/clock.png';
import fire from '../../assets/images/fire.png';
const Blog = ({ blog,handleAddToBookmark}) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = blog;
    return (
        <div>
            <div>
                <div>
                    <img className='rounded-lg bg-[url(5)] pb-2' src={recipe_image} alt="" />
                    <h3 className='text-black font-Lexend font-extrabold text-2xl leading-6 tracking-normal text-left pb-2'>{recipe_name}</h3>
                    <h6 className='text-gray-500 font-Fira-Sans font-normal text-base leading-10 tracking-normal text-left pb-2'>{short_description}</h6>
                    <div className='pt-2'>
                        <h6 className='text-black font-Lexend font-medium text-base leading-6 tracking-normal text-left'>Ingredients: {ingredients.length}</h6>
                        <li className='text-gray-500 font-Fira-Sans font-normal text-base leading-10 tracking-normal text-left'>{ingredients[0]}</li>
                        <li className='text-gray-500 font-Fira-Sans font-normal text-base leading-10 tracking-normal text-left'>{ingredients[1]}</li>
                        <li className='text-gray-500 font-Fira-Sans font-normal text-base leading-10 tracking-normal text-left'>{ingredients[2]}</li>
                        <li className='text-gray-500 font-Fira-Sans font-normal text-base leading-10 tracking-normal text-left'>{ingredients[3]}</li>
                    </div>
                    <div className='flex gap-5 items-center pb-3'>
                        <div className='flex gap-2 items-center'>
                            <img src={clock} alt="" />
                            <h4>{preparing_time}</h4>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={fire} alt="" />
                            <h4>{calories}</h4>
                        </div>
                    </div>
                    <button onClick={()=>handleAddToBookmark(blog)} className='rounded-full bg-green-400 text-black font-Lexend font-medium text-base leading-6 tracking-normal text-left p-5 mb-4'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;