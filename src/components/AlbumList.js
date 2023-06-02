import React from "react";
// import { useFetchAlbumApi } from '../store/apis/albumApi'
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skelton from "./Skelton";
// import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItems from "./AlbumsListItems";

function AlbumList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAddAlbum = () => {
    addAlbum(user);
  };
  let content;
  if (isFetching) {
    content = <Skelton className='h-10 w-full' times={3} />;
  } else if (error) {
    content = <div>Error Loading Albums !!!....</div>;
  } else {
    content = data.map((album) => {
    return <AlbumsListItems key={album.id} album={album}/>
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold"> Album For {user.name}</h1>
        
        <Button loading={results.isLoading} onClick={handleAddAlbum}>+Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
