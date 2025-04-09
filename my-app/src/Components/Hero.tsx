import Image from "next/image"
import styles from "./styles/Hero.module.scss";
import { CustomButton } from "./index";
export default function Hero() {
  const handleScroll = () => {

  }
  return (
    <div className="hero">
      <div className={styles.hero_Container}>
        <h1 className="hero_title">
          Find,book, or rent a car -quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with
          or effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles={
            {
              backgroundColor: '#0000FF',
              color: '#FFFFFF',
              borderRadius: '9999px',
              marginTop: '2.5rem'
            }
          }
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero"
            fill style={{ objectFit: "contain" }}
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}