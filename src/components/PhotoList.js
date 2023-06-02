import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import Skelton from './Skelton'
import PhotoListItems from './PhotoListItems'

function PhotoList({album}) {
   const {data,isFetching,error} = useFetchPhotosQuery(album)
    const [addPhoto, addPhotoResult] = useAddPhotoMutation()
    const handleAddPhoto = ()=>{
        addPhoto(album)
    }
    let content ;
    if(isFetching){
        content = <Skelton times={4} className='h-8 w-8' />
    }else if(error){
        content = <idv>Error In Fetching The photo !!!!!!!!!.........</idv>
    }else{
        content = data.map(photo=>{
            return <PhotoListItems key={photo.id} photo={photo} />
        })
    }
  return (
    <div>
     <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold '>Photos In {album.title}</h3>
        <Button loading={addPhotoResult.isLoading} onClick={handleAddPhoto}>+Add Photo</Button>
        </div>  
        <div className='mx-8 flex flex-row flex-wrap justify-center'>{content}</div>
    </div>
  )
}

export default PhotoList
