import "./AuthorsBlock.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";
import Person from "../Person/Person";
import { useRef, useEffect } from "react";

function AuthorsBlock({ className }) {

  const scrollElementRef = useRef();

  useEffect(() => {
    scrollElementRef.current.addEventListener('wheel', function(event) {
      event.preventDefault();
      scrollElementRef.current.scrollLeft += event.deltaY;
    });
  }, []);

  return (
    <Block className={classNamesHandler("Authors-block without-scrollbar small", className)} innerRef={scrollElementRef}>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
      <Person username={"Kainless"} className={"author"}/>
    </Block>
  )
}

export default AuthorsBlock;