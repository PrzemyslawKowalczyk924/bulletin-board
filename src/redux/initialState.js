export const initialState = {
  user: {
    status: false,
    email: 'johndoe@example.com',
  },
  posts: {
    data: [
      {
        id: "0",
        text: "Post & New Message",
        source: "https://images.unsplash.com/photo-1619441688769-be34ecf157d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        intro: "This message is made by initialState.js component, and render fine. So I'm happy",
        title: "<strong>Duration:</strong> 11 days",
        iconCalendar: "calendar-alt",
        iconMoney: "money-bill-wave", 
        cost: 100,
        status: "draft",
        dateOfPublication: "07.03.1989",
        dateOfActualizaction: "03.05.2012",
      },
      {
        id: "1",
        text: "Post & New Message",
        source: "https://images.unsplash.com/photo-1619441688769-be34ecf157d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        intro: "This message is made by initialState.js component, and render fine. So I'm happy",
        title: "<strong>Duration:</strong> 11 days",
        iconCalendar: "calendar-alt",
        iconMoney: "money-bill-wave", 
        cost: 100,
        status: "draft",
        dateOfPublication: "07.03.1989",
        dateOfActualizaction: "03.05.2012",
      }
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
