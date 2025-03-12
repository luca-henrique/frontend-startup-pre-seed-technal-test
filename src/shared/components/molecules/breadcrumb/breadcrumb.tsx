'use client'


import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

import { usePathname } from 'next/navigation'

const labels: Record<string, string> = {
  cadastro: "Cadastros",
  "ordem-servico": "Ordem de Serviço",
}

export const BreadCrumb = () => {
  const pathname = usePathname()
  const paths = pathname.split("/").filter(Boolean) // Remove strings vazias

  // Mapeia os paths para nomes amigáveis
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`

    return {
      name: labels[path] || path, // Usa o nome amigável ou mantém o original
      href,
      isLast: index === paths.length - 1,
    }
  })

  console.log(breadcrumbs)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map(({ name, href, isLast }) => (
          <>
            <BreadcrumbItem key={href} className={`text-sm text-[#414552] ${isLast ? "font-semibold" : ""}`}>
              <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
            </BreadcrumbItem>
            {!isLast ? <BreadcrumbSeparator /> : null}
          </>

        ))}

      </BreadcrumbList>
    </Breadcrumb>
  )
}