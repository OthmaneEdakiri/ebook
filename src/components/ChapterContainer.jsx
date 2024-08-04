const ChapterContainer = ({ children, title, className, sectionRef }) => {
  return (
    <div
      id={title}
      className={`${title} ${className} py-[50px] border-b-[6px] border-dotted border-[#717275]`}
      ref={sectionRef}
    >
      {children}
    </div>
  );
};

export default ChapterContainer;
