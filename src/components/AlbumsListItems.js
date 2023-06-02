import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoX } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

function AlbumsListItems({ album }) {
    const [removeAlbum,result] = useRemoveAlbumMutation();
    const handleClick = ()=>{
        removeAlbum(album)
    }
  const header = <>
    <Button className='mr-2' loading={result.isLoading} onClick={handleClick}><GoX/></Button>
    {album.title}</>;
  return (
    <ExpandablePanel header={header}><PhotoList album={album}/></ExpandablePanel>
  );
}

export default AlbumsListItems;
