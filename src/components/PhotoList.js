import { useAddPhotoMutation, useFetchAlbumsQuery, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";

function PhotoList({album}){

   const {data,isLoading,error}= useFetchPhotosQuery(album);

    const [addPhoto, addPhotoResults]=useAddPhotoMutation();

    const handleAddPhoto=()=>{
        addPhoto(album);
    }

    let content;

    if (isLoading) {
        content = <div>isLoading...</div>
    } else if (error) {
        content = <div>error loading...</div>
    } else {
        content = data.map(photo => {
          return <PhotoListItem key={photo.id} photo={photo} />
     
    });
    };

    return(
<div>
    <div className="m-2 flex flex-row items-center justify-between">
        <h5 className=" font-bold " >photos in {album.title}</h5>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto} >+ add photo</Button>
    </div>
    {<div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>}    
</div>
    )
}

export default PhotoList;