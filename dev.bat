@echo off
echo 🔍 Sincronizando personajes localmente...
node sync.js
echo.
echo 🌐 Iniciando servidor de vista previa...
echo.
echo 👉 La web estará disponible en: http://localhost:3000
echo.
npx -y serve . -l 3000
