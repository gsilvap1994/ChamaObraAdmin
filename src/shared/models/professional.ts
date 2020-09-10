
import { ListItem } from './list-item';

export class Professional extends ListItem {
  categories: string[];
  status: string;
  createdAt: {
    date: Date;
    label: 'Data de Registro';
  }

}
