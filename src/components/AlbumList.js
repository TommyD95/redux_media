import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "../store";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    useFetchAlbumsQuery(user);

    const [addAlbum, results] = useAddAlbumMutation();

   

    let content;
    if (isLoading) {
        content = <div>isLoading...</div>
    } else if (error) {
        content = <div>error loading...</div>
    } else {
        content = data.map(album => {
          return <AlbumListItem key={album.id} album={album} />
     
    });
    };

    const handleAddAlbum = () => {
        addAlbum(user);

    }

    return (
        <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h5 className=" font-bold" >album for {user.name}     
             <Button loading={results.loading} onClick={handleAddAlbum}>+ add album</Button>
             </h5>

            {<div>{content}</div>
            }       
             </ div>
             </div>
    )

}

export default AlbumList;