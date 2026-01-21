#!/bin/bash
# Script para guardar cambios en GitHub automáticamente

echo "🔄 Guardando cambios en GitHub..."

# Agregar todos los archivos
git add .

# Hacer commit con fecha actual
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Auto-save: $timestamp"

# Subir a la nube
echo "☁️ Subiendo a GitHub..."
git push origin main

echo "✅ ¡Listo! Avance guardado exitosamente."
