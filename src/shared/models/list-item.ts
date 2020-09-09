export class ListItem {
  image: string; //src
  name: string;
  categories?: string[];
  status?: string;
  createdAt?: {
    date: Date;
    label?: string;
  }
  id?: string;
  actions?: string[]
}
