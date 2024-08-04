import React from "react";
import {
  Delegate,
  Habits,
  Introduction,
  Sidebar,
  SidebarContainer,
  TheBookContainer,
  WinBackYourTime,
  WorkLessDoMore,
} from "./";
import SidebarContext from "../context/SidebarContext";
import { UseNavbarContext } from "../context/NavbarContext";

const Book = () => {
  const {sectionsRefs:{book}} = UseNavbarContext()
  return (
    <div ref={book} className="book">
      <div className="container">
        <h6 className="lg:text-[20px] text-[18px] text-[#E9C46A] mb-[8px] text-center">
          What's inside?
        </h6>
        <h2 className="text-[36px] text-[#000000] font-bold mb-[24px] text-center">
          Preview at glance
        </h2>
        <div className="book-content flex flex-wrap">
          <SidebarContext>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <TheBookContainer>
              <Introduction />
              <WinBackYourTime />
              <WorkLessDoMore />
              <Delegate />
              <Habits />
            </TheBookContainer>
          </SidebarContext>
        </div>
      </div>
    </div>
  );
};

export default Book;
