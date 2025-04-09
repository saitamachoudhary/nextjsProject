import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:Object;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"|"submit";
}