import { ListItem } from './list-item';

export class Service extends ListItem {
  categories: string[];
  id: string;
  createdAt: {
    date: Date;
    label: 'Data';
  }
}
