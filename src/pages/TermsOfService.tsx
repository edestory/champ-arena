import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Условия предоставления услуг
          </h1>
          <p className="text-muted-foreground">
            Последнее обновление: 29 января 2025 г.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Принятие условий</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Используя услуги EDESTORY Sports Academy, вы соглашаетесь с данными условиями предоставления услуг. Если вы не согласны с какими-либо из этих условий, пожалуйста, не используйте наши услуги.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Описание услуг</h2>
            <p className="text-foreground leading-relaxed mb-4">
              EDESTORY Sports Academy предоставляет услуги по обучению боевым видам спорта, включая:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2">
              <li>Групповые и персональные тренировки по боксу</li>
              <li>Занятия борьбой различных стилей</li>
              <li>Детские и юношеские программы</li>
              <li>Фитнес-программы для взрослых</li>
              <li>Подготовку к соревнованиям</li>
              <li>Продажу спортивного оборудования</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Правила и требования</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Медицинские требования:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Обязательная медицинская справка о допуске к занятиям спортом</li>
                  <li>Уведомление о наличии хронических заболеваний или травм</li>
                  <li>Для несовершеннолетних - письменное согласие родителей/опекунов</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Поведение в зале:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Соблюдение правил безопасности и инструкций тренеров</li>
                  <li>Уважительное отношение к другим участникам</li>
                  <li>Соблюдение расписания и пунктуальность</li>
                  <li>Использование только исправного оборудования</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Платежи и отмены</h2>
            <ul className="list-disc list-inside text-foreground space-y-2">
              <li>Оплата производится согласно выбранному тарифному плану</li>
              <li>Отмена занятия должна быть произведена не менее чем за 12 часов</li>
              <li>Возврат средств возможен в соответствии с действующим законодательством</li>
              <li>Академия оставляет за собой право изменять цены с уведомлением за 30 дней</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Ответственность</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p className="text-foreground mb-4">
                <strong>ВАЖНО:</strong> Занятия боевыми видами спорта связаны с физическими нагрузками и потенциальным риском травм. Участвуя в тренировках, вы принимаете на себя эту ответственность.
              </p>
              <p className="text-foreground">
                Академия не несет ответственности за травмы, полученные в результате несоблюдения правил безопасности или при наличии противопоказаний к занятиям спортом.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Интеллектуальная собственность</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Все материалы, включая программы тренировок, методики и брендинг EDESTORY, являются интеллектуальной собственностью академии и защищены авторским правом.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Контактная информация</h2>
            <div className="bg-accent p-6 rounded-lg">
              <p className="text-foreground mb-2"><strong>EDESTORY Sports Academy</strong></p>
              <p className="text-foreground mb-2">Email: legal@edestory.com</p>
              <p className="text-foreground mb-2">Телефон: +7 (495) 123-45-67</p>
              <p className="text-foreground">Адрес: Спортивная улица, 25, Москва, 119270</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;