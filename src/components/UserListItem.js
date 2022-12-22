import { useDispatch } from "react-redux";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useState } from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UserListItem({ user }) {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRemoveUser = () => {
        setIsLoading(true);
        dispatch(removeUser(user)).unwrap().catch(err => setError(err)).finally(() => { setIsLoading(false) });
    }

    const header = <>
        <Button className="mr-2" loading={isLoading} onClick={handleRemoveUser}>
            <GoTrashcan />
        </ Button >
        {error && <div>error deleting user...</div>}
        name:   {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user} />
        </ExpandablePanel>
    )
}

export default UserListItem;