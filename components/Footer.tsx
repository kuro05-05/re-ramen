import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_nav}>
        <div className="footer_circle">
          <Link href="#top" className={styles.page_top}>
            ページトップ
          </Link>
        </div>
        <div className={styles.social_media}>
          <div>
            <Link href="https://www.instagram.com">
              <Image
                src="/images/instagram.png"
                width={45}
                height={45}
                alt="Instagram"
                className={styles.instagram}
              />
            </Link>
          </div>
          <div>
            <Link href="https://m.youtube.com">
              <Image
                src="/images/youtube.png"
                width={45}
                height={45}
                alt="Youtube"
                className={styles.youtube}
              />
            </Link>
          </div>
          <div>
            <Link href="https://x.com">
              <Image
                src="/images/x.png"
                width={45}
                height={45}
                alt="X"
                className={styles.x}
              />
            </Link>
          </div>
        </div>
        <p>Copyright © Team Ramenman CO.,LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
