import { CreateUserDto } from './dto/create-user-dto/create-user-dto';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor( private readonly UsersService) {}
    
    @Post()
    create(@Body() CreateUserDto: CreateUserDto){
        return this.UsersService.create(CreateUserDto);
    }

    @Get()
    findAll(){
        return this.UsersService.findAll();
    }

    @Get()
    findOne(@Param('id') id: string) {
        return this.UsersService.findOne(id);
    }
}
