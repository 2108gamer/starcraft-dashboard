import { Metadata } from "next";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { CalendarDateRangePicker } from "../components/dashboard/date-range-picker";
import { MainNav } from "../components/dashboard/main-nav";
import { Overview } from "../components/dashboard/overview";
import { RecentSales } from "../components/dashboard/recent-sales";
import { Search } from "../components/dashboard/search";
import { SignIn } from "../components/dashboard/signIn";
import { auth } from "@/auth";
import { ModeToggle } from "@/components/ui/ModeToggle";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Pagina de tickets.",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session)
    return (
      <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <ModeToggle />
            <SignIn />
          </div>
        </div>
      </div>
      <div className="hidden md:grid place-items-center overflow-hidden" style={{ height: 'calc(100vh - 66px)' }}>
        <div className="space-y-4 ">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Dashboard
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <Card>
              <CardHeader className="flex items-center justify-center">
                <CardTitle>Debes iniciar sesion</CardTitle>
                <CardDescription>
                Para ver su panel, inicie sesión usando Discord.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
    );
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <ModeToggle />
              <SignIn />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Bienvenido {session.user?.name}</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Descargar</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Descripción general</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
              Analítica
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reportes
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notificaciones
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tickets Totales
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+200 atendidos</div>
                    <p className="text-xs text-muted-foreground">
                    +20,1% respecto al mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tickets cerrados
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+81</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% del mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tienda</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+0</div>
                    <p className="text-xs text-muted-foreground">
                      -1% del mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Activos ahora
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+0</div>
                    <p className="text-xs text-muted-foreground">
                      +201 desde la última hora
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Descripción general</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Tickets abiertos por ti</CardTitle>
                    <CardDescription>
                    Aqui veras todos tus tickets abiertos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
