// Configuration EmailJS
// Utilise les variables d'environnement ou les valeurs par défaut

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID
};

// Vérification de sécurité
if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
  throw new Error('❌ Configuration EmailJS manquante ! Vérifiez vos variables d\'environnement PUBLIC_EMAILJS_*');
}

// Instructions pour configurer EmailJS :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Ajoutez votre service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email avec les variables :
//    - {{user_name}} : Nom complet
//    - {{user_email}} : Email
//    - {{user_phone}} : Téléphone
//    - {{user_company}} : Société
//    - {{user_role}} : Rôle
//    - {{message}} : Message
// 4. Remplacez les valeurs ci-dessus par vos vraies clés 