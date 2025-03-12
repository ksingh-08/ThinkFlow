"use client"
import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDocumentData } from "react-firebase-hooks/firestore";

function SidebarOption({href,id}:{
    href: string;
    id: string;
}){

    const [data,loading,error] = useDocumentData(doc(db,"documents", id));
    const pathName = usePathname();
    const isActive = href.includes(pathName) && pathName !== "/";

    if(!data) return null;

  return (
    <div className="">
      <Link href={href} className={`relative flex flex-col w-auto  border p-2 text-center rounded-md ${isActive ? "bg-gray-200 font-bold border-black": "border-gray-400"}`}>
            <p className="truncate">{data.title}</p>
      </Link>
    </div>
  )
}

export default SidebarOption
