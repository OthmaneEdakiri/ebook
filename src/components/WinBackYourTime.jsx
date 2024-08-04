import { thebook1, thebook2 } from "../assets/images";
import { UseSidebarContext } from "../context/SidebarContext";
import { ChapterContainer, ChapterTitle } from "./";

const WinBackYourTime = () => {
  const {sectionsRefs : {winbackyourtime}} = UseSidebarContext()
  return (
    <ChapterContainer sectionRef={winbackyourtime} title={"winbackyourtime"}>
      <ChapterTitle>Win back your time</ChapterTitle>
      <p className="text-[#717275] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-[#717275] mb-[16px]">
        Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis
        metus elementum, tempor risus vel, condimentum orci.
      </p>
      <p className="text-[#717275] mb-[16px]">
        Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis
        metus elementum, tempor risus vel, condimentum orci.
      </p>
      <div className="img-box flex lg:flex-row flex-col gap-[25px] mb-[16px]">
        <img className="lg:w-1/2 w-full rounded-[20px]" src={thebook1} alt="" />
        <img className="lg:w-1/2 w-full rounded-[20px]" src={thebook2} alt="" />
      </div>
      <p className="text-[#717275]">
        Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis
        metus elementum, tempor risus vel, condimentum orci.
      </p>
    </ChapterContainer>
  );
};

export default WinBackYourTime;
