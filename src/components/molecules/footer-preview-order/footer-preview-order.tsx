'use client'

import { useUserStore } from "@/store/user"
import Image from "next/image"

export const FooterPreviewOrder = () => {
  const { name, signatureImg } = useUserStore()
  return (
    <div className="flex flex-row justify-between items-end mt-[230px]">
      <Image src="/icons/gear.svg" width={84} height={84} alt="gear" />
      <div className="flex flex-col items-center">
        <Image src={signatureImg} width={173.4} height={80} alt="assinatura" className="border-b-2" />
        <h6 className="mt-2">{name}</h6>
        <h6>Mecânico Responsável</h6>
      </div>
    </div>
  )
}