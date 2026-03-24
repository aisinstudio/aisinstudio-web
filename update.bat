@echo off
echo 🔍 Sincronizando personajes...
node sync.js
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Hubo un error al sincronizar. Revisa tus archivos.
    pause
    exit /b %ERRORLEVEL%
)

echo 📦 Preparando cambios para GitHub...
git add .
git commit -m "Auto-update: %date% %time%"

echo 🚀 Subiendo a GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo ✅ ¡La web ha sido actualizada en GitHub!
) else (
    echo ❌ Hubo un error al subir a GitHub. Verifica tu conexión o cuenta.
)
pause
