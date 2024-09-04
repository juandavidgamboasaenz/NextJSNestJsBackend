import { Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';


//Connection to prisma async await for async usage.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect()
  }
}
