"use client"
import axios from 'axios'
import React from 'react'

const page = () => {
    

   async  function getPost(){
             const response =  await axios.get('https://dummyjson.com/carts')
             return response.data
    } 

    const [posts, setPosts] = React.useState<any[]>([]);
    
    React.useEffect(() => {
      async function fetchPosts() {
        const data = await getPost();
        setPosts(data);
      }
      fetchPosts();
    }, []);


  return (
    <div className='w-screen min-h-svh dark:bg-black  px-6 md:px-12 lg:px-24   '>
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
             {posts.map((post)=>
              <div key={post.id} >
                <h2>{post.name}</h2>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.quantity}</p>
                <p>{post.category}</p>
                <p>{post.created_at}</p>
              
              </div>
             )}
      
      </div>
          
    </div>
  )
}

export default page
