#!/bin/bash
# Script de gestión de proyecto Next.js con PM2
# Guardar en la carpeta del proyecto y dar permisos: chmod +x start-next.sh

APP_NAME="torakode"
APP_CMD="npm start"
APP_PATH="$(pwd)"

case "$1" in
  start)
    echo "🚀 Iniciando $APP_NAME con PM2..."
    pm2 start npm --name "$APP_NAME" -- start --prefix "$APP_PATH"
    ;;
  stop)
    echo "⏹ Parando $APP_NAME..."
    pm2 stop "$APP_NAME"
    ;;
  restart)
    echo "🔄 Reiniciando $APP_NAME..."
    pm2 restart "$APP_NAME"
    ;;
  delete)
    echo "🗑 Eliminando $APP_NAME de PM2..."
    pm2 delete "$APP_NAME"
    ;;
  logs)
    echo "📜 Mostrando logs de $APP_NAME..."
    pm2 logs "$APP_NAME"
    ;;
  status)
    echo "📊 Estado de todas las apps PM2..."
    pm2 list
    ;;
  save)
    echo "💾 Guardando configuración PM2 para arranque automático..."
    pm2 save
    ;;
  startup)
    echo "⚙️ Configurando arranque automático con systemd..."
    pm2 startup systemd -u $USER --hp $HOME
    ;;
  update)
    echo "⬇️ Actualizando proyecto desde git..."
    git pull origin main || { echo "❌ Error al hacer git pull"; exit 1; }
    echo "📦 Instalando dependencias..."
    npm install --production || { echo "❌ Error en npm install"; exit 1; }
    echo "🏗 Construyendo la app..."
    npm run build || { echo "❌ Error en npm run build"; exit 1; }
    echo "🔄 Reiniciando app con PM2..."
    pm2 restart "$APP_NAME" || pm2 start npm --name "$APP_NAME" -- start --prefix "$APP_PATH"
    echo "✅ Update completado."
    ;;
  *)
    echo "Uso: $0 {start|stop|restart|delete|logs|status|save|startup}"
    ;;
esac
