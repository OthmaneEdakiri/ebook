import { ChapterContainer, ChapterTitle } from ".";
import { aboutImg } from "../assets/images";
import { UseSidebarContext } from "../context/SidebarContext";

const WorkLessDoMore = () => {

  const {sectionsRefs : {worklessdomore}} = UseSidebarContext()

  return (
    <ChapterContainer sectionRef={worklessdomore} title="worklessdomore">
      <ChapterTitle>Work less, do more</ChapterTitle>
      <p className="text-[#717275] mb-[16px] ">
        Lorem ipsum dolor sit amet{" "}
        <span className="text-[#E76F51]">consectetur</span> adipisicing elit.
        Totam ullam at beatae eos nam, recusandae dolorem hic saepe illo
        voluptatibus ipsum debitis dolore id dignissimos quas.
      </p>
      <p className="text-[#717275] mb-[16px]">
        Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis
        metus elementum, tempor risus vel, condimentum orci.
      </p>
      <p className="text-[#717275] mb-[16px]">
        Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis
        metus elementum, tempor risus vel, condimentum orci.
      </p>
      <div className="flex lg:flex-row flex-col items-center gap-[10px]">
        <img src={aboutImg} className="lg:w-1/2 w-full" alt="" />
        <div className="lg:w-1/2 w-full">
          <h3 className="text-[#717275] mb-[16px]">Modern ebook ever</h3>
          <p className="font-bold text-[#717275]">Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt.</p>
        </div>
      </div>
    </ChapterContainer>
  );
};

export default WorkLessDoMore;
