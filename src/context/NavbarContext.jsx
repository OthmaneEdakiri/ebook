import { createContext, useContext, useEffect, useRef, useState } from "react";

export const NavbarStateContext = createContext({
  activeLink: "",
  sectionsRefs: {
    home: null,
    about: null,
    book: null,
    author: null,
    reviews: null,
    contact: null,
  },
});
const NavbarContext = ({ children }) => {
  const [activeLink, setActiveLink] = useState("");

  const sectionsRefs = {
    home: useRef(null),
    about: useRef(null),
    book: useRef(null),
    author: useRef(null),
    reviews: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const scrollHandler = () => {
      Object.entries(sectionsRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const section = ref.current.getBoundingClientRect();
          section.top < window.innerHeight && setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("load", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("load", scrollHandler);
    };
  }, []);

  return (
    <NavbarStateContext.Provider value={{ activeLink, sectionsRefs }}>
      {children}
    </NavbarStateContext.Provider>
  );
};

export default NavbarContext;

export const UseNavbarContext = () => useContext(NavbarStateContext);
