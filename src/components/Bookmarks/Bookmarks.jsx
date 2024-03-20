
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl pb-4">Want to cook: {bookmarks.length}</h2>
            <hr />
            <div className='flex gap-16 pb-4 pt-2'>
                <h4 className='text-gray-500 font-fira-sans font-medium text-base leading-24'>Name</h4>
                <h4 className='text-gray-500 font-fira-sans font-medium text-base leading-24'>Time</h4>
                <h4 className='text-gray-500 font-fira-sans font-medium text-base leading-24'>Calories</h4>
            </div>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={bookmark.recipe_id} index={index + 1} bookmark={bookmark}></Bookmark>)
            }
            <h2 className="text-3xl pb-4">Currently cooking: 0</h2>
            <hr />
            <div className='flex gap-16 pb-4 pt-2'>
                <h4 className='text-gray-500 font-fira-sans font-medium text-base leading-24'>Name</h4>
                <h4 className='text-gray-500 font-fira-sans font-medium text-base leading-24'>Time</h4>
                <h4 className='text-gray-500 font-fira-sans font-medium text-base leading-24'>Calories</h4>
            </div>
            <hr />
            <div className='flex justify-end'>
                <div>
                    <h1>Total Time = 0 minutes</h1>
                    <h1>Total Calories = 0 calories</h1>
                </div>
            </div>

        </div>

    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;