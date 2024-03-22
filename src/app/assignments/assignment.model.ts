export class Assignment {
  _id?: string;
  nom!: string;
  dateDeRendu!: Date;
  rendu!: boolean;
}

export class Eleve{
  _id!: string;
  nom!: string;
  photo!: string;
}