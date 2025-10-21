"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn, getInitials } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session;
}

const Header = ({ session }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between items-center gap-5">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-semibold text-white">BookWise</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Button className={cn(
          "text-base cursor-pointer capitalize",
          pathname === "/library" ? "text-light-100" : "text-light-500"
        )}>Library</Button>
        
        <Link 
          href="/my-profile" 
          onClick={() => {
            console.log("Avatar clicked, navigating to profile");
            console.log("Current pathname:", pathname);
          }}
          className="block cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Avatar className="w-12 h-12 pointer-events-none">
            <AvatarFallback 
              className="text-white text-lg font-semibold pointer-events-none"
              style={{
                backgroundColor: `hsl(${(session.user?.name?.charCodeAt(0) || 85) * 137.5 % 360}, 70%, 50%)`
              }}
            >
              {session.user?.name ? getInitials(session.user.name) : "U"}
            </AvatarFallback>
          </Avatar>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
