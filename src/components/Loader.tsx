import Image from 'next/image'

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className="z-10 flex flex-col items-center justify-center w-screen h-screen gap-2">
      <Image src="https://drive.google.com/uc?export=view&id=1xe8Vbb-oMjCJfGGzH3Nf_P4TzCnxXUNY" width={100} height={100} alt="logo" />
      <div className={styles.container}></div>
    </div>
  )
}