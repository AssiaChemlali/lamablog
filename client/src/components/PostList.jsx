import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from "axios"
import PostListItem from './PostListItem'

  const fetchPosts=async (pageParam) => {
    const res=await axios.get(`${import.meta.env.VITE_API_URL}/posts`,{params:{page:pageParam},})
    return res.data;
  }
  const PostList = () => {

    const { data, error,fetchNextPage,hasNextPage,isFetching, isFetchingNextPage,status,
    } = useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: (pageParam=1)=>fetchPosts(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length +1 : undefined,
    })

    if(status==="loading") return "Loading..."
    if(status==="error") return "something went wrong"
    console.log(data)


   const allPosts=data?.pages?.flatMap(page=>page.posts)|| []
    return (
     <div className=''>
      {
        allPosts.map(post=>(
           <PostListItem key={post._id} post={post}/>
        ))
      }

     </div>
    
    )
}

export default PostList
