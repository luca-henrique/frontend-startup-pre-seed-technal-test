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

const data: ItemProps[] =
  [
    {
      title: "Cadastros",
      url: "#",
      icon: 'order-service-icon',
      isActive: true,
      items: [
        {
          title: "Ordem de serviço",
          url: "/cadastro/ordem-servico",
        },

      ],
    },
  ]


interface SubItemProps {
  title: string
  url: string
}

interface ItemProps {
  title: string
  url: string
  icon?: string
  isActive?: boolean
  items?: SubItemProps[]
}

import Link from "next/link"


export const SidebarMenuCollapse = () => {
  return (
    <SidebarMenu className="mt-24">
      {data.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title} asChild>
                <Link href={item.url} className="flex flex-row">
                  <Image src={`/icons/${item.icon}.svg`} alt="src" width={15} height={15} />
                  <span className="font-semibold text-sm text-[#414552]">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <Link href={subItem.url} replace>
                        <span className="font-semibold text-sm text-[#FF0000]">{subItem.title}</span>
                      </Link>
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

