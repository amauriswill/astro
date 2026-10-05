---
title: "Motion Design: Timing y Easing — Estándares Técnicos"
description: "Especificaciones milimétricas de curvas de desaceleración y duraciones por contexto para interfaces de alta respuesta."
pubDate: 2026-10-01
category: "Diseño UI/UX"
tags: ["Motion", "UI/UX", "CSS", "Micro-interacciones"]
status: "published"
featured: false
---

El movimiento en interfaces no es decoración estética; es retroalimentación física y orientación espacial. Cuando una animación tarda más de lo debido, el usuario siente que el software es lento aunque el motor detrás vuele.

## Micro-interacciones (80–150ms)

- **Hover states** (botones, enlaces): 100–120ms
- **Click feedback** (highlight, compresión): 80–100ms
- **Toggle switches**: 150ms
- **Checkbox / radio animations**: 100ms

Estas interacciones deben sentirse instantáneas. Duraciones mayores a 200ms se perciben inmediatamente como lag.

## Curvas de Easing recomendadas

- **Ease-Out (Deceleración):** Arranca rápido y frena suave. Es el default para cualquier elemento que entra a la pantalla.
  `cubic-bezier(0, 0, 0.2, 1)` (Material) o `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- **Ease-In (Aceleración):** Únicamente para elementos que abandonan la vista definitivamente.
