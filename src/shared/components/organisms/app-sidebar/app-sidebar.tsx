"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image"

import {
  SquareTerminal,
} from "lucide-react"
import { NavMain as CollapseMenu } from "@/shared/components/organisms/nav-main/nav-main"
import { SidebarHeader } from "../../molecules/sidebar-header/sidebar-header"


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
    <Sidebar className="px-5 py-8">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader />
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
              <CollapseMenu items={data.navMain} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}