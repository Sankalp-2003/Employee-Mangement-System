import React, { useEffect, useRef } from "react";
import AcceptTask from "./AcceptTask";
import Newtask from "./Newtask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);
  return (
    <div
      id="tasklist"
      ref={scrollContainerRef}
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-self-start gap-5 flex-nowrap"
    >
      {data?.tasks?.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <Newtask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
