import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants";
import styles from "./styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__content}>
      <div className={styles.footer__brand}>
        <Image src='/logo.svg' alt='logo' width={118} height={18} style={{objectFit: "contain"}} />
        <p>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className={styles.footer__links}>
        {footerLinks.map((item) => (
          <div key={item.title} className={styles.footer__link}>
            <h3>{item.title}</h3>
            <div>
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className={styles.footer__link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.footer__bottom}>
      <p>@2023 CarHub. All rights reserved</p>

      <div className={styles.footer__copyrights_link}>
        <Link href="/">Privacy & Policy</Link>
        <Link href="/">Terms & Condition</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
