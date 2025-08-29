import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle, Youtube, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ageGroup: '',
    interest: '',
    message: '',
    trialSession: false,
    newsletter: false,
    existingMember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled by API in production
    alert(t('contact.form.success'));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Location */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-secondary mb-6">EDESTORY Sports Academy</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{t('contact.info.address.title')}</p>
                    <p className="text-muted-foreground">{t('contact.info.address.value')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{t('contact.info.phone.title')}</p>
                    <p className="text-muted-foreground">{t('contact.info.phone.value')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{t('contact.info.email.title')}</p>
                    <p className="text-muted-foreground">{t('contact.info.email.value')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{t('contact.info.hours.title')}</p>
                    <div className="text-muted-foreground">
                      <p>{t('contact.info.hours.weekdays')}</p>
                      <p>{t('contact.info.hours.saturday')}</p>
                      <p>{t('contact.info.hours.sunday')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-secondary mb-6">{t('contact.departments.title')}</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">🥊 {t('contact.departments.training')}: training@edestory.com</p>
                <p className="text-muted-foreground">🛒 {t('contact.departments.shop')}: shop@edestory.com</p>
                <p className="text-muted-foreground">👶 {t('contact.departments.kids')}: kids@edestory.com</p>
                <p className="text-muted-foreground">🏆 {t('contact.departments.competitions')}: competitions@edestory.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-secondary mb-6">{t('contact.social.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('contact.social.subtitle')}</p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 bg-accent rounded-lg px-4 py-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">@edestory_academy</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent rounded-lg px-4 py-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">@edestory_news</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent rounded-lg px-4 py-2">
                  <Youtube className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">EDESTORY Sports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-secondary mb-6">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-secondary">
                    {t('contact.form.name')} *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-secondary">
                    {t('contact.form.email')} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-secondary">
                  {t('contact.form.phone')} *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                  placeholder={t('contact.form.phonePlaceholder')}
                  required
                  className="mt-1"
                />
              </div>

              {/* Age Group and Interest */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    {t('contact.form.ageGroup')}
                  </Label>
                  <Select value={formData.ageGroup} onValueChange={(value) => setFormData(prev => ({...prev, ageGroup: value}))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t('contact.form.ageGroupPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kids">{t('contact.form.ageGroups.kids')}</SelectItem>
                      <SelectItem value="teens">{t('contact.form.ageGroups.teens')}</SelectItem>
                      <SelectItem value="adults">{t('contact.form.ageGroups.adults')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-secondary">
                    {t('contact.form.interest')}
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => setFormData(prev => ({...prev, interest: value}))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t('contact.form.interestPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boxing">{t('contact.form.interests.boxing')}</SelectItem>
                      <SelectItem value="wrestling">{t('contact.form.interests.wrestling')}</SelectItem>
                      <SelectItem value="fitness">{t('contact.form.interests.fitness')}</SelectItem>
                      <SelectItem value="personal">{t('contact.form.interests.personal')}</SelectItem>
                      <SelectItem value="equipment">{t('contact.form.interests.equipment')}</SelectItem>
                      <SelectItem value="general">{t('contact.form.interests.general')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-secondary">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="mt-1 min-h-[100px]"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="trial"
                    checked={formData.trialSession}
                    onCheckedChange={(checked) => setFormData(prev => ({...prev, trialSession: checked as boolean}))}
                  />
                  <Label htmlFor="trial" className="text-sm text-muted-foreground cursor-pointer">
                    {t('contact.form.checkboxes.trial')}
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData(prev => ({...prev, newsletter: checked as boolean}))}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                    {t('contact.form.checkboxes.newsletter')}
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="existing"
                    checked={formData.existingMember}
                    onCheckedChange={(checked) => setFormData(prev => ({...prev, existingMember: checked as boolean}))}
                  />
                  <Label htmlFor="existing" className="text-sm text-muted-foreground cursor-pointer">
                    {t('contact.form.checkboxes.existing')}
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-semibold"
              >
                <Send className="mr-2 w-5 h-5" />
                {t('contact.form.submit')}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t('contact.form.privacy')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;