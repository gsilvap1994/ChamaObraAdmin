import { ListItem } from './list-item';

export class Service extends ListItem {
  categories: string[];
  serviceId: string;
  createdAt: {
    date: Date;
    label: 'Data';
  }
}
