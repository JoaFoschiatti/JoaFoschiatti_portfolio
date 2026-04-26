# JoaFoschiatti Portfolio

Portfolio en Next.js (App Router + TypeScript) con página principal one-page y páginas de caso por proyecto.

## Deploy en Vercel

- **Dominio principal:** https://joafoschiatti.com
- **Dominio secundario:** https://www.joafoschiatti.com
- **Canonical:** https://joafoschiatti.com

### Pasos resumidos

1. Importar/conectar este repositorio en Vercel.
2. Ir a **Project Settings > Domains**.
3. Agregar `joafoschiatti.com`.
4. Agregar `www.joafoschiatti.com`.
5. Configurar `joafoschiatti.com` como dominio principal/canónico.
6. Configurar redirect de `www` hacia `joafoschiatti.com` desde Vercel (si el dashboard lo permite).
7. Copiar exactamente los DNS que muestre Vercel para el proyecto/dominio.
8. En Spaceship: **Advanced DNS Manager > DNS records > Custom records**.
9. Crear o actualizar los registros exactamente como los mostró Vercel.
10. Verificar HTTPS, sitemap, robots, metadata social y CTA de WhatsApp.

### Importante

- No hardcodear como única verdad registros DNS si no fueron obtenidos del dashboard/CLI de Vercel.
- Si Vercel muestra un CNAME con punto final (`.`), copiarlo exactamente como aparece.
- Si hay conflicto con registros existentes, reemplazar únicamente los que colisionen con `@` (apex) o `www`, sin borrar MX/TXT de email.

### DNS a configurar en Spaceship

> Esta tabla debe completarse con los valores **exactos** que devuelva Vercel para este proyecto.

| Host/Name | Type | Value | TTL (si aplica) | Acción |
|---|---|---|---|---|
| @ | (según Vercel) | (según Vercel) | (según Vercel) | crear o reemplazar si hay conflicto |
| www | (según Vercel) | (según Vercel) | (según Vercel) | crear o reemplazar si hay conflicto |

### Verificación final sugerida

- `https://joafoschiatti.com` responde con HTTPS válido.
- `https://www.joafoschiatti.com` redirige o resuelve de forma consistente a `https://joafoschiatti.com`.
- `https://joafoschiatti.com/robots.txt` y `https://joafoschiatti.com/sitemap.xml` accesibles.
- Metadata canonical/Open Graph/Twitter sin `localhost`, `127.0.0.1` ni `vercel.app` como URL canónica pública.
