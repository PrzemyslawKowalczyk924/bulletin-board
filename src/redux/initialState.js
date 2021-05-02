export const initialState = {
  user: {
    isOnline: true,
    isOffline: false,
    email: 'johndoe@example.com',
  },
  posts: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};
