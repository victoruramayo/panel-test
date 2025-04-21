import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/sqlite.db', // este archivo se crea solo
      autoLoadEntities: true,
      synchronize: true, // útil en dev, crea tablas automáticamente
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
