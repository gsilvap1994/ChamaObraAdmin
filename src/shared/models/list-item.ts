export class ListItem {
  id: string;
  image: string; //src
  name: string;
  categories?: string[];
  status?: string;
  createdAt?: {
    date: Date;
    label: string;
  }
  serviceId?: string;
  actions?: string[]
}
