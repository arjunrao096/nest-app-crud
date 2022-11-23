import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags ,ApiGoneResponse, ApiResponse} from '@nestjs/swagger';
import { User } from '../schemas/users.schema';
import { UsersService } from '../services/users.service';
import { SingleUserDto,UserCreatedDto } from '../schemas/userRes.dto';

@ApiTags('Users - CRUD')
@Controller('users')
export class UsersController {

    constructor(private service: UsersService){}
    
    @Post('create')
    @ApiOperation({summary: 'Create New User'})
    @ApiOkResponse({type: UserCreatedDto, description: 'User Created Response'})
    async createUser(@Body() data: User):Promise<UserCreatedDto>{
        return await this.service.createUser(data);
    }
    
    @Get()
    @ApiOperation({summary: 'Get All Users'})
    @ApiOkResponse({type: [SingleUserDto], description: 'All Users Fetched Response'})
    async getAllUsers():Promise<SingleUserDto[]>{
        return await this.service.getAllUsers();
    }

    @Get(':id')
    @ApiOperation({summary: 'Get Single User by ID'})
    @ApiOkResponse({type: SingleUserDto, description: 'Single User Fetched Response'})
    async getUser(@Param('id') id:string, @Body() data):Promise<any>{
        return await this.service.getUser(id);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete a User'})
    @ApiGoneResponse({type: SingleUserDto, description: 'Single User Deleted Response'})
    async deleteUser(@Param('id') id:string){
        return await this.service.deleteUser(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update a User By ID'})
    @ApiResponse({type: SingleUserDto, description: 'Single User Updated Response', status: 203})
    async updateUser(@Param('id') id:string, @Body() data:any){
        return await this.service.updateUser(id, data);
    }

}
