"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarHeader,

} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Label } from "./label"
import Image from "next/image"

import {

  SquareTerminal,
} from "lucide-react"
import { NavMain } from "@/shared/components/organisms/nav-main/nav-main"

const items = [
  {
    title: "Pagina Inicial",
    url: "#",
    icon: 'appointment-icon',
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
  {
    title: "Cadastros",
    url: "#",
    icon: 'order-service-icon',
  },
]

const data = {

  navMain: [
    {
      title: "Cadastros",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Ordem de serviço",
          url: "#",
        },

      ],
    },


  ],

}

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="flex flex-row">
              <Avatar className="w-5 h-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Label className="ml-2 font-semibold text-sm text-[#414552]">Lucas Henrique</Label>
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <Image src={`/icons/${item.icon}.svg`} alt="src" width={15} height={15} />
                      <span className="font-semibold text-sm text-[#414552]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <NavMain items={data.navMain} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}