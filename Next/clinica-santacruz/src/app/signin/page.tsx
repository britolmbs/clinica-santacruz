import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from '@/lib/auth'
import { AuthError } from "next-auth"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
 
const SIGNIN_ERROR_URL = "/error"
 
export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  return (
  <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login para Clinica Santa Cruz</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form  action={async (formData) => {
          "use server"
          try {
            await signIn("credentials", formData)
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
            }
            throw error
          }
        }}
      >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input name="password" id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <div>
        {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server"
            try {
              await signIn(provider.id, {
                redirectTo: props.searchParams?.callbackUrl ?? "",
              })
            } catch (error) {
             
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
              }
              throw error
            }
          }}
        >
            <Button type="submit" className="w-full">
          Acessar
        </Button>
        
        </form>
      ))}
       
      </div>
    </Card>
  )
}

  
