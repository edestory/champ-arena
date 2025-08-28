import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import winnersImage from '@/assets/winners-kids.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    email: '',
    sport: '',
    timePreference: [],
    message: ''
  });

  const handleTimePreferenceChange = (time: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      timePreference: checked 
        ? [...prev.timePreference, time]
        : prev.timePreference.filter(t => t !== time)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Запишитесь на <span className="text-gradient">бесплатное занятие</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для записи на пробную тренировку. 
            Первое занятие всегда бесплатно!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Child Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">
                  Информация о ребенке
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childName" className="text-sm font-medium text-foreground">
                      Имя ребенка *
                    </Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => setFormData(prev => ({...prev, childName: e.target.value}))}
                      placeholder="Введите имя"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="childAge" className="text-sm font-medium text-foreground">
                      Возраст ребенка *
                    </Label>
                    <Select value={formData.childAge} onValueChange={(value) => setFormData(prev => ({...prev, childAge: value}))}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Выберите возраст" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4-6">4-6 лет</SelectItem>
                        <SelectItem value="7-10">7-10 лет</SelectItem>
                        <SelectItem value="11-14">11-14 лет</SelectItem>
                        <SelectItem value="15-18">15-18 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Parent Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">
                  Контактная информация
                </h3>
                
                <div>
                  <Label htmlFor="parentName" className="text-sm font-medium text-foreground">
                    Имя родителя *
                  </Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => setFormData(prev => ({...prev, parentName: e.target.value}))}
                    placeholder="Ваше имя"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Sport Selection */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Выберите вид спорта *
                </Label>
                <Select value={formData.sport} onValueChange={(value) => setFormData(prev => ({...prev, sport: value}))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Какой спорт интересует?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="football">Футбол</SelectItem>
                    <SelectItem value="basketball">Баскетбол</SelectItem>
                    <SelectItem value="tennis">Теннис</SelectItem>
                    <SelectItem value="general">Общефизическая подготовка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Time Preferences */}
              <div>
                <Label className="text-sm font-medium text-foreground mb-3 block">
                  Удобное время для занятий
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {['Утром (09:00-12:00)', 'Днем (12:00-16:00)', 'Вечером (16:00-20:00)', 'Выходные'].map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <Checkbox 
                        id={time}
                        checked={formData.timePreference.includes(time)}
                        onCheckedChange={(checked) => handleTimePreferenceChange(time, checked as boolean)}
                      />
                      <Label htmlFor={time} className="text-sm text-muted-foreground cursor-pointer">
                        {time}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Дополнительная информация
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                  placeholder="Расскажите о целях, опыте ребенка или задайте вопросы..."
                  className="mt-1 min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full gradient-primary text-white hover:opacity-90 transition-smooth py-6 text-lg"
              >
                <Send className="mr-2 w-5 h-5" />
                Записаться бесплатно
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          {/* Right Side - Image and Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Happy Kids Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img 
                src={winnersImage} 
                alt="Счастливые дети с наградами"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Станьте частью нашей команды!</h3>
                <p className="text-white/90">Уже более 150 детей тренируются в нашей школе</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-surface rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Адрес</div>
                    <div className="text-muted-foreground">ул. Спортивная, 15</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@sportschool.ru</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 09:00-21:00<br />
                      Сб-Вс: 10:00-18:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;