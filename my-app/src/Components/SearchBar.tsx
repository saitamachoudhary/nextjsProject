import {Sear} from '@Components'
export default function SearchBar(){
    const handleSearch=()=>{

    }
   return(
     <form className="searchbar" action="" onSubmit={handleSearch}>
         <div className="searchbar__item">
           <SearchManufacturer/>
         </div>
     </form>
   )
}