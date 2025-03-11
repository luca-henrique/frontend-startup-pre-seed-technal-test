"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar"



import { NavMain as CollapseMenu } from "@/shared/components/organisms/nav-main/nav-main"
import { SidebarHeader } from "../../molecules/sidebar-header/sidebar-header"
import { SidebarMenuList } from "../../molecules/sidebar-menu-list/sidebar-menu-list"

const data = {
  navMain: [
    {
      title: "Cadastros",
      url: "#",
      icon: 'order-service-icon',
      isActive: true,
      items: [
        {
          title: "Ordem de serviço",
          url: "#",
          icon: 'order-service-icon'
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
          <SidebarGroupContent className="mt-16">
            <SidebarMenu>
              <SidebarMenuList />
              <CollapseMenu items={data.navMain} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}