import Image from "next/image";
import styles from "./page.module.css";
import Thobbie from "./components/Thobbie";
import Counter from "./components/Counter";
import LoginInput from "./components/LoginInput";
import MapList from "./components/MapList";



export default function Home() {
  return (
    <>
      <Counter />
      <LoginInput />
      <MapList />
    </>  
    



  )
};
