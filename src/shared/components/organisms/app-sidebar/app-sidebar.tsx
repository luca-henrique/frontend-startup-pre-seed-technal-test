"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar"



import { SidebarHeader } from "../../molecules/sidebar-header/sidebar-header"
import { SidebarMenuList } from "../../molecules/sidebar-menu-list/sidebar-menu-list"
import { SidebarMenuCollapse } from "../../molecules/sidebar-menu-collapse/sidebar-menu-collapse"



export function AppSidebar() {
  return (
    <Sidebar className="px-5 py-8">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader />
          <SidebarGroupContent className="mt-16">
            <SidebarMenu>
              <SidebarMenuList />
              <SidebarMenuCollapse />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}