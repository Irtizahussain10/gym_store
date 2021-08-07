export interface machine {
  id: number;
  item: string;
  type: string;
  price: string;
  availability: string;
  company: string;
  image: string;
}

export interface bench extends machine {}

export interface dumbbell extends machine {
  material: string;
}

export interface Credentials {
  name?: string;
  email: string;
  password: string;
}

export interface Props {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
