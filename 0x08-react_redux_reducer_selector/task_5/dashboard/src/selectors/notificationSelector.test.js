import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const state = {
    notifications: {
      filter: 'UNREAD',
      notifications: {
        '1': { id: '1', message: 'Message 1', isRead: false },
        '2': { id: '2', message: 'Message 2', isRead: true },
        '3': { id: '3', message: 'Message 3', isRead: false },
      },
    },
  };

  it('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('UNREAD');
  });

  it('getNotifications returns a list of the message entities within the reducer', () => {
    expect(getNotifications(state)).toEqual({
      '1': { id: '1', message: 'Message 1', isRead: false },
      '2': { id: '2', message: 'Message 2', isRead: true },
      '3': { id: '3', message: 'Message 3', isRead: false },
    });
  });

  it('getUnreadNotifications returns a list of the message entities within the reducer', () => {
    expect(getUnreadNotifications(state)).toEqual([
      { id: '1', message: 'Message 1', isRead: false },
      { id: '3', message: 'Message 3', isRead: false },
    ]);
  });
});
