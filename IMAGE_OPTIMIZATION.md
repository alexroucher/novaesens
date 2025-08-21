# 🖼️ Guide d'optimisation des images pour PageSpeed Insights

## 📊 Problème actuel
PageSpeed Insights signale une sous-performance sur la durée de mise en cache des images.

## ✅ Solutions appliquées

### 1. **Cache optimisé dans .htaccess**
- **Images normales** : Cache de 1 mois (2 592 000 secondes)
- **Images versionnées** : Cache de 1 an (31 536 000 secondes)
- **CSS/JS** : Cache de 1 an
- **Fonts** : Cache de 1 an

### 2. **Configuration actuelle**
```apache
# Images - Cache long (1 mois)
ExpiresByType image/png "access plus 1 month"
ExpiresByType image/jpg "access plus 1 month"
ExpiresByType image/webp "access plus 1 month"
ExpiresByType image/avif "access plus 1 month"

# Images versionnées - Cache très long (1 an)
<FilesMatch "\.(png|jpg|jpeg|gif|webp|avif|svg|ico)-[a-zA-Z0-9]{8,}\.(png|jpg|jpeg|gif|webp|avif|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
```

## 🚀 Optimisations recommandées

### 1. **Conversion des formats**
- ✅ **AVIF** : Déjà utilisé (excellent !)
- ✅ **WebP** : Déjà utilisé (excellent !)
- 🔄 **PNG/JPG** → Convertir en AVIF/WebP quand possible

### 2. **Compression des images**
- Utilisez **TinyPNG** ou **Squoosh** pour compresser
- Ciblez une taille < 100KB pour les images principales
- Ciblez une taille < 20KB pour les icônes

### 3. **Noms de fichiers versionnés**
Pour un cache de 1 an, utilisez des noms avec hash :
```
expert-photo-a1b2c3d4.avif
novaesens-logo-e5f6g7h8.webp
```

### 4. **Images responsives**
Ajoutez des attributs `srcset` pour différentes tailles :
```html
<img src="/images/expert-photo.avif" 
     srcset="/images/expert-photo-small.avif 300w,
             /images/expert-photo-medium.avif 600w,
             /images/expert-photo.avif 900w"
     sizes="(max-width: 600px) 300px,
            (max-width: 900px) 600px,
            900px"
     alt="Expert CIR et CII">
```

## 📈 Impact attendu sur PageSpeed Insights

### Avant optimisation :
- ❌ Cache des images : 1 jour
- ❌ Score PageSpeed : Impact négatif

### Après optimisation :
- ✅ Cache des images : 1 mois à 1 an
- ✅ Score PageSpeed : Amélioration significative
- ✅ Temps de chargement : Réduction de 20-40%

## 🛠️ Outils recommandés

1. **Compression** : TinyPNG, Squoosh, ImageOptim
2. **Conversion** : cwebp (WebP), avifenc (AVIF)
3. **Optimisation** : Lighthouse, PageSpeed Insights
4. **Monitoring** : Google Analytics, GTmetrix

## 📋 Checklist d'optimisation

- [ ] Cache .htaccess mis à jour ✅
- [ ] Images converties en AVIF/WebP
- [ ] Images compressées
- [ ] Noms de fichiers versionnés (optionnel)
- [ ] Images responsives avec srcset
- [ ] Test PageSpeed Insights après déploiement

## 🎯 Prochaines étapes

1. **Déployer** la nouvelle configuration .htaccess
2. **Tester** PageSpeed Insights
3. **Optimiser** progressivement les images existantes
4. **Monitorer** les performances
