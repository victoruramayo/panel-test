import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Rol, User} from "./entities/User";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepo: Repository<User>,
    ) {}

    async findByUsername(username: string) {
        return this.usersRepo.findOne({ where: { username } });
    }

    async createUser(username: string, password: string, role = Rol.USER) {
        const user = this.usersRepo.create({ username, password, role });
        return this.usersRepo.save(user);
    }
}
