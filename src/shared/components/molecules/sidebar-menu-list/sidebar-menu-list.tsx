import Image from "next/image"

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

const items = [
  {
    title: "Pagina Inicial",
    url: "#",
    icon: 'home-icon',
  },
  {
    title: "Clientes",
    url: "#",
    icon: 'client-icon',
  },
  {
    title: "Agenda",
    url: "#",
    icon: 'appointment-icon',
  },

]


import Link from "next/link"


export const SidebarMenuList = () => {
  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url}>
              <Image src={`/icons/${item.icon}.svg`} alt="src" width={15} height={15} />
              <span className="font-semibold text-sm text-[#414552]">{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  )
}