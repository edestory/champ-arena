import { Clock, MapPin, Users } from 'lucide-react';

const Schedule = () => {
  const scheduleData = [
    {
      time: "09:00-10:00",
      monday: { activity: "ОФП (4-6 лет)", location: "Зал №1", color: "bg-accent/10 text-accent" },
      wednesday: { activity: "ОФП (4-6 лет)", location: "Зал №1", color: "bg-accent/10 text-accent" },
      friday: { activity: "ОФП (4-6 лет)", location: "Зал №1", color: "bg-accent/10 text-accent" }
    },
    {
      time: "10:00-11:30",
      monday: { activity: "Футбол (7-10 лет)", location: "Поле", color: "bg-primary/10 text-primary" },
      wednesday: { activity: "Футбол (7-10 лет)", location: "Поле", color: "bg-primary/10 text-primary" },
      friday: { activity: "Футбол (7-10 лет)", location: "Поле", color: "bg-primary/10 text-primary" }
    },
    {
      time: "16:00-17:30",
      monday: { activity: "Баскетбол (11-14 лет)", location: "Зал №2", color: "bg-secondary/10 text-secondary" },
      wednesday: { activity: "Баскетбол (11-14 лет)", location: "Зал №2", color: "bg-secondary/10 text-secondary" },
      friday: { activity: "Баскетбол (11-14 лет)", location: "Зал №2", color: "bg-secondary/10 text-secondary" }
    },
    {
      time: "17:30-19:00",
      monday: { activity: "Теннис (индивидуально)", location: "Корт", color: "bg-accent/10 text-accent" },
      wednesday: { activity: "Теннис (индивидуально)", location: "Корт", color: "bg-accent/10 text-accent" },
      friday: { activity: "Теннис (индивидуально)", location: "Корт", color: "bg-accent/10 text-accent" }
    },
    {
      time: "19:00-20:30",
      monday: { activity: "Футбол (15-18 лет)", location: "Поле", color: "bg-primary/10 text-primary" },
      wednesday: { activity: "Футбол (15-18 лет)", location: "Поле", color: "bg-primary/10 text-primary" },
      friday: { activity: "Футбол (15-18 лет)", location: "Поле", color: "bg-primary/10 text-primary" }
    }
  ];

  const weekendSchedule = [
    { time: "10:00-12:00", activity: "Турниры и соревнования", type: "Футбол" },
    { time: "12:00-14:00", activity: "Товарищеские матчи", type: "Баскетбол" },
    { time: "14:00-16:00", activity: "Открытые тренировки", type: "Теннис" },
    { time: "16:00-18:00", activity: "Мастер-классы", type: "Все виды спорта" }
  ];

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Расписание <span className="text-gradient">занятий</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Удобное время для занятий в будние и выходные дни. 
            Все группы разделены по возрасту и уровню подготовки
          </p>
        </div>

        {/* Weekday Schedule */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Понедельник - Среда - Пятница
          </h3>
          
          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-3xl p-8 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Время</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Понедельник</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Среда</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Пятница</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((slot, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-surface/50 transition-smooth">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {slot.time}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {slot.monday && (
                          <div className={`p-3 rounded-xl ${slot.monday.color}`}>
                            <div className="font-semibold">{slot.monday.activity}</div>
                            <div className="text-sm flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {slot.monday.location}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {slot.wednesday && (
                          <div className={`p-3 rounded-xl ${slot.wednesday.color}`}>
                            <div className="font-semibold">{slot.wednesday.activity}</div>
                            <div className="text-sm flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {slot.wednesday.location}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {slot.friday && (
                          <div className={`p-3 rounded-xl ${slot.friday.color}`}>
                            <div className="font-semibold">{slot.friday.activity}</div>
                            <div className="text-sm flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {slot.friday.location}
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Schedule */}
          <div className="lg:hidden space-y-4">
            {scheduleData.map((slot, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  {slot.time}
                </div>
                
                <div className="space-y-3">
                  {slot.monday && (
                    <div className={`p-3 rounded-xl ${slot.monday.color}`}>
                      <div className="font-semibold">{slot.monday.activity}</div>
                      <div className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {slot.monday.location}
                      </div>
                      <div className="text-xs font-medium mt-1">ПН • СР • ПТ</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Schedule */}
        <div className="bg-surface rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Суббота - Воскресенье
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weekendSchedule.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-card transition-smooth card-hover animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                
                <div className="font-bold text-primary mb-2">{event.time}</div>
                <div className="font-semibold text-foreground mb-2">{event.activity}</div>
                <div className="text-sm text-muted-foreground">{event.type}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              В выходные дни проводятся турниры, соревнования и мастер-классы
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Футбол</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span>Баскетбол</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span>Теннис</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;