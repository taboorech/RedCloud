import "./UsersBlock.scss";
import { classNamesHandler } from "../../utils/classNamesHandler";
import Block from "../Block/Block";
import Person from "../Person/Person";
import { useRef, useEffect } from "react";

function UsersBlock({ emptyText, className, users }) {

  const scrollElementRef = useRef();

  const fillUsers = () => (
    users.map((user, index) => <Person key={`user-${index}`} user={user} className={"user"}/>)
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
    <Block className={classNamesHandler("Users-block without-scrollbar scroll", className)} innerRef={scrollElementRef}>
      { 
        !!users.length ? 
        fillUsers() : 
        <h4 className="empty">{emptyText || "Not Found"}</h4>
      }
    </Block>
  )
}

export default UsersBlock;