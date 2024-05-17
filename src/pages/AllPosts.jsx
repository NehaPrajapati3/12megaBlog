import React, {useState, useEffect} from 'react'
import appwriteService from "../appWrite/config";
import {Container, PostCard} from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])
    
  return (
    <div className='py-8 w-full'>
      <Container className='flex flex-wrap' > 
         {posts.map((post) =>(
            <div key={post.$id} className='p-2 w-1/4'>
                <PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage}/>
            </div>
         ))}
      </Container>
    </div>
  )
}

export default AllPosts
