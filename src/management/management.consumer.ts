import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Queues } from 'src/queues';

export const ManagementQueueJobs = {
  test: 'test',
};

@Processor(Queues.Management)
export class ManagementConsumer extends WorkerHost {
  process(job: Job<any, any, string>): Promise<any> {
    switch (job.name) {
      case ManagementQueueJobs.test: {
        return this.test();
      }
      default: {
        throw new Error('Unknown job name');
      }
    }
  }

  async test() {
    console.log('test');
  }
}
