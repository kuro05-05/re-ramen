"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import { useState } from "react";

export default function Header() {
  const [clickHamburger, setClickHamburger] = useState(false);
  const toggleHandler = () => {
    setClickHamburger((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.hamburger} ${clickHamburger ? styles.open : ""}`}
        onClick={toggleHandler}
        aria-expanded={clickHamburger}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Link href={"/"} className={styles.ramen}>
        （仮）
      </Link>
      <div className={styles.icons}>
        <Link href={"/"}>
          <Image
            src={"/images/ramen_donburi.png"}
            width={90}
            height={90}
            alt="カート"
            className={styles.cart}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/images/logout.png"}
            width={90}
            height={90}
            alt="ログイン"
            className={styles.login}
          />
        </Link>
      </div>
      {clickHamburger && (
        <nav className={styles.nav}>
          {/* <Image
            src={"/images/ramenman_backgroundtransparent.png"}
            alt="ラーメンマン"
            width={200}
            height={200}
            className={styles.ramenman}
          /> */}
          <div className={styles.list}>
            <ul className={styles.list1}>
              <Link href={"/"}>
                <li className={styles.one}>ラーメン一覧</li>
              </Link>
              <Link href={"/"}>
                <li className={styles.two}>お気に入り</li>
              </Link>
            </ul>
            <ul className={styles.list2}>
              <Link href={"/"}>
                <li className={styles.one}>マイページ</li>
              </Link>
              <Link href={"/"}>
                <li className={styles.two}>お問い合わせ</li>
              </Link>
            </ul>
          </div>
          <div className={styles.icon}>
            <Link href={"https://www.instagram.com/"}>
              <Image
                src={"/images/humberger_instagram.png"}
                alt="インスタグラム"
                width={35}
                height={35}
              />
            </Link>
            <Link href={"https://x.com/"}>
              <Image
                src={"/images/humberger_x.png"}
                alt="ツイッター"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
