import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';

interface FeedbackCardProps {
  title: string;
  nameLabel: string;
  messageLabel: string;
  attendanceLabel: string;
  buttonText: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  title,
  nameLabel,
  messageLabel,
  attendanceLabel,
  buttonText,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-black text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            <span className="text-red-500">*</span>
            {nameLabel}
          </Label>
          <Input id="name" className="border-platinum bg-cultured" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            <span className="text-red-500">*</span>
            {messageLabel}
          </Label>
          <Textarea
            id="message"
            className="resize-none border-platinum bg-cultured"
            rows={4}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">
            <span className="text-red-500">*</span>
            {attendanceLabel}
          </Label>
          <RadioGroup defaultValue="yes" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="maybe" id="maybe" />
              <Label htmlFor="maybe">Maybe</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button variant="dark" size="lg" className="mx-auto rounded-2xl">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;