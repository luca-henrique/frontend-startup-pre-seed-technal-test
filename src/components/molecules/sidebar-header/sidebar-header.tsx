import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

import {
  SidebarHeader as DefaultSidebarHeader,
} from "@/components/ui/sidebar"
import { useUserStore } from "@/store/user"

export const SidebarHeader = () => {

  const { avatar, name } = useUserStore()

  return (
    <DefaultSidebarHeader>
      <div className="flex flex-row">
        <Avatar className="w-5 h-5">
          <AvatarImage src={avatar} />
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
        <Label className="ml-2 font-semibold text-sm text-[#414552]">{name}</Label>
      </div>
    </DefaultSidebarHeader>
  )
}