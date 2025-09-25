import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { menuItems } from "./header";

const ScrollLinkComponent = ScrollLink as any;

export type MenuProps = {
  setShowMenu: (i: boolean) => void;
  setShowHeader: (i: boolean) => void;
  showMenu: boolean;
};

export default function Menu(props: MenuProps) {
  const { showMenu, setShowMenu, setShowHeader } = props;

  return (
    <div
      data-testid="menu-div"
      className={`fixed bottom-0 left-0 w-screen min-h-screen bg-black z-20 flex flex-col rounded-tl  text-2xl transition-transform duration-500 ease-in-out ${showMenu ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex flex-col w-full justify-evenly font-display ">
        <div className="w-full h-32" />
        {/* <div className={` flex flex-col items-center justify-center transform transition duration-700 ease-in-out 
          ${showMenu ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
           `} >

      <button className='w-full px-12 py-4 m-4 flex flex-col text-white  items-end justify-center hover:text-amber-500 active:text-amber-400' onClick={() => {setShowMenu(false); scroll.scrollToTop({ smooth: true, duration: 500 })}}>
          Home
        </button>
        <div
    className={`h-0.5 bg-white mt-2 transition-all duration-500 ease-out self-start mx-8 ${
      showMenu ? 'w-[90vw]' : 'w-0'
    }`}
    style={{ transitionDelay: `100ms` }} // delay a bit after the text slide
/>
  </div> */}
        {menuItems.map((i, index) => (
          <ScrollLinkComponent
            href="/"
            className={` flex flex-col items-center justify-center transform transition duration-700 ease-in-out
          ${showMenu ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
           `}
            onClick={() => {
              setShowMenu(false);
              setTimeout(() => setShowHeader(false), 1000);
            }}
            activeClass="active"
            to={i.title.toLowerCase()}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            key={i.title}
          >
            <button className="px-12 w-full py-4 m-4 flex flex-col text-white  items-end justify-center hover:cursor-pointer hover:text-amber-500 active:text-amber-400">
              {i.title}
            </button>
            <div
              className={`h-0.5 bg-white mt-2 transition-all duration-500 ease-out self-start mx-8 ${
                showMenu ? "w-[90vw]" : "w-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }} // delay a bit after the text slide
            />
          </ScrollLinkComponent>
        ))}
      </div>
    </div>
  );
}
