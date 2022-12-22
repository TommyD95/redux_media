import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";


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
           <PhotoList album={album} />
        </ExpandablePanel>
    )
}

export default AlbumListItem;