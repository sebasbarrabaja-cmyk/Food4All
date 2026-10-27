import { useTranslation } from 'react-i18next';

// Punto 4 del feedback del 27/10: preguntas frecuentes. Dueño: Juan Antonio.
// Las respuestas salen solo de lo ya decidido (skill food4all-contexto); nada inventado.
export default function Faq() {
  const { t } = useTranslation();
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="container">
        <p className="eyebrow">{t('faq.antetitulo')}</p>
        <h1>{t('faq.titulo')}</h1>
        <p className="lead">{t('faq.enConstruccion')}</p>
      </div>
    </section>
  );
}
