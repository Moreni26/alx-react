import { createSelector } from 'reselect';
 state = {
   notifications: {
     filter: 'ALL',
     notifications: {
       '1': { id: '1', message: 'Message 1', isRead: false },
       '2': { id: '2', message: 'Message 2', isRead: true },
       
     }
   }
 }

const notificationState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [notificationState],
  (notifications) => notifications.filter
);

export const getNotifications = createSelector(
  [notificationState],
  (notifications) => notifications.notifications
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => {
    return Object.values(notifications).filter(notification => !notification.isRead);
  }
);
