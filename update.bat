@echo off
echo 🔍 Sincronizando personajes...
node sync.js
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Hubo un error al sincronizar. Revisa tus archivos.
    pause
    exit /b %ERRORLEVEL%
)

echo 🚀 Subiendo a la web (Netlify)...
netlify deploy --dir=. --prod

if %ERRORLEVEL% EQU 0 (
    echo ✅ ¡La web ha sido actualizada con éxito!
) else (
    echo ❌ Hubo un error al subir a Netlify.
)
pause
