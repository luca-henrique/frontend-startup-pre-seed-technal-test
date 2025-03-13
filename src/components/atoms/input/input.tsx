"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputHTMLAttributes } from "react"
import { Control, Controller, FieldValues } from "react-hook-form"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  control: any
  name: string;
}


export const TextInput = ({ label = "", name, control, ...props }: TextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <Label className="mb-1.5 text-sm text-[#414552]">{label}</Label>
          <Input {...props} {...field} />
        </div>
      )}
    />
  )
}