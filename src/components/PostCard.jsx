import React from 'react'
import appwriteService from "../appWrite/config";
import { Link } from "react-router-dom";


function PostCard({$id, title, featuredImage}) {
  /* console.log(featuredImage+'id')
  console.log('checking featured image')
  console.log(title) */
  return (
   <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            {/* Check if featuredImage exists before rendering */}
          {featuredImage && (
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
          )}
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>

    </div>
   </Link>
  )
}

export default PostCard
