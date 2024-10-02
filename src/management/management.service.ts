import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { Queues } from 'src/queues';
import { ManagementQueueJobs } from './management.consumer';

@Injectable()
export class ManagementService {
  constructor(
    @InjectQueue(Queues.Management) private readonly managementQueue: Queue,
  ) {}
  async test() {
    await this.managementQueue.add(ManagementQueueJobs.test, {});
  }
}
