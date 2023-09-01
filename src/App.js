import { useState } from 'react';
import './App.css';
import Posts from './components/posts/posts';
import { data } from "./components/data"

export function App() {
  const [posts, setPosts] = useState(data)


  function doSearch(e) {
    const search = e.target.value
    let result = data.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setPosts(result);
  }

  return (
    <>
      <div className='navbar'>
        <input className='search-bar' placeholder='search...' onKeyUp={doSearch} />
      </div>
      <Posts posts={posts} />
    </>
  );
}

export default App;