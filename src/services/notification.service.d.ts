import type { INotificationService } from '@/interfaces/services/INotificationService';

declare class NotificationService {
  notificationService: INotificationService;
  constructor(notificationService: INotificationService);
  success(msg: string): void;
  error(msg: string): void;
}
export declare const notificationService: NotificationService;
export {};
