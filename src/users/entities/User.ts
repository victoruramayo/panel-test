import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Rol {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ enum: Rol, default: Rol.USER }) // admin, user, etc.
  role: string;
}
