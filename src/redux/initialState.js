export const initialState = {
  user: {
    status: false,
    email: 'johndoe@example.com',
  },
  posts: {
    data: [
      {
        id: '0',
        text: 'Into the wild',
        source: 'https://images.unsplash.com/photo-1618160458187-085fbe2064b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        intro: 'This message is made by initialState.js component, and render fine. So Im happy',
        title: '<strong>Published:</strong>',
        iconCalendar: 'calendar-alt',
        iconEdit: 'edit',
        iconMoney: 'money-bill-wave',
        iconStatus: 'spinner',
        iconEmail: 'envelope-square', 
        cost: 100,
        status: 'draft',
        dateOfPublication: '07.03.1989',
        dateOfActualizaction: '03.05.2012',
        email: 'trinity@example.com'
      },
      {
        id: '1',
        text: 'Camp at night',
        source: 'https://images.unsplash.com/photo-1619958405105-46316fdc0616?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        intro: 'This message is made by initialState.js component, and render fine. So Im happy',
        title: '<strong>Published:</strong> 11 days',
        iconCalendar: 'calendar-alt',
        iconEdit: 'edit',
        iconMoney: 'money-bill-wave',
        iconStatus: 'spinner', 
        cost: 200,
        status: 'published',
        dateOfPublication: '17.07.2009',
        dateOfActualizaction: '03.05.2012',
        email: 'neo@example.com'
      },
      {
        id: '2',
        text: 'Lonlines at canion',
        source: 'https://images.unsplash.com/photo-1619983403504-c22e32aedc6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        intro: 'This message is made by initialState.js component, and render fine. So Im happy',
        title: '<strong>Published:</strong> 11 days',
        iconCalendar: 'calendar-alt',
        iconEdit: 'edit',
        iconMoney: 'money-bill-wave',
        iconStatus: 'spinner', 
        cost: 50,
        status: 'published',
        dateOfPublication: '12.12.1999',
        dateOfActualizaction: '03.05.2012',
        email: 'christiano@example.com'
      },
      {
        id: '3',
        text: 'Harley Davidson',
        source: 'https://images.unsplash.com/photo-1619812485172-2ca1dc2cb15a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        intro: 'This message is made by initialState.js component, and render fine. So Im happy',
        title: '<strong>Published:</strong> 11 days',
        iconCalendar: 'calendar-alt',
        iconEdit: 'edit',
        iconMoney: 'money-bill-wave',
        iconStatus: 'spinner', 
        cost: 1000,
        status: 'closed',
        dateOfPublication: '17.10.2019',
        dateOfActualizaction: '03.05.2012',
        email: 'felix.doe@example.com'
      },
      {
        id: '4',
        text: 'Pure love',
        source: 'https://images.unsplash.com/photo-1619738756213-5abf56e67355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        intro: 'This message is made by initialState.js component, and render fine. So Im happy',
        title: '<strong>Published:</strong> 11 days',
        iconCalendar: 'calendar-alt',
        iconEdit: 'edit',
        iconMoney: 'money-bill-wave',
        iconStatus: 'spinner', 
        cost: 400,
        status: 'draft',
        dateOfPublication: '01.06.2021',
        dateOfActualizaction: '03.05.2012',
        email: 'johndoe@example.com'
      },
      {
        id: '5',
        text: 'Just merried',
        source: 'https://images.unsplash.com/photo-1619702710227-18b5536f16f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        intro: 'This message is made by initialState.js component, and render fine. So Im happy',
        title: '<strong>Published:</strong> 11 days',
        iconCalendar: 'calendar-alt',
        iconEdit: 'edit',
        iconMoney: 'money-bill-wave',
        iconStatus: 'spinner', 
        cost: 100,
        status: 'published',
        dateOfPublication: '25.04.2021',
        dateOfActualizaction: '03.05.2012',
        email: 'amanda.doe@example.com'
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
