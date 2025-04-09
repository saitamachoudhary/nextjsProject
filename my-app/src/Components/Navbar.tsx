import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import style from './styles/Navbar.module.scss'
export default function Navbar(){
    return(
       <header className={style.nav_header}>
         <nav className={style.nav_header}>
            <Link href="/">
             <Image
               src="/logo.svg"
               alt="Car Hub Logo"
               width={118}
               height={18}
               style={{objectFit: "contain"}}
             />
            </Link>
            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles={{
                color: "#0000ff",
                backgroundColor: "#ffffff",
                borderRadius: "9999px",
                minWidth: "130px"
            }}
            />
         </nav>
       </header>
    )
}