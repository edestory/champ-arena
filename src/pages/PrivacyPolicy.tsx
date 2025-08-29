import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-muted-foreground">
            Последнее обновление: 29 января 2025 г.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Общая информация</h2>
            <p className="text-foreground leading-relaxed mb-4">
              EDESTORY Sports Academy ("мы", "наш", "нас") уважает вашу конфиденциальность и обязуется защищать ваши персональные данные. Данная политика конфиденциальности объясняет, как мы собираем, используем и защищаем информацию о вас при использовании нашего веб-сайта и услуг.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Какую информацию мы собираем</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Персональная информация:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Имя и контактные данные (телефон, email, адрес)</li>
                  <li>Возраст и медицинская информация (для безопасности тренировок)</li>
                  <li>Предпочтения в тренировках и цели</li>
                  <li>Платежная информация (обрабатывается через защищенных провайдеров)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Техническая информация:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>IP-адрес и данные браузера</li>
                  <li>Файлы cookie и аналогичные технологии</li>
                  <li>Информация об использовании сайта</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Как мы используем вашу информацию</h2>
            <ul className="list-disc list-inside text-foreground space-y-2">
              <li>Предоставление тренировочных услуг и поддержка клиентов</li>
              <li>Обработка записей и платежей</li>
              <li>Отправка уведомлений о занятиях и важной информации</li>
              <li>Улучшение наших услуг и веб-сайта</li>
              <li>Соблюдение правовых обязательств</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Защита данных</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Мы применяем современные технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Ваши права</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Вы имеете право запросить доступ, исправление или удаление ваших персональных данных. Для реализации этих прав свяжитесь с нами по адресу: info@edestory.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Контактная информация</h2>
            <div className="bg-accent p-6 rounded-lg">
              <p className="text-foreground mb-2"><strong>EDESTORY Sports Academy</strong></p>
              <p className="text-foreground mb-2">Email: privacy@edestory.com</p>
              <p className="text-foreground mb-2">Телефон: +7 (495) 123-45-67</p>
              <p className="text-foreground">Адрес: Спортивная улица, 25, Москва, 119270</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;