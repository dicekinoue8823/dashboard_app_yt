import { IoHomeOutline, IoPowerSharp, IoSettingsOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { MdOutlineIncompleteCircle, MdOutlinePending, MdOutlinePerson } from "react-icons/md";
import  Link  from "next/link";

const Sidebar = () => {
    return (
        <div className="h-[100vh] shadow-xl">
          <h3 className="flex justify-center font-semibold">Dashboard</h3>
          <ul className="flex flex-col items-center text-[15px] text-left space-y-10 mt-10">
            <Link href={"/admin"}>
            <li className="flex items-center text-left hover:text-slate-200 cursor-pointer font-semibold">
              <IoHomeOutline className="text-2xl mr-2"/>
              Home
            </li>
            </Link>
            <Link href={"/admin/users"}>
              <li className="flex text-left hover:text-slate-200 cursor-pointer font-semibold">
                <TbUsers className="text-2xl mr-2"/>
                Users
              </li>
            </Link>
            <Link href={"/admin/products"}>
              <li className="flex text-left hover:text-slate-200 cursor-pointer font-semibold">
                <FaList className="text-2xl mr-2"/>
                Products
              </li>
            </Link>
            <li className="flex hover:text-slate-200 cursor-pointer font-semibold ">
              <MdOutlineIncompleteCircle className="text-2xl mr-2"/>
              Completed
            </li>
            <li className="flex text-left hover:text-slate-200 cursor-pointer font-semibold ">
              <MdOutlinePending className="text-2xl mr-2"/>
              Pending
            </li>
            <li className="flex text-left hover:text-slate-200 cursor-pointer font-semibold ">
              <MdOutlinePerson className="text-2xl mr-2"/>
              Profile
            </li>
            <li
              // onClick={handleCloseOpen}
              className="flex text-left hover:text-slate-200 cursor-pointer font-semibold"
            >
              <IoPowerSharp className="text-2xl mr-2"/>
              Logout
            </li>
          </ul>
        </div>
    );
}

export default Sidebar;