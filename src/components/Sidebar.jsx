import { chapters } from "../constants";
import { UseSidebarContext } from "../context/SidebarContext";

const Sidebar = () => {

  const { chapter } = UseSidebarContext();

  return (
    <div className="sidebar w-full sticky top-[120px] border-[#E76F51] border-[2px] rounded-[20px]">
      <ul className="w-full text-[#717275] p-[30px] flex flex-col gap-[15px] rounded-[10px]">
        {chapters.map((chap) => (
          <li key={chap.id}>
            <a
              className={`${chap.chapterId == chapter && 'activeLink'} px-[30px] py-[15px] rounded-[100px] bg-[#f0f8ff] hover:bg-[#E76F51] hover:text-white transition-colors w-full block font-bold`}
              href={`#${chap.chapterId}`}
            >
              {chap.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
