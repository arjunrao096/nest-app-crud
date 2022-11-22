import { ApiProperty } from "@nestjs/swagger";

export class UserCreatedDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    age:number;

    @ApiProperty()
    degree: string;

    @ApiProperty()
    _id: string;

    @ApiProperty()
    __v: any;
}

export class SingleUserDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    age:number;

    @ApiProperty()
    degree: string;

    @ApiProperty()
    _id: string;
}

