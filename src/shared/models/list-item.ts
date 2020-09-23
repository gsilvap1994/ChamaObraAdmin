export class ListItem {
  id: string;
  image: string; //src
  name: string;
  url?: string;
  categories?: string[];
  status?: string;
  createdAt?: {
    date: Date;
    label: string;
  }
  serviceId?: string;
  actions?: string[]
}
