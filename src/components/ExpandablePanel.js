import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({header,children}){

    const [expandable,setExpandable] = useState(false);

    const handleClick=()=>{
        setExpandable(!expandable);
    }

    return (
        <div  className='mb-2 border rounded'>
        <div className="flex p-2 justify-between items-center ">
            <div className="flex flex-row justify-between">
            {header}
            </div>
            <div onClick={handleClick} className="cursor-pointer">
            {expandable ? <GoChevronDown /> : <GoChevronLeft />}
            </div>            
        </div>
        {
            expandable && <div className="p-2 border-t">{children}</div>
        }
    </div>
    )
}

export default ExpandablePanel;