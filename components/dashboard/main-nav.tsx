import Link from "next/link"

import { cn } from "@/lib/utils"
import { BsShop } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiMinecraft } from "react-icons/si";
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <div className="flex h-[60px] items-center px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <span className="">Imanity Network</span>
            </Link>
          </div>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <BsShop href="https://shop.starcraftnw.net"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"/>
        

      <FaDiscord
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      />

      <SiMinecraft
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      />

    </nav>
  )
}
