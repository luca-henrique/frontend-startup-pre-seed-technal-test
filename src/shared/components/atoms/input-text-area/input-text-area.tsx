import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TextareaHTMLAttributes } from "react"
import { Controller } from "react-hook-form"


interface TextInputAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  control: any
  name: string
}

export const TextInputArea = ({ label, name, control, ...props }: TextInputAreaProps) => {
  return (

    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <Label className="mb-1.5 text-sm text-[#414552]">{label}</Label>
          <Textarea {...props} {...field} />
        </div>
      )}
    />
  )
}