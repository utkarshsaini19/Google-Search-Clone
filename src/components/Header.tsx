import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const url =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";

const Header = () => {
  return (
    <div className="flex justify-end items-center px-4 py-2 space-x-4 [&>*]:cursor-pointer">
      <Link href={"https://mail.google.com/mail"} className="hover:underline ">
        Gmail
      </Link>
      <Link
        href={"https://www.google.com/imghp?hl=en"}
        className="hover:underline "
      >
        Images
      </Link>
      <TbGridDots className="text-2xl " />
      <Image
        className="rounded-full "
        src={url}
        alt="Profile"
        width={40}
        height={100}
        style={{ height: 40, objectFit: "cover" }}
      />
    </div>
  );
};

export default Header;
