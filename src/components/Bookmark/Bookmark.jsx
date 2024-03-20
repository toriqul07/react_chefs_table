import PropTypes from 'prop-types';
const Bookmark = ({ bookmark ,index}) => {
    console.log(bookmark);
    const { recipe_name, preparing_time, calories } = bookmark
    return (
        <div>
            <div className='flex gap-4 pb-8 bg-white bg-opacity-3'>
                <p>{index}</p>
                <h3 className='text-xl'>{recipe_name}</h3>
                <h3 className='text-xl'>{preparing_time}</h3>
                <h3 className='text-xl'>{calories}</h3>
                <button className='rounded-full bg-green-400 p-4'>Preparing</button>
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;