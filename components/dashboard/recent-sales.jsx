
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import axios from "axios"

import TranscriptComponent from "./trans";
import { auth } from "@/auth";

import { hacerSolicitud } from "@/lib/search.js"

  



 
export async function RecentSales() {
  const datos = await hacerSolicitud();



  const datosArray = Array.isArray(datos) ? datos : [datos];
  const session = await auth();

  if (!datosArray || datosArray.length === 0) {
    return <div className="flex justify-center items-center h-full">
    <p className="font-medium">No hay datos disponibles.</p>
  </div>
  }

  return (
    <div className="space-y-1.5">
      {datosArray.map((dato) => (
        <div className="flex items-center" key={dato._id}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={session?.user?.image ?? ''} alt="Avatar" />
            <AvatarFallback>{session?.user?.image ? 'Avatar' : 'Sin imagen'}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{dato.user ?? 'Usuario desconocido'}</p>
            <p className="text-sm text-muted-foreground">
              {dato.fecha ? new Date(dato.fecha).toLocaleString() : 'Fecha no disponible'}
            </p>
          </div>
          <a className="ml-auto font-medium hover:text-red-300" href={dato.url} target="_blank" rel="noopener noreferrer">
            Ver transcripción
          </a>
          <div className="ml-auto font-medium">Cerrado por: {dato.closedBy ?? 'Desconocido'}</div>
        </div>
      ))}
    </div>
    
  )
}