import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Roles {
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

  @Column({ enum: Roles, default: Roles.USER }) // admin, user, etc.
  role: string;
}
