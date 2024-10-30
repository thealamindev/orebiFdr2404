import "./App.css";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Menu from "./components/Menu";

import Logo from "../src/assets/logo.png";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart, FaCarSide, FaUndo     } from "react-icons/fa";
import Heading from "./components/Heading";
import { PiNumberTwoBold } from "react-icons/pi";

function App() {
  return (
    <>
      {/* Header Part Start  */}
      <div className="w-full py-[30px]">
        <Container className={"max-w-headerContainer"}>
          <Flex>
            <div className="w-logoW">
              <Image imgSrc={Logo} />
            </div>
            <div className="w-menuW">
              <Flex>
                <Menu menuName={"Home"} />
                <Menu menuName={"Shop"} />
                <Menu menuName={"About"} />
                <Menu menuName={"Contacts"} />
                <Menu menuName={"Journal"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part Start  */}

      {/* Category Part Start  */}
      <div className="w-full bg-categoryBg py-[40px] border border-menuText">
        <Container className={"max-w-headerContainer"}>
          <Flex className={"items-center"}>
            <div className="w-1/5">
            <Flex className={"gap-x-2"}>
            <HiOutlineBars3BottomLeft /> <Heading as="h3" className={"text-sm font-dm text-menuTextH"} text={"Shop By Category"}/>
            </Flex>
            </div>
            <div className="w-3/5 relative">
                <input type="text" className="p-4 bg-white rounded-lg w-full" placeholder="Search Products"/>
                <FaSearch className="absolute top-1/2 right-5 -translate-y-1/2"/>

            </div>
            <div className="w-1/5">
            <Flex className={"justify-end"}>
             
              <FaUser className="ml-2"/>
              <FaCaretDown className="mr-8"/>
              
              <FaShoppingCart  />
            </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Category Part End  */}

      {/* Banner Part Start  */}
        <div className="bg-bannerImg w-full py-[300px]"></div>
      {/* Banner Part End */}

      {/* Information Part Start  */}
      <div className="w-full py-[30px]">
          <Container className={"max-w-headerContainer"}>
            <Flex className={"justify-between"}>
              <div className="w-[30%]">
                <Flex className={"gap-x-3"}>
                <PiNumberTwoBold />
                <Heading as={"h3"} text={"Two years warranty"} className={"font-dm text-sm"}/>
                </Flex>
              </div>
              <div className="w-[30%]">
                <Flex className={"gap-x-3"}>
                <FaCarSide/>
                <Heading as={"h3"} text={"Two years warranty"} className={"font-dm text-sm"}/>
                </Flex>
              </div>
              <div className="w-[30%]">
                <Flex className={"gap-x-3"}>
                <FaUndo  />
                <Heading as={"h3"} text={"Two years warranty"} className={"font-dm text-sm"}/>
                </Flex>
              </div>
            </Flex>
          </Container>
      </div>
      {/* Information Part End */}
    </>
  );
}

export default App;
