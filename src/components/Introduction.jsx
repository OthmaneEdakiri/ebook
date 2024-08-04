import { UseSidebarContext } from '../context/SidebarContext';
import {ChapterContainer, Blockquote, ChapterTitle} from './'

const Introduction = () => {
  const {sectionsRefs : {introduction}} = UseSidebarContext()
  return (
    <ChapterContainer sectionRef={introduction} title={'introduction'}>
      <ChapterTitle>Introducing ebook</ChapterTitle>
      <p className="text-[#717275] mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam porro
        omnis illo temporibus, sunt nesciunt.
      </p>
      <p className="text-[#717275] mb-[16px]">
        <strong>Lorem Ipsum dolor sit amet</strong>, consectetur adipisicing
        elit. Aliquam porro omnis illo temporibus, sunt nesciunt.
      </p>
      <Blockquote />
      <p className="text-[#717275] mb-[16px]">
        Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Aliquam porro
        omnis illo temporibus, sunt nesciunt.
      </p>
    </ChapterContainer>
  );
};

export default Introduction;
