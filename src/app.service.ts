import { Injectable } from '@nestjs/common';
import { Movie } from './crud/movie/movie.interface';

@Injectable()
export class AppService {
  private movie: Movie[] = [
    { id: 1, name: 'si doel', year: 2009 },
    { id: 2, name: 'si pitung', year: 1984 },
    { id: 3, name: 'si otong', year: 2010 },
  ];
  getMovie(): Movie[] {
    return this.movie;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
