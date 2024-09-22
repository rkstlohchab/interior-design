import Image from 'next/image'

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className="z-10 flex flex-col items-center justify-center w-screen h-screen gap-2">
      <Image src="https://drive.google.com/uc?export=view&id=1zdS_pKYo6VjlgN53JF0j44vZTN687oox" width={200} height={200} alt="logo" quality={40}/>
      <div className={styles.container}></div>
    </div>
  )
}