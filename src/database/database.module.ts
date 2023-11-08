import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [
      TypeOrmModule.forRootAsync({
         useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.getOrThrow('MYSQL_HOST'),
            port: configService.getOrThrow('MYSQL_PORT'),
            database: configService.getOrThrow('MYSQL_DATABASE'),
            username: configService.getOrThrow('MYSQL_USERNAME'),
            password: configService.getOrThrow('MYSQL_PASSWORD'),
            synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
            autoLoadEntities: true,
         }),
         inject: [ConfigService],
      }),
   ],
})
export class DatabaseModule {}
