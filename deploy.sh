#!/bin/bash
# Script de déploiement et tests pour le portfolio d'Élie
# Usage: bash deploy.sh

set -e

echo "=========================================="
echo "🚀 Portfolio Deployment Script"
echo "=========================================="

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============ VÉRIFICATIONS ============
echo -e "${BLUE}[1/5] Vérification des fichiers...${NC}"
required_files=("index.html" "style.css" "script.js" "README.md")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file MANQUANT"
        exit 1
    fi
done

# ============ VALIDATION HTML ============
echo -e "\n${BLUE}[2/5] Vérification HTML...${NC}"
if grep -q "<html" index.html; then
    echo -e "${GREEN}✓${NC} HTML structure valide"
else
    echo -e "${RED}✗${NC} HTML structure invalide"
    exit 1
fi

# ============ VALIDATION CSS ============
echo -e "\n${BLUE}[3/5] Vérification CSS...${NC}"
if grep -q "html {" style.css; then
    echo -e "${GREEN}✓${NC} CSS structure valide"
else
    echo -e "${RED}✗${NC} CSS structure invalide"
    exit 1
fi

# ============ VALIDATION JAVASCRIPT ============
echo -e "\n${BLUE}[4/5] Vérification JavaScript...${NC}"
if grep -q "document.addEventListener" script.js; then
    echo -e "${GREEN}✓${NC} JavaScript structure valide"
else
    echo -e "${YELLOW}⚠${NC} Pas d'event listeners détectés"
fi

# ============ STATISTIQUES ============
echo -e "\n${BLUE}[5/5] Statistiques des fichiers...${NC}"
echo -e "${YELLOW}HTML:${NC} $(wc -l < index.html) lignes"
echo -e "${YELLOW}CSS:${NC} $(wc -l < style.css) lignes"
echo -e "${YELLOW}JS:${NC} $(wc -l < script.js) lignes"
echo -e "${YELLOW}Size HTML:${NC} $(du -h index.html | cut -f1)"
echo -e "${YELLOW}Size CSS:${NC} $(du -h style.css | cut -f1)"
echo -e "${YELLOW}Size JS:${NC} $(du -h script.js | cut -f1)"

# ============ GIT ============
echo -e "\n${BLUE}Git Status:${NC}"
if command -v git &> /dev/null; then
    git status --short || true
    echo -e "${YELLOW}Tip:${NC} git add . && git commit -m 'Update' && git push"
else
    echo -e "${YELLOW}⚠${NC} Git not installed"
fi

# ============ SERVEUR LOCAL ============
echo -e "\n${BLUE}Servir localement:${NC}"
echo "python3 -m http.server 8000"
echo "Puis ouvrir: http://localhost:8000"

echo -e "\n${GREEN}=========================================="
echo "✨ Portfolio prêt pour déploiement!"
echo "==========================================${NC}"
