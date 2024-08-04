import {ChapterContainer, ChapterTitle} from '.'
import { thebook1 } from '../assets/images'
import { UseSidebarContext } from '../context/SidebarContext'

const Delegate = () => {

  const {sectionsRefs : {delegate}} = UseSidebarContext()

  return (
    <ChapterContainer sectionRef={delegate} title={'delegate'}>
      <ChapterTitle>Delegate</ChapterTitle>
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
      <img src={thebook1} className='w-full rounded-[20px]' alt="" />
    </ChapterContainer>
  )
}

export default Delegate
