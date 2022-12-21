import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UserListItem from "./UserListItem";

function UsersList() {

     const [isLoadingUser,setIsLoadingUser]=useState(false);

     const [loadingUserError,setLoadingUserError]=useState(null);

     const [isCreatingUser,setIsCreatingUser]=useState(false);
     const [creatingUserError,setCreatingUserError]=useState(null);


    const dispatch = useDispatch();

    const { data } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        setIsLoadingUser(true);
        dispatch(fetchUsers())
        .unwrap().then(()=>{
            setIsLoadingUser(false)
        }).catch((err)=>{
            setLoadingUserError(err);
            setIsLoadingUser(false)
        })
        ;
    }, [])

    if (isLoadingUser) {
        return <Skeleton times={6} className='h-10 w-full' />
    }

    if (loadingUserError) {
        return <div>error fetching data...</div>
    }

    const renderedUsers = data.map((user) => {
        return <UserListItem key={user.id} user={user} />
    })

    const handleUserAdd = () => {
        setIsCreatingUser(true);
        dispatch(addUser()).unwrap().catch(err=>setCreatingUserError(err)).finally(()=>setIsCreatingUser(false));
    }

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
              <Button loading={isLoadingUser} onClick={handleUserAdd}>
                    + add user
                </Button>
                
                {creatingUserError && 'error creating user...'}
            </div>
            {renderedUsers}</div>
    )
}

export default UsersList;