import { ListItem } from './list-item';

export class ProfessionalValidation extends ListItem {
  categories: string[];
  createdAt: {
    date: Date;
    label: 'Data';
  }
}
