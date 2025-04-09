import Image from "next/image"
import { CustomButtonProps } from "@/types"

export default function CustomButton({title,containerStyles,handleClick,btnType}:CustomButtonProps) {
    return (
        <button className={`custom-btn`} type={btnType}
            onClick={handleClick}
            disabled={false}>
           <span style={{flex:'1 1 0%',...containerStyles}}>
            {title}
           </span>
        </button> 
    )
}