import {usePosts} from "../hooks/usePosts";
import {Post} from "../components/Post";

export const MaltratoPage = () => {

  const {isLoading, posts} = usePosts("maltrato");

  return (
      <>
        <h1 className='text-center'>Información sobre el maltrato</h1>
        <div className='row'>
          {
            posts.map(post => (
                <Post
                    title={post.titulo}
                    description={post.descripcion}
                    image={post.imagen}
                />
            ))
          }
        </div>
      </>
  )
}