export interface gymItem {
  id: number;
  item: string;
  type: string;
  price: string;
  availability: string;
  company: string;
  image: string;
  material: string;
}

export interface Credentials {
  name?: string;
  email: string;
  password: string;
}

export interface loginProps {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export interface loginConstructor {
  email: string;
  password: string;
}

export interface commentProps {
  isLoggedIn: boolean;
  item: string;
}

export interface allComments {
  name: string;
  comment: string;
}

export interface commentState {
  myComment: string;
  allComments: allComments[];
  reloadComments: boolean;
}

export interface itemProps {
  data: gymItem;
  displayOrderForm: () => void;
  showOrderForm: boolean;
  hideOrderForm: () => void;
  isLoggedIn: boolean;
}

export interface orderProps {
  price: string;
  isLoggedIn: boolean;
  hideOrderForm: () => void;
}

export interface storeDisplayProps {
  data: gymItem[];
  type: string;
}
