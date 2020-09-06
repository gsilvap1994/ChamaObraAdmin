export class Message {
  author?: string;
  messageHour?: string; // ou Date
  messageHeader?: string;
  messageText: string;
  linkTo?: string;
  isSystem: boolean;
  type?: 'client' | 'professional';
}
