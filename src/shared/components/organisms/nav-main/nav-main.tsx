"use client"


import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import Image from "next/image"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: string
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                <a href={item.url} className="flex flex-row">
                  <Image src={`/icons/${item.icon}.svg`} alt="src" width={15} height={15} />
                  <span className="font-semibold text-sm text-[#414552]">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={item.url}>
                        <span className="font-semibold text-sm text-[#414552]">{subItem.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  )
}

