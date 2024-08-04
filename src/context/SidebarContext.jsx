import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const SidebarStateContext = createContext({
  chapter: "",
  setChapter: () => {},
  sectionsRefs: {},
});

const SidebarContext = ({ children }) => {
  const [chapter, setChapter] = useState("");

  const sectionsRefs = {
    introduction: useRef(null),
    winbackyourtime: useRef(null),
    worklessdomore: useRef(null),
    delegate: useRef(null),
    habits: useRef(null),
  };

  useEffect(() => {
    const scrollHandler = () => {
      Object.entries(sectionsRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const section = ref.current.getBoundingClientRect();
          section.top < window.innerHeight && setChapter(sectionId);
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
    <SidebarStateContext.Provider value={{ chapter, sectionsRefs }}>
      {children}
    </SidebarStateContext.Provider>
  );
};

export default SidebarContext;

export const UseSidebarContext = () => useContext(SidebarStateContext);
