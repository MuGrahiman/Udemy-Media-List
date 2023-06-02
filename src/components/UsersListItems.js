import React from "react";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UsersListItems({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleDelete = () => {
    doRemoveUser(user);
  };
  const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleDelete}>
            <GoTrashcan />
          </Button>
          {error && <div>Error Deleting the user</div>}
          {user.name}
          </>
  return (
   <ExpandablePanel header={header}>
    <AlbumList user={user} />
   </ExpandablePanel>
  );
}

export default UsersListItems;
