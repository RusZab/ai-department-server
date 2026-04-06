import{writeFileSync}from'fs';const c=Buffer.from(process.env.SERVER_CODE,'base64').toString();writeFileSync('/tmp/app.mjs',c);await import('/tmp/app.mjs');
