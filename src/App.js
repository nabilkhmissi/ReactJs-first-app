import { useState } from 'react';
import './App.css';
import Posts from './components/posts/posts';
import { data } from "./components/data"
import Navbar from './components/navbar/navbar';

export function App() {
  const [posts, setPosts] = useState(data)


  function doSearch(keyword) {
    setPosts(data.filter(post => post.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())));
  }

  function likeClick(post) {
    setPosts(posts.map(p => {
      if (p.id === post.id) {
        return post
      } else {
        return p
      }
    }))
  }

  return (
    <>
      <Navbar onSearch={doSearch} />
      <Posts posts={posts} handleLikeClick={likeClick} />
    </>
  );
}

export default App;