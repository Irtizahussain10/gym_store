export interface machine {
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
