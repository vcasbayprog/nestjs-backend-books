import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(bookDto: any): Promise<Book> {
    const newBook = new this.bookModel(bookDto);
    return newBook.save();
  }

  async update(id: string, bookDto: any): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, bookDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
