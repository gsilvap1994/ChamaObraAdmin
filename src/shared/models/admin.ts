import { ListItem } from './list-item';

export class Admin extends ListItem {
  createdAt: {
    date: Date;
    label: 'Data';
  }
  actions: string[];
}
