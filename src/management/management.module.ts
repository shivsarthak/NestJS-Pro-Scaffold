import { Module } from '@nestjs/common';
import { ManagementConsumer } from './management.consumer';
import { ManagementService } from './management.service';
import { BullModule } from '@nestjs/bullmq';
import { Queues } from 'src/queues';

@Module({
  imports: [
    BullModule.registerQueue({
      name: Queues.Management,
    }),
  ],
  controllers: [],
  providers: [ManagementConsumer, ManagementService],
  exports: [ManagementConsumer],
})
export class ManagementModule {}
