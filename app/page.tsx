// import Head from "next/head";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import RamenMap from "@/components/RamenMap";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
// import Button from "@/components/Button";
import React from "react";
import { Metadata } from "next";

export const metadata:Metadata={
  title:"らーめんカタログ（仮）"
}

export default function Home() {
  return (
    <>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <title>らーめんカタログ（仮）</title> */}
      <div className={styles.container}>
        {/* <Header /> */}
      </div>
      <main className={styles.main}>
        <div className={styles.top}>
          <video
            className={styles.video}
            src="/images/movie.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className={styles.pattern_container}>
          <Image
            className={styles.pattern_img}
            src="/images/main_pattern.png"
            alt="ラーメン模様"
            width={3000}
            height={2600}
          />
          <Image
            className={styles.pattern_img}
            src="/images/main_pattern.png"
            alt="ラーメン模様"
            width={3000}
            height={2600}
          />
        </div>
        <div className={styles.test}>
          <Image
            className={styles.psychological}
            src="/images/test_background.png"
            alt="複数のラーメンイラスト"
            width={1470}
            height={420}
          />
          <div className={styles.border_radius}>
            <p>
              おいらと一緒に
              <br />
              好みのラーメン探しの旅に出ないか？
            </p>
            <Link href={"/test"}>
              {/* <Button
                title="ラーメンマンに聞いてみる"
                type="button"
                width="40%"
              /> */}
            </Link>
          </div>
          <Image
            src="/images/ramenman_renge_backgroundtransparent.png"
            alt="レンゲに乗ったラーメンマンのイラスト"
            className={styles.rengeman}
            width={500}
            height={362}
          />
        </div>
        <div className={styles.welcome}>
          <Image
            src="/images/naruto_white_backgroundtransparent.png"
            alt="ナルトのイラスト"
            className={styles.naruto}
            width={496}
            height={496}
          />
          <div className={styles.message}>
            <h1>全国ラーメンの旅へようこそ</h1>
            <p className={styles.love}>
              ラーメンを<span>愛</span>する全ての人々へ。
            </p>
            <p className={styles.font}>
              全国の<span>名店</span>や<br />
              <span>ご当地</span>ラーメンを
              <br />
              オンラインで手軽に楽しめる
              <br />
              場所を作りました。
              <br />
              味わい深い<span>スープ</span>、<br />
              こだわりの<span>麺</span>、<br />
              豊かな<span>トッピング</span>、<br />
              <span>全て</span>がここにあります。
              <br />
              好きなラーメンを見つけ、
              <br />
              あなただけの<span>ラーメン旅</span>を始めましょう。
            </p>
          </div>
        </div>
        {/* <RamenMap /> */}
      </main>
      {/* <Footer marginTop={"628px"} /> */}
    </>
  );
}
