import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = blog => {
    //console.log(blog);
    const isExist = bookmarks.find(item => item.recipe_id === blog.recipe_id);
    if (isExist) {
      toast('Already exist!');
    }
    else
    {
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
    }
}

return (
  <>

    <Header></Header>
    <div className='md:container mx-auto'>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      <ToastContainer />
    </div>
  </>
)
}

export default App
