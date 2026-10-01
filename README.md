# Dra. Arlett Fong Hirales

Sitio de la práctica de cirugía general y laparoscópica en Los Cabos. Dominio: arelttfong.com.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicar en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio `arelttfong`.
2. Framework: Next.js. No hace falta cambiar el comando de build.
3. En el proyecto, Settings → Domains, agrega `arelttfong.com` y `www.arelttfong.com`.

## DNS en GoDaddy

En el dominio `arelttfong.com`, DNS:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Quita otros registros A o CNAME que apunten el dominio raíz o `www` a parking de GoDaddy. La propagación puede tardar unas horas.

## Antes de anunciar el sitio

- Cédula de especialidad confirmada: 09146077.
- Confirmar si el WhatsApp de citas es el de Healthy Cabo, (624) 119 9241, o uno propio.
- Sustituir el bloque del retrato por una fotografía autorizada de la doctora.
- Revisar el aviso de privacidad con quien lleve el consultorio.
