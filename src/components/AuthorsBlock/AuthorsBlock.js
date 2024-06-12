import "./AuthorsBlock.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";
import Person from "../Person/Person";
import { useRef, useEffect } from "react";

function AuthorsBlock({ className, authors }) {

  const scrollElementRef = useRef();

  const fillAuthors = () => (
    authors.map((author, index) => <Person key={`author-${index}`} user={author} className={"author"}/>)
  )

  useEffect(() => {
    if(!scrollElementRef.current.classList.contains("small")) {
      return;
    }
    scrollElementRef.current.addEventListener('wheel', function(event) {
      event.preventDefault();
      scrollElementRef.current.scrollLeft += event.deltaY;
    });
  }, []);

  return (
    <Block className={classNamesHandler("Authors-block without-scrollbar scroll", className)} innerRef={scrollElementRef}>
      { fillAuthors() }
    </Block>
  )
}

export default AuthorsBlock;