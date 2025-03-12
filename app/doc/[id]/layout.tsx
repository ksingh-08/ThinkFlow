import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

export default async function DocLayer({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>; // Ensure params is treated as a Promise
}) {
  auth.protect();

  const { id } = await params; // Await params before extracting id

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
