export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type Results = Movie[];

export enum ResponseSuccess {
  True = 'True',
  False = 'False',
}

type SuccessResponse = {
  Response: ResponseSuccess.True;
  Search: Results;
  totalResults: string;
};

type ErrorResponse = { Response: ResponseSuccess.False; Error: string };

export type Response = SuccessResponse | ErrorResponse;
