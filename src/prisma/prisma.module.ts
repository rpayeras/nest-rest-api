import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// We can make global modules to make it available to all modules
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
