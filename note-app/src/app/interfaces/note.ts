export interface Note {
    content: string;
    date: Date;
    title: string;
    user: {
      _id: string;
      email: string;
    };
}
