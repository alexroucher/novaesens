# Configuration EmailJS pour le formulaire de contact

## Étape 1 : Créer un compte EmailJS

1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Connectez-vous à votre dashboard

## Étape 2 : Configurer votre service email

1. Dans votre dashboard EmailJS, cliquez sur "Add New Service"
2. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
3. Connectez votre compte email
4. Notez le **Service ID** qui s'affiche

## Étape 3 : Créer un template d'email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez votre template avec les variables suivantes :

```html
Nouveau message de contact depuis Novaesens

Nom : {{user_name}}
Email : {{user_email}}
Téléphone : {{user_phone}}
Société : {{user_company}}
Rôle : {{user_role}}

Message :
{{message}}
```

4. Sauvegardez le template et notez le **Template ID**

## Étape 4 : Récupérer votre Public Key

1. Dans votre dashboard EmailJS, allez dans "Account" > "API Keys"
2. Copiez votre **Public Key**

## Étape 5 : Configurer le projet

1. Ouvrez le fichier `src/config/emailjs.ts`
2. Remplacez les valeurs par vos vraies clés :

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'votre_public_key_ici',
  SERVICE_ID: 'votre_service_id_ici',
  TEMPLATE_ID: 'votre_template_id_ici'
};
```

## Test du formulaire

1. Lancez votre serveur de développement
2. Allez sur la page contact
3. Remplissez et envoyez le formulaire
4. Vérifiez que vous recevez bien l'email

## Fonctionnalités incluses

✅ **Validation des champs** : Tous les champs sont requis
✅ **État de chargement** : Le bouton affiche "Envoi en cours..."
✅ **Messages de feedback** : Succès/erreur avec styles
✅ **Réinitialisation** : Le formulaire se vide après envoi
✅ **Gestion d'erreur** : Affichage en cas d'échec
✅ **Types TypeScript** : Code typé et sécurisé

## Variables disponibles dans le template

- `{{user_name}}` : Prénom + Nom
- `{{user_email}}` : Adresse email
- `{{user_phone}}` : Numéro de téléphone
- `{{user_company}}` : Nom de la société
- `{{user_role}}` : Rôle dans l'entreprise
- `{{message}}` : Message de l'utilisateur 