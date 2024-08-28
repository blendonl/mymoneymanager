import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/feature/user/user.module';
import { VendorModule } from 'src/vendor/vendor.module';

@Module({
  imports: [UserModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
