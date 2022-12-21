import { useDispatch } from "react-redux";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useState } from "react";

function UserListItem({user}){

    const dispatch=useDispatch();

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const handleRemoveUser=()=>{
        setIsLoading(true);
        dispatch(removeUser(user)).unwrap().catch(err=>setError(err)).finally(()=>{setIsLoading(false)});
    }

    return(
        <div key={user.id} className='mb-2 border rounded'>
        <div key={user.id} className="flex p-2 justify-between items-center cursor-pointer">
            <div className="flex flex-row justify-between">
            <Button className="mr-2" loading={isLoading} onClick={handleRemoveUser}>
                <GoTrashcan />
            </ Button >
            {error && <div>error deleting user...</div>}
            {user.name}
            </div>
        </div>
    </div>
    )
}

export default UserListItem;