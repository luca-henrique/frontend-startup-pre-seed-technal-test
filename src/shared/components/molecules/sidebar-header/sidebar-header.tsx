import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

import {
  SidebarHeader as DefaultSidebarHeader,
} from "@/components/ui/sidebar"

export const SidebarHeader = () => {
  return (
    <DefaultSidebarHeader>
      <div className="flex flex-row">
        <Avatar className="w-5 h-5">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
        <Label className="ml-2 font-semibold text-sm text-[#414552]">Lucas Henrique</Label>
      </div>
    </DefaultSidebarHeader>
  )
}