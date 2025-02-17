"use client";
import CTABUtton from "@/common/CTAButton";
import CustomLink from "@/common/CustomLink";
import Link from "next/link";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Header() {
  const [dropped, setDropped] = useState(false);

  return (
    <>
      <nav className="w-full md:h-[80px] h-[55px] fixed mix-blend-difference top-0 left-0 flex lg:justify-between md:justify-start justify-between items-center md:py-[10px] md:px-[25px] px-[20px] z-50 ">
        <Link className="cursor-pointer" href="/">
          <svg
            width="150"
            height="26"
            viewBox="0 0 319 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[150px] md:h-[26px]  w-[100px] h-[17px]"
          >
            <g clipPath="url(#clip0_112_2)">
              <path
                d="M36.7 48.2C30.4333 48.2 25.0333 48.2 20.5 48.2C15.9667 48.2 12.1667 48.2 9.1 48.2C6.03333 48.2 3.43333 48.1333 1.3 48V6.6C1.3 4.66666 1.7 3.43333 2.5 2.9C3.36667 2.3 4.53333 2 6 2C8.86667 2 11.3 2 13.3 2C15.3667 1.93333 17.1333 1.9 18.6 1.9C20.0667 1.83333 21.4667 1.8 22.8 1.8C24.1333 1.8 25.5667 1.8 27.1 1.8C28.9667 1.8 31 1.83333 33.2 1.9C35.4667 1.9 37.5667 1.9 39.5 1.9C41.5 1.9 42.9333 1.93333 43.8 2C47.4667 2.26666 50.2333 3.26666 52.1 5C53.9667 6.73333 54.9 9.46667 54.9 13.2C54.9 15.8667 54.4333 17.9667 53.5 19.5C52.6333 20.9667 51.5333 22.0333 50.2 22.7C48.8667 23.3 47.5 23.6333 46.1 23.7C47.8333 23.7 49.3333 23.8667 50.6 24.2C51.9333 24.5333 53.0333 25.1 53.9 25.9C54.7667 26.6333 55.4333 27.7333 55.9 29.2C56.3667 30.6667 56.6 32.5 56.6 34.7C56.6 37.7 56.2 40.1 55.4 41.9C54.6667 43.6333 53.5 44.9667 51.9 45.9C50.3 46.7667 48.2333 47.3667 45.7 47.7C43.1667 48.0333 40.1667 48.2 36.7 48.2ZM31.4 40.4C32.7333 40.4 33.9333 40.3667 35 40.3C36.0667 40.2333 36.9667 40.0333 37.7 39.7C38.5 39.3 39.1 38.6667 39.5 37.8C39.9667 36.8667 40.2 35.6 40.2 34C40.2 31.7333 39.7333 30.1667 38.8 29.3C37.8667 28.4333 35.9333 28 33 28H19.1C17.8333 28 17.0333 27.4 16.7 26.2C16.4333 24.9333 16.3 23.1 16.3 20.7H32.5C33.6333 20.7 34.6333 20.5667 35.5 20.3C36.4333 20.0333 37.1333 19.4667 37.6 18.6C38.1333 17.6667 38.4 16.2667 38.4 14.4C38.4 12.5333 38.0333 11.1333 37.3 10.2C36.5667 9.26666 35.3667 8.76667 33.7 8.7C32.8333 8.63333 31.8333 8.6 30.7 8.6C29.6333 8.6 28.5667 8.6 27.5 8.6C26.2333 8.6 24.9667 8.6 23.7 8.6C22.5 8.6 21.4 8.6 20.4 8.6C19.6 8.6 18.9333 8.83333 18.4 9.3C17.9333 9.76666 17.7 10.4667 17.7 11.4V40.4C18.7667 40.4 19.6 40.4 20.2 40.4C20.8667 40.4 21.5667 40.4 22.3 40.4C23.0333 40.4 24.0667 40.4 25.4 40.4C26.8 40.4 28.8 40.4 31.4 40.4ZM55.9484 48L71.8484 9.8C72.9151 7.2 74.4484 5.2 76.4484 3.8C78.4484 2.33333 81.5818 1.6 85.8484 1.6C89.3818 1.6 92.2484 2.26666 94.4484 3.6C96.6484 4.93333 98.3151 7 99.4484 9.8L115.448 48H97.6484L93.3484 37.7H72.5484L68.5484 48H55.9484ZM75.1484 31.4H90.3484L84.9484 17.4C84.7484 16.8667 84.5151 16.4 84.2484 16C83.9818 15.5333 83.5151 15.3 82.8484 15.3C82.1151 15.3 81.5818 15.5333 81.2484 16C80.9818 16.4 80.7484 16.8667 80.5484 17.4L75.1484 31.4ZM146.386 32.5C146.386 32.5 145.719 32.5 144.386 32.5C143.119 32.5 141.486 32.5333 139.486 32.6C137.486 32.6 135.419 32.6 133.286 32.6V48H116.886V8.1C116.886 6.16666 117.319 4.66666 118.186 3.6C119.053 2.53333 120.819 2 123.486 2C124.486 2 125.986 2 127.986 2C129.986 1.93333 132.286 1.9 134.886 1.9C137.486 1.9 140.153 1.9 142.886 1.9C145.686 1.83333 148.353 1.83333 150.886 1.9C153.419 1.9 155.619 1.93333 157.486 2C159.419 2 160.819 2.03333 161.686 2.1C165.286 2.43333 167.986 3.53333 169.786 5.4C171.586 7.2 172.486 10.1667 172.486 14.3C172.486 18.0333 172.186 20.7667 171.586 22.5C171.053 24.1667 170.153 25.4667 168.886 26.4C168.419 26.7333 167.786 27 166.986 27.2C166.186 27.4 165.286 27.5 164.286 27.5V27.9C164.753 27.9 165.253 27.9 165.786 27.9C166.386 27.9 166.886 27.9333 167.286 28C169.819 28.4667 171.319 29.4333 171.786 30.9C172.319 32.3667 172.586 33.9 172.586 35.5V44.3C172.586 45.5667 172.719 46.5 172.986 47.1C173.253 47.6333 173.419 47.9333 173.486 48H161.286C159.553 48 158.186 47.7333 157.186 47.2C156.253 46.6667 155.786 45.5333 155.786 43.8V37.2C155.786 35.1333 155.319 33.8333 154.386 33.3C153.519 32.7667 151.953 32.5 149.686 32.5H146.386ZM133.286 24.7C134.019 24.7 135.119 24.7333 136.586 24.8C138.119 24.8 139.786 24.8 141.586 24.8C143.386 24.8 145.019 24.8 146.486 24.8C148.019 24.8 149.119 24.8 149.786 24.8C151.386 24.8 152.786 24.3 153.986 23.3C155.253 22.2333 155.886 20.2667 155.886 17.4C155.886 15.4 155.519 13.8333 154.786 12.7C154.119 11.5667 152.986 10.9333 151.386 10.8C150.453 10.6 149.186 10.5 147.586 10.5C146.053 10.5 144.419 10.5 142.686 10.5C141.019 10.5 139.486 10.5333 138.086 10.6C136.686 10.6 135.653 10.6 134.986 10.6C134.853 10.6 134.519 10.7 133.986 10.9C133.519 11.1 133.286 11.6 133.286 12.4V24.7ZM234.416 25.2C234.416 30.0667 233.849 34.0333 232.716 37.1C231.649 40.1 229.949 42.4 227.616 44C225.349 45.6 222.449 46.7 218.916 47.3C215.382 47.8333 211.149 48.1 206.216 48.1C203.216 48.1 200.349 48.1 197.616 48.1C194.882 48.1 192.316 48.0667 189.916 48C187.516 48 185.249 48 183.116 48C181.049 48 179.116 48 177.316 48V8.6C177.316 6.26666 177.782 4.6 178.716 3.6C179.649 2.6 181.382 2.06666 183.916 2C185.649 2 187.516 2 189.516 2C191.582 1.93333 193.649 1.9 195.716 1.9C197.849 1.9 199.949 1.9 202.016 1.9C204.149 1.9 206.116 1.9 207.916 1.9C212.649 1.96667 216.682 2.33333 220.016 3C223.349 3.6 226.082 4.73333 228.216 6.4C230.349 8 231.916 10.3333 232.916 13.4C233.916 16.4 234.416 20.3333 234.416 25.2ZM193.716 39.7C194.382 39.7 195.149 39.7 196.016 39.7C196.949 39.7 197.916 39.7333 198.916 39.8C199.982 39.8 201.016 39.8 202.016 39.8C203.016 39.8 203.882 39.8 204.616 39.8C206.949 39.8 208.949 39.6 210.616 39.2C212.282 38.8 213.616 38.0667 214.616 37C215.616 35.9333 216.349 34.4333 216.816 32.5C217.282 30.5667 217.516 28.1333 217.516 25.2C217.516 21 217.082 17.8333 216.216 15.7C215.416 13.5667 214.049 12.1333 212.116 11.4C210.249 10.6 207.616 10.2 204.216 10.2C203.416 10.2 202.382 10.2 201.116 10.2C199.916 10.2 198.716 10.2333 197.516 10.3C196.316 10.3 195.282 10.3333 194.416 10.4C194.216 10.7333 194.049 11.1333 193.916 11.6C193.782 12.0667 193.716 12.7333 193.716 13.6V39.7ZM238.245 48C238.245 41.2 238.245 34.4 238.245 27.6C238.245 20.8 238.245 14 238.245 7.2C238.245 6.06667 238.312 5.13333 238.445 4.4C238.645 3.6 239.112 3 239.845 2.6C240.645 2.2 241.912 2 243.645 2H254.645V48H238.245ZM255.87 48L271.77 9.8C272.837 7.2 274.37 5.2 276.37 3.8C278.37 2.33333 281.504 1.6 285.77 1.6C289.304 1.6 292.17 2.26666 294.37 3.6C296.57 4.93333 298.237 7 299.37 9.8L315.37 48H297.57L293.27 37.7H272.47L268.47 48H255.87ZM275.07 31.4H290.27L284.87 17.4C284.67 16.8667 284.437 16.4 284.17 16C283.904 15.5333 283.437 15.3 282.77 15.3C282.037 15.3 281.504 15.5333 281.17 16C280.904 16.4 280.67 16.8667 280.47 17.4L275.07 31.4Z"
                fill="#F7D384"
              />
            </g>
            <defs>
              <clipPath id="clip0_112_2">
                <rect width="319" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div
          className={`space-x-[15px] font-extralight text-2xl text-white lg:mx-0 mx-auto md:block hidden`}
        >
          <CustomLink className="" href="/">
            Home
          </CustomLink>
          <CustomLink className="" href="/services">
            Services
          </CustomLink>
          <CustomLink className="" href="/about">
            About
          </CustomLink>
          <CustomLink className="" href="/contact">
            Contact
          </CustomLink>
        </div>
        {/* <div className="text-foregroundSecondary lg:block hidden ">
          <CTABUtton type="secondary">+90 553 830 96 78</CTABUtton>
        </div> */}
        <button
          className={`sm:text-lg text-base font-light text-white block md:hidden`}
          onClick={() => setDropped(true)}
        >
          <span>Menu</span>
        </button>
      </nav>
      <div
        className={`block md:hidden w-full h-screen fixed top-0 left-0 bg-black z-50 transition-transform duration-[0.4s] ease-[cubic-bezier(.5,.08,0,.83)] ${
          dropped ? "translate-y-0" : "-translate-y-full"
        } ${styles.dropMenu}`}
      >
        <div className="w-full h-[55px] flex justify-between items-center px-[20px]">
          <Link href="/">
            <svg
              width="150"
              height="26"
              viewBox="0 0 319 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[150px] md:h-[26px]  w-[100px] h-[17px]"
            >
              <g clipPath="url(#clip0_112_2)">
                <path
                  d="M36.7 48.2C30.4333 48.2 25.0333 48.2 20.5 48.2C15.9667 48.2 12.1667 48.2 9.1 48.2C6.03333 48.2 3.43333 48.1333 1.3 48V6.6C1.3 4.66666 1.7 3.43333 2.5 2.9C3.36667 2.3 4.53333 2 6 2C8.86667 2 11.3 2 13.3 2C15.3667 1.93333 17.1333 1.9 18.6 1.9C20.0667 1.83333 21.4667 1.8 22.8 1.8C24.1333 1.8 25.5667 1.8 27.1 1.8C28.9667 1.8 31 1.83333 33.2 1.9C35.4667 1.9 37.5667 1.9 39.5 1.9C41.5 1.9 42.9333 1.93333 43.8 2C47.4667 2.26666 50.2333 3.26666 52.1 5C53.9667 6.73333 54.9 9.46667 54.9 13.2C54.9 15.8667 54.4333 17.9667 53.5 19.5C52.6333 20.9667 51.5333 22.0333 50.2 22.7C48.8667 23.3 47.5 23.6333 46.1 23.7C47.8333 23.7 49.3333 23.8667 50.6 24.2C51.9333 24.5333 53.0333 25.1 53.9 25.9C54.7667 26.6333 55.4333 27.7333 55.9 29.2C56.3667 30.6667 56.6 32.5 56.6 34.7C56.6 37.7 56.2 40.1 55.4 41.9C54.6667 43.6333 53.5 44.9667 51.9 45.9C50.3 46.7667 48.2333 47.3667 45.7 47.7C43.1667 48.0333 40.1667 48.2 36.7 48.2ZM31.4 40.4C32.7333 40.4 33.9333 40.3667 35 40.3C36.0667 40.2333 36.9667 40.0333 37.7 39.7C38.5 39.3 39.1 38.6667 39.5 37.8C39.9667 36.8667 40.2 35.6 40.2 34C40.2 31.7333 39.7333 30.1667 38.8 29.3C37.8667 28.4333 35.9333 28 33 28H19.1C17.8333 28 17.0333 27.4 16.7 26.2C16.4333 24.9333 16.3 23.1 16.3 20.7H32.5C33.6333 20.7 34.6333 20.5667 35.5 20.3C36.4333 20.0333 37.1333 19.4667 37.6 18.6C38.1333 17.6667 38.4 16.2667 38.4 14.4C38.4 12.5333 38.0333 11.1333 37.3 10.2C36.5667 9.26666 35.3667 8.76667 33.7 8.7C32.8333 8.63333 31.8333 8.6 30.7 8.6C29.6333 8.6 28.5667 8.6 27.5 8.6C26.2333 8.6 24.9667 8.6 23.7 8.6C22.5 8.6 21.4 8.6 20.4 8.6C19.6 8.6 18.9333 8.83333 18.4 9.3C17.9333 9.76666 17.7 10.4667 17.7 11.4V40.4C18.7667 40.4 19.6 40.4 20.2 40.4C20.8667 40.4 21.5667 40.4 22.3 40.4C23.0333 40.4 24.0667 40.4 25.4 40.4C26.8 40.4 28.8 40.4 31.4 40.4ZM55.9484 48L71.8484 9.8C72.9151 7.2 74.4484 5.2 76.4484 3.8C78.4484 2.33333 81.5818 1.6 85.8484 1.6C89.3818 1.6 92.2484 2.26666 94.4484 3.6C96.6484 4.93333 98.3151 7 99.4484 9.8L115.448 48H97.6484L93.3484 37.7H72.5484L68.5484 48H55.9484ZM75.1484 31.4H90.3484L84.9484 17.4C84.7484 16.8667 84.5151 16.4 84.2484 16C83.9818 15.5333 83.5151 15.3 82.8484 15.3C82.1151 15.3 81.5818 15.5333 81.2484 16C80.9818 16.4 80.7484 16.8667 80.5484 17.4L75.1484 31.4ZM146.386 32.5C146.386 32.5 145.719 32.5 144.386 32.5C143.119 32.5 141.486 32.5333 139.486 32.6C137.486 32.6 135.419 32.6 133.286 32.6V48H116.886V8.1C116.886 6.16666 117.319 4.66666 118.186 3.6C119.053 2.53333 120.819 2 123.486 2C124.486 2 125.986 2 127.986 2C129.986 1.93333 132.286 1.9 134.886 1.9C137.486 1.9 140.153 1.9 142.886 1.9C145.686 1.83333 148.353 1.83333 150.886 1.9C153.419 1.9 155.619 1.93333 157.486 2C159.419 2 160.819 2.03333 161.686 2.1C165.286 2.43333 167.986 3.53333 169.786 5.4C171.586 7.2 172.486 10.1667 172.486 14.3C172.486 18.0333 172.186 20.7667 171.586 22.5C171.053 24.1667 170.153 25.4667 168.886 26.4C168.419 26.7333 167.786 27 166.986 27.2C166.186 27.4 165.286 27.5 164.286 27.5V27.9C164.753 27.9 165.253 27.9 165.786 27.9C166.386 27.9 166.886 27.9333 167.286 28C169.819 28.4667 171.319 29.4333 171.786 30.9C172.319 32.3667 172.586 33.9 172.586 35.5V44.3C172.586 45.5667 172.719 46.5 172.986 47.1C173.253 47.6333 173.419 47.9333 173.486 48H161.286C159.553 48 158.186 47.7333 157.186 47.2C156.253 46.6667 155.786 45.5333 155.786 43.8V37.2C155.786 35.1333 155.319 33.8333 154.386 33.3C153.519 32.7667 151.953 32.5 149.686 32.5H146.386ZM133.286 24.7C134.019 24.7 135.119 24.7333 136.586 24.8C138.119 24.8 139.786 24.8 141.586 24.8C143.386 24.8 145.019 24.8 146.486 24.8C148.019 24.8 149.119 24.8 149.786 24.8C151.386 24.8 152.786 24.3 153.986 23.3C155.253 22.2333 155.886 20.2667 155.886 17.4C155.886 15.4 155.519 13.8333 154.786 12.7C154.119 11.5667 152.986 10.9333 151.386 10.8C150.453 10.6 149.186 10.5 147.586 10.5C146.053 10.5 144.419 10.5 142.686 10.5C141.019 10.5 139.486 10.5333 138.086 10.6C136.686 10.6 135.653 10.6 134.986 10.6C134.853 10.6 134.519 10.7 133.986 10.9C133.519 11.1 133.286 11.6 133.286 12.4V24.7ZM234.416 25.2C234.416 30.0667 233.849 34.0333 232.716 37.1C231.649 40.1 229.949 42.4 227.616 44C225.349 45.6 222.449 46.7 218.916 47.3C215.382 47.8333 211.149 48.1 206.216 48.1C203.216 48.1 200.349 48.1 197.616 48.1C194.882 48.1 192.316 48.0667 189.916 48C187.516 48 185.249 48 183.116 48C181.049 48 179.116 48 177.316 48V8.6C177.316 6.26666 177.782 4.6 178.716 3.6C179.649 2.6 181.382 2.06666 183.916 2C185.649 2 187.516 2 189.516 2C191.582 1.93333 193.649 1.9 195.716 1.9C197.849 1.9 199.949 1.9 202.016 1.9C204.149 1.9 206.116 1.9 207.916 1.9C212.649 1.96667 216.682 2.33333 220.016 3C223.349 3.6 226.082 4.73333 228.216 6.4C230.349 8 231.916 10.3333 232.916 13.4C233.916 16.4 234.416 20.3333 234.416 25.2ZM193.716 39.7C194.382 39.7 195.149 39.7 196.016 39.7C196.949 39.7 197.916 39.7333 198.916 39.8C199.982 39.8 201.016 39.8 202.016 39.8C203.016 39.8 203.882 39.8 204.616 39.8C206.949 39.8 208.949 39.6 210.616 39.2C212.282 38.8 213.616 38.0667 214.616 37C215.616 35.9333 216.349 34.4333 216.816 32.5C217.282 30.5667 217.516 28.1333 217.516 25.2C217.516 21 217.082 17.8333 216.216 15.7C215.416 13.5667 214.049 12.1333 212.116 11.4C210.249 10.6 207.616 10.2 204.216 10.2C203.416 10.2 202.382 10.2 201.116 10.2C199.916 10.2 198.716 10.2333 197.516 10.3C196.316 10.3 195.282 10.3333 194.416 10.4C194.216 10.7333 194.049 11.1333 193.916 11.6C193.782 12.0667 193.716 12.7333 193.716 13.6V39.7ZM238.245 48C238.245 41.2 238.245 34.4 238.245 27.6C238.245 20.8 238.245 14 238.245 7.2C238.245 6.06667 238.312 5.13333 238.445 4.4C238.645 3.6 239.112 3 239.845 2.6C240.645 2.2 241.912 2 243.645 2H254.645V48H238.245ZM255.87 48L271.77 9.8C272.837 7.2 274.37 5.2 276.37 3.8C278.37 2.33333 281.504 1.6 285.77 1.6C289.304 1.6 292.17 2.26666 294.37 3.6C296.57 4.93333 298.237 7 299.37 9.8L315.37 48H297.57L293.27 37.7H272.47L268.47 48H255.87ZM275.07 31.4H290.27L284.87 17.4C284.67 16.8667 284.437 16.4 284.17 16C283.904 15.5333 283.437 15.3 282.77 15.3C282.037 15.3 281.504 15.5333 281.17 16C280.904 16.4 280.67 16.8667 280.47 17.4L275.07 31.4Z"
                  fill="#F7D384"
                />
              </g>
              <defs>
                <clipPath id="clip0_112_2">
                  <rect width="319" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <button
            className={`sm:text-lg text-base font-light text-white`}
            onClick={() => setDropped(false)}
          >
            <span>Close</span>
          </button>
        </div>
        <div className={styles.menuContainer}>
          <div
            className={`w-full h-[70%] flex flex-col justify-center font-extralight items-start space-y-[20px] text-white `}
          >
            <CustomLink className="text-4xl" href="/">
              Home
            </CustomLink>
            <CustomLink className="text-4xl" href="/services">
              Services
            </CustomLink>
            <CustomLink className="text-4xl" href="/about">
              About
            </CustomLink>
            <CustomLink className="text-4xl" href="/contact">
              Contact
            </CustomLink>
          </div>
          <div className="w-full h-[30%] flex items-center justify-start text-white ">
            Contact Info
          </div>
        </div>
      </div>
    </>
  );
}
