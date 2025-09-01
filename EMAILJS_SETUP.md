# Configuration EmailJS - Guide de sécurité

## 🔐 Configuration sécurisée recommandée

### Option 1 : Variables d'environnement (Recommandé)

1. **Créez un fichier `.env` à la racine du projet :**
```bash
# Configuration EmailJS
EMAILJS_PUBLIC_KEY=votre_public_key_ici
EMAILJS_SERVICE_ID=votre_service_id_ici
EMAILJS_TEMPLATE_ID=votre_template_id_ici
```

2. **Ajoutez `.env` à votre `.gitignore` :**
```bash
echo ".env" >> .gitignore
```

3. **Pour la production (O2switch), configurez les variables d'environnement dans votre panneau d'hébergement.**

### Option 2 : Configuration directe (Développement uniquement)

Si vous n'utilisez pas de variables d'environnement, modifiez `src/config/emailjs.ts` :

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'votre_public_key_ici',
  SERVICE_ID: 'votre_service_id_ici',
  TEMPLATE_ID: 'votre_template_id_ici'
};
```

## 📧 Configuration EmailJS

### 1. Créer un compte EmailJS
- Allez sur https://www.emailjs.com/
- Créez un compte gratuit

### 2. Configurer un service email
- Ajoutez votre service email (Gmail, Outlook, etc.)
- Notez le **Service ID** généré

### 3. Créer un template d'email
- Créez un nouveau template
- Utilisez ces variables dans votre template :
  - `{{user_name}}` : Nom complet
  - `{{user_email}}` : Email
  - `{{user_phone}}` : Téléphone
  - `{{user_company}}` : Société
  - `{{user_role}}` : Rôle
  - `{{message}}` : Message
- Notez le **Template ID** généré

### 4. Récupérer votre Public Key
- Dans votre dashboard EmailJS, copiez votre **Public Key**

## 🚀 Déploiement

### Variables d'environnement sur O2switch
Contactez le support O2switch pour configurer les variables d'environnement :

**EmailJS :**
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`

**Google Analytics :**
- `GOOGLE_ANALYTICS_ID`

### Test du formulaire
1. Remplissez le formulaire de contact
2. Vérifiez que l'email est bien reçu
3. Vérifiez les logs dans la console du navigateur

## 🔒 Sécurité

- ⚠️ **Ne committez jamais vos vraies clés EmailJS dans Git**
- ✅ Utilisez toujours des variables d'environnement en production
- ✅ Limitez les permissions de votre service EmailJS
- ✅ Surveillez l'utilisation de votre compte EmailJS

## 🐛 Dépannage

### Erreur "EmailJS not initialized"
- Vérifiez que la Public Key est correcte
- Vérifiez que EmailJS est bien chargé

### Erreur "Service not found"
- Vérifiez le Service ID
- Vérifiez que le service est actif

### Erreur "Template not found"
- Vérifiez le Template ID
- Vérifiez que le template est publié 