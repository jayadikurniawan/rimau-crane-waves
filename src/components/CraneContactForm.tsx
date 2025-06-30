
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface CraneContactFormProps {
  craneName: string;
}

const CraneContactForm = ({ craneName }: CraneContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    craneType: craneName,
    phoneNumber: '',
    rentalDate: undefined as Date | undefined,
    rentalLocation: '',
    rentalPurpose: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
Dear PT Rimau Trisukses Perkasa,

I would like to inquire about crane rental services. Below are my details:

Name: ${formData.name}
Email: ${formData.email}
Crane Type: ${formData.craneType}
Phone Number: ${formData.phoneNumber}
Rental Date: ${formData.rentalDate ? format(formData.rentalDate, 'PPP') : 'Not specified'}
Rental Location: ${formData.rentalLocation}
Rental Purpose: ${formData.rentalPurpose}

Please contact me to discuss the rental details and pricing.

Best regards,
${formData.name}
    `.trim();

    const subject = `Crane Rental Inquiry - ${formData.craneType}`;
    const mailtoLink = `mailto:rimautrisuksesperkasa@gmail.com?cc=anita.gunawan@rimaugroup.com,fredy.palilingan@rimaugroup.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us - {craneName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="craneType">Crane Type</Label>
            <Select value={formData.craneType} onValueChange={(value) => setFormData({...formData, craneType: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="RIMAU STAR">RIMAU STAR</SelectItem>
                <SelectItem value="RIMAU PACIFIC">RIMAU PACIFIC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label>Rental Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.rentalDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.rentalDate ? format(formData.rentalDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.rentalDate}
                  onSelect={(date) => setFormData({...formData, rentalDate: date})}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label htmlFor="rentalLocation">Rental Location *</Label>
            <Input
              id="rentalLocation"
              value={formData.rentalLocation}
              onChange={(e) => setFormData({...formData, rentalLocation: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="rentalPurpose">Rental Purpose</Label>
            <Textarea
              id="rentalPurpose"
              value={formData.rentalPurpose}
              onChange={(e) => setFormData({...formData, rentalPurpose: e.target.value})}
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CraneContactForm;
