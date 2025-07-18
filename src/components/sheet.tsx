import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "./ui/textarea"

type MySheetProps = {
  children: ReactNode
}

export function MySheet({ children }: MySheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Me contacter</SheetTitle>
          <SheetDescription>
            Merci pour votre message &apos;.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Votre adresse mail</Label>
            <Input id="sheet-demo-name" defaultValue="" type="email" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Votre message</Label>
            <Textarea placeholder="Type your message here." />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Envoyer</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
