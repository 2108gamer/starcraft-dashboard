import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOut() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Cerrar sesion</Button>
      </form>
    </div>
  );
}
