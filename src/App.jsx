import Counter from "./features/counter/Counter"
import AddPostForm from "./features/posts/AddPostFrom"
import PostsList from "./features/posts/PostsList"
function App() {


  return (
    <main className="App">
      <PostsList/>
      <AddPostForm/>
    </main>
  )
}

export default App
