import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skelton from "./Skelton";
import Button from "./Button";
import { addUser } from "../store/thunks/addUsers";
import { useThunk } from '../hooks/use-thunk'
import UsersListItems from "./UsersListItems";

function UsersList() {
  const [doFetchUsers, isLoadingUsers,loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUsers, isCreatingUsers,creatingUsersError] = useThunk(addUser);
  
  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers()
      
  }, [doFetchUsers]);
  const handleUserAdd = () => {
   doCreateUsers()
  };
  let content;
  if (isLoadingUsers) {
    content = <Skelton times={10} className="h-10 w-full mt-5" />;
  }else if (loadingUsersError) {
    content = <div>error in fetching data !!!!....</div>;
  }else{
   content = data.map((user) => {
    return <UsersListItems key={user.id} user={user} />
  });
  }
  
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUsers} onClick={handleUserAdd}>+ Add User</Button>
        {creatingUsersError && 'error in creating user'}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
