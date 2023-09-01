import { useState } from 'react';
import './App.css';
import Posts from './components/posts/posts';
import { data } from "./components/data"
import Loading from './components/loading/loading';

export function App() {
  const [posts, setPosts] = useState(data)
  const [loading, setLoading] = useState(true)

  function doSearch(e) {
    const search = e.target.value
    let result = data.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setPosts(result);
  }
  setTimeout(() => {
    setLoading(false)
  }, 1000);


  let rendering = <Loading />
  if (!loading) {
    rendering = (<>
      <div className='navbar'>
        <h2>Newsy</h2>
        <input className='search-bar' placeholder='search...' onKeyUp={doSearch} />
        <div></div>
      </div>
      <Posts posts={posts} />
    </>)
  }

  return <>{rendering}</>;
}

export default App;