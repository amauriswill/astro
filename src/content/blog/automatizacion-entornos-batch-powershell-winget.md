---
title: "Automatización de entornos: Batch, PowerShell y Winget"
description: "Scripts reproducibles para configurar máquinas de desarrollo desde cero en minutos con WinGet y PowerShell."
pubDate: 2026-08-14
category: "DevOps & Tooling"
tags: ["PowerShell", "Batch", "Winget", "Windows", "Productividad"]
status: "published"
featured: false
---

Formatear o estrenar una máquina de trabajo solía costar un fin de semana entero buscando instaladores en páginas web dudosas y reiniciando el sistema cinco veces.

En Windows moderno, un enfoque declarativo respaldado por el gestor de paquetes oficial **WinGet** y scripts de PowerShell bien diseñados transforma este proceso en un comando desatendido de 10 minutos.

## 1. El manifiesto de herramientas esenciales

Definimos una lista limpia de identificadores de paquetes:

```powershell
$packages = @(
    "Git.Git",
    "Microsoft.VisualStudioCode",
    "Microsoft.VisualStudio.2022.Community",
    "LLVM.LLVM",
    "Kitware.CMake",
    "OpenJS.NodeJS.LTS",
    "Oven-sh.Bun",
    "Figma.Figma",
    "Spotify.Spotify"
)

foreach ($pkg in $packages) {
    Write-Host "Instalando: $pkg" -ForegroundColor Cyan
    winget install --id $pkg -e --silent --accept-package-agreements --accept-source-agreements
}
```

## 2. Variables de entorno y fuentes tipográficas

Un entorno de desarrollo para diseño y código requiere tipografías adecuadas con ligaduras (como JetBrains Mono o IBM Plex Mono). El script descarga los archivos `.ttf` y los inyecta en el registro de fuentes de Windows sin requerir clics manuales ni abrir el visor de fuentes.

La reproducibilidad te da tranquilidad mental: si algo falla o necesitas aislar un problema, levantar una instalación limpia no supone ninguna fricción.
