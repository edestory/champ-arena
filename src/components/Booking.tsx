import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Check, CreditCard, MapPin, AlertCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookingStep {
  id: number;
  title: string;
  description: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
  spotsLeft?: number;
  price: string;
  className: string;
}

const Booking = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    experience: '',
    medicalConditions: '',
    emergencyContact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const bookingSteps: BookingStep[] = [
    {
      id: 1,
      title: 'Выбор программы',
      description: 'Выберите тип тренировки'
    },
    {
      id: 2,
      title: 'Дата и время',
      description: 'Выберите удобное время'
    },
    {
      id: 3,
      title: 'Контактная информация',
      description: 'Заполните данные'
    },
    {
      id: 4,
      title: 'Подтверждение',
      description: 'Проверьте детали записи'
    }
  ];

  const programs = [
    {
      id: 'group-boxing',
      name: 'Групповой бокс',
      description: 'Групповые занятия по боксу для всех уровней',
      price: '1,500₽',
      duration: '60 мин',
      maxParticipants: 12
    },
    {
      id: 'group-wrestling',
      name: 'Групповая борьба',
      description: 'Обучение технике борьбы в группе',
      price: '1,600₽',
      duration: '75 мин',
      maxParticipants: 10
    },
    {
      id: 'kids-programs',
      name: 'Детские программы',
      description: 'Безопасные занятия для детей 6-12 лет',
      price: '1,200₽',
      duration: '45 мин',
      maxParticipants: 10
    },
    {
      id: 'personal-training',
      name: 'Персональная тренировка',
      description: 'Индивидуальное занятие с тренером',
      price: '3,500₽',
      duration: '60 мин',
      maxParticipants: 1
    },
    {
      id: 'trial-session',
      name: 'Пробное занятие',
      description: 'Бесплатная первая тренировка',
      price: 'БЕСПЛАТНО',
      duration: '45 мин',
      maxParticipants: 1
    }
  ];

  // Генерация календаря на месяц
  const generateCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    const days = [];
    
    // Пустые дни в начале месяца
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isPast = date < today;
      const isToday = date.toDateString() === today.toDateString();
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      days.push({
        day,
        date: dateString,
        isPast,
        isToday,
        hasAvailableSlots: !isPast && Math.random() > 0.3 // Случайная доступность для демо
      });
    }
    
    return days;
  };

  const timeSlots: TimeSlot[] = [
    {
      time: '07:00-08:00',
      available: true,
      spotsLeft: 5,
      price: '1,500₽',
      className: 'Взрослый бокс'
    },
    {
      time: '09:00-10:00',
      available: true,
      spotsLeft: 8,
      price: '1,600₽',
      className: 'Основы борьбы'
    },
    {
      time: '16:00-17:00',
      available: true,
      spotsLeft: 3,
      price: '1,200₽',
      className: 'Детский бокс'
    },
    {
      time: '17:30-18:30',
      available: true,
      spotsLeft: 8,
      price: '1,500₽',
      className: 'Подростковый бокс'
    },
    {
      time: '19:00-20:00',
      available: false,
      price: '1,800₽',
      className: 'Взрослая борьба'
    }
  ];

  const handleNext = () => {
    if (currentStep < bookingSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Симуляция отправки данных
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setBookingConfirmed(true);
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return selectedProgram !== '';
      case 2:
        return selectedDate !== '' && selectedTimeSlot !== '';
      case 3:
        return formData.fullName && formData.phone && formData.email;
      default:
        return false;
    }
  };

  if (bookingConfirmed) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Запись подтверждена!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Мы отправили детали подтверждения на ваш email
            </p>
            
            <div className="bg-accent rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Что дальше:</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Приходите за 15 минут до начала занятия</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Возьмите с собой бутылку воды и полотенце</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>Наденьте удобную спортивную одежду</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span>Заполните форму согласия при прибытии</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Добавить в календарь
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Маршрут к залу
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Записаться на тренировку
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Забронируйте место онлайн
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {bookingSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center space-x-3 ${
                    currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep > step.id 
                        ? 'bg-primary text-white' 
                        : currentStep === step.id 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                    </div>
                    <div className="hidden sm:block">
                      <div className="font-semibold">{step.title}</div>
                      <div className="text-sm opacity-75">{step.description}</div>
                    </div>
                  </div>
                  {index < bookingSteps.length - 1 && (
                    <div className={`hidden sm:block w-16 h-0.5 ml-4 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            {/* Step 1: Program Selection */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Выберите тип программы
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      onClick={() => setSelectedProgram(program.id)}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedProgram === program.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary hover:bg-primary/5'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-secondary">
                          {program.name}
                        </h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {program.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {program.duration}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        <span>До {program.maxParticipants} участников</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Выберите дату и время
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Январь 2025</h4>
                    <div className="grid grid-cols-7 gap-2 mb-6">
                      {['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'].map(day => (
                        <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                          {day}
                        </div>
                      ))}
                      
                      {generateCalendar().map((day, index) => (
                        <div key={index} className="aspect-square">
                          {day && (
                            <button
                              onClick={() => !day.isPast && day.hasAvailableSlots && setSelectedDate(day.date)}
                              disabled={day.isPast || !day.hasAvailableSlots}
                              className={`w-full h-full rounded-lg text-sm font-medium transition-all ${
                                selectedDate === day.date
                                  ? 'bg-primary text-white'
                                  : day.isPast
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : !day.hasAvailableSlots
                                  ? 'text-gray-400 cursor-not-allowed'
                                  : day.isToday
                                  ? 'bg-primary/10 text-primary border border-primary'
                                  : 'hover:bg-primary/10 hover:text-primary'
                              }`}
                            >
                              {day.day}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Time Slots */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Доступное время {selectedDate && `на ${selectedDate}`}
                    </h4>
                    
                    {!selectedDate ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Clock className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p>Сначала выберите дату</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {timeSlots.map((slot, index) => (
                          <div
                            key={index}
                            onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                            className={`p-4 border rounded-xl cursor-pointer transition-all ${
                              selectedTimeSlot === slot.time
                                ? 'border-primary bg-primary/5'
                                : slot.available
                                ? 'border-gray-200 hover:border-primary hover:bg-primary/5'
                                : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">{slot.time}</div>
                                <div className="text-sm text-muted-foreground">
                                  {slot.className}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-primary">
                                  {slot.price}
                                </div>
                                {slot.available ? (
                                  slot.spotsLeft && (
                                    <div className="text-xs text-green-600">
                                      {slot.spotsLeft} мест свободно
                                    </div>
                                  )
                                ) : (
                                  <div className="text-xs text-red-600">
                                    Занято
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Контактная информация
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Полное имя *
                    </label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Введите ваше имя"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон *
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Возраст
                    </label>
                    <select
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Выберите возраст</option>
                      <option value="under-12">До 12 лет</option>
                      <option value="12-17">12-17 лет</option>
                      <option value="18+">18+ лет</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Уровень подготовки
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Выберите уровень</option>
                      <option value="beginner">Начинающий</option>
                      <option value="intermediate">Средний</option>
                      <option value="advanced">Продвинутый</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Экстренный контакт
                    </label>
                    <Input
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      placeholder="Контакт для экстренной связи"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Медицинские противопоказания
                    </label>
                    <Textarea
                      value={formData.medicalConditions}
                      onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}
                      placeholder="Укажите любые медицинские состояния или травмы"
                      rows={3}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Подтверждение записи
                </h3>
                
                <div className="bg-accent rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4">Детали бронирования:</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium">Программа:</span>
                          <p className="text-muted-foreground">
                            {programs.find(p => p.id === selectedProgram)?.name}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Дата:</span>
                          <p className="text-muted-foreground">{selectedDate}</p>
                        </div>
                        <div>
                          <span className="font-medium">Время:</span>
                          <p className="text-muted-foreground">{selectedTimeSlot}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium">Имя:</span>
                          <p className="text-muted-foreground">{formData.fullName}</p>
                        </div>
                        <div>
                          <span className="font-medium">Телефон:</span>
                          <p className="text-muted-foreground">{formData.phone}</p>
                        </div>
                        <div>
                          <span className="font-medium">Email:</span>
                          <p className="text-muted-foreground">{formData.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold">Итого:</span>
                      <span className="text-2xl font-bold text-primary">
                        {programs.find(p => p.id === selectedProgram)?.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-2">Важная информация:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Приходите за 15 минут до начала занятия</li>
                        <li>• Возьмите с собой воду и полотенце</li>
                        <li>• Наденьте удобную спортивную одежду</li>
                        <li>• При отмене менее чем за 24 часа взимается 50% стоимости</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h5 className="font-semibold mb-4">Способ оплаты:</h5>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="payment" value="online" defaultChecked className="text-primary" />
                      <CreditCard className="w-5 h-5" />
                      <span>Оплатить онлайн (карта)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="payment" value="academy" className="text-primary" />
                      <MapPin className="w-5 h-5" />
                      <span>Оплатить в академии</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Назад
              </Button>
              
              {currentStep === bookingSteps.length ? (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !isStepComplete(currentStep)}
                  className="bg-primary hover:bg-primary-hover text-white px-8"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Подтверждение...
                    </div>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Подтвердить запись
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete(currentStep)}
                  className="bg-primary hover:bg-primary-hover text-white"
                >
                  Далее
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;