import styles from "@/styles/Home.module.scss";
import { Hero } from "@/Components";
import {CustomFilter,SearchBar} from '@/Components'



export default function Home() {
  return (
    <>
      <main className={styles.main_container}>
         <Hero/>
         <div className={styles.main_container_firstChild} id="discover">
           <div className="home__text-container">
               <h1>
                 Car Catalogue
               </h1>
               <p>Explore out cars you might like</p>
           </div>
           <div className="home__filters">
                <SearchBar/>
           </div>
           <div className="home__filter-container">
             <CustomFilter title="fuel"/>
             <CustomFilter title="year"/>
           </div>
         </div>
      </main>
    </>
  );
}
