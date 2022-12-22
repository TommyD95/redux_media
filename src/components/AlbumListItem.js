import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";


function AlbumListItem({album}){
    const [removeAlbum,removeAlbumResults] =useRemoveAlbumMutation();

    const handleRemoveButton=()=>{
removeAlbum(album);       ;
    }

    const header =  <>
       <Button onClick={handleRemoveButton}> <GoTrashcan /></Button>
        titolo:   {album.title}
        </>;
        

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos in the album {album.userId}
        </ExpandablePanel>
    )
}

export default AlbumListItem;