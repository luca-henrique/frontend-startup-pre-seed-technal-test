import { Checkbox as DefaultCheckBox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export const CheckBox = () => {

  return (
    <div className="flex flex-row items-center">
      <DefaultCheckBox className="mr-1.5 bg-[#FF0004]" />
      <Label>Enviar por e-mail ao salvar</Label>
    </div>
  )
}