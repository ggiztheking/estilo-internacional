# Estilo Internacional

Sitio existente: https://estilo-internacional.berrygenet64.chatgpt.site

## Paquetes

- Elige tu corte: $200 MXN.
- Corte y barba: $350 MXN.
- Corte Fresco: $280 MXN.
- VIP Diamante: $450 MXN.

La fidelidad y sus rutas de panel/API se retiraron por solicitud del negocio. Se conservan las migraciones y el almacenamiento existente para no eliminar registros; no hay rutas de lectura ni escritura disponibles para esa función.

## Comprobaciones

- `node node_modules/typescript/bin/tsc --noEmit`
- `node tests/artifact.mjs`: nombres, enlaces, imágenes y ausencia de rutas de fidelidad.
- Compilar con el helper build-site.mjs de Sites.

## Imágenes

public/img/hero.jpg, techo.jpg, vip.jpg, recepcion.jpg y bienvenido.jpg conservan las fotos reales originales. Bajo, medio, alto, taper, clásico y texturizado se generaron con la herramienta integrada de ImageGen como retratos realistas individuales de referencia. No son trabajos del negocio. Prompt común: adulto de perfil lateral/trasero, pelo oscuro, fondo neutro, luz difusa, corte anatómicamente preciso, sin logos ni texto. Cada prompt describe la altura de degradado o el tipo de corte correspondiente.

Los horarios confirmados son 9:30 AM a 11:00 PM; no se han afirmado días de apertura.
