export const searchResultData = [
  {
    headerTitle: "Histories",
    id: 1,
    children: [
      {
        title: "How to hack NASA using CSS",
      },
      {
        title: "Kodinger.com",
      },
      {
        title: "#Stisla",
      },
    ],
  },
  {
    headerTitle: "Results",
    id: 2,
    children: [
      {
        img: "../../../assets/img/products/product-3-50.png",
        title: "oPhone S9 Limited Edition",
      },
      {
        img: "../../../assets/img/products/product-2-50.png",
        title: "Drone X2 New Gen-7",
      },
      {
        img: "../../../assets/img/products/product-1-50.png",
        title: "Headphone Blitz",
      },
    ],
  },
  {
    headerTitle: "Projects",
    id: 3,
    children: [
      {
        backCls: "bg-danger",
        title: "Stisla Admin Template",
        icode: "fas fa-code",
      },
      {
        backCls: "bg-primary",
        title: "Create a new Homepage Design",
        icode: "fas fa-laptop",
      },
    ],
  },
];

export const EnvelopData = {
  toggleName: "message-toggle",
  iconName: "far fa-envelope",
  headerLeft: "Messages",
  headerRight: "Mark All As Read",
  listClass: "dropdown-list-message",

  content: [
    {
      img: "../../../assets/img/avatar/avatar-1.png",
      title: "Kusnaedi",
      description: "Hello, Bro!",
      time: "10 Hours Ago",
      unreadClass: false,
      online: true,
    },
    {
      img: "../../../assets/img/avatar/avatar-2.png",
      title: "Dedik Sugiharto",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      time: "12 Hours Ago",
      unreadClass: true,
      online: false,
    },
    {
      img: "../../../assets/img/avatar/avatar-3.png",
      title: "Agung Ardiansyah",
      description:
        " Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      time: "12 Hours Ago",
      unreadClass: true,
      online: true,
    },
    {
      img: "../../../assets/img/avatar/avatar-4.png",
      title: "Ardian Rahardiansyah",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess",
      time: "16 Hours Ago",
      unreadClass: false,
      online: false,
    },
    {
      img: "../../../assets/img/avatar/avatar-5.png",
      title: "Alfa Zulkarnain",
      description: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      time: "Yesterday",
      unreadClass: false,
      online: false,
    },
  ],
  bottomMsg: "View All",
  bottomMsgCls: "fas fa-chevron-right",
};

export const NotifyData = {
  toggleName: "notification-toggle",
  iconName: "far fa-bell",
  headerLeft: "Messages",
  headerRight: "Mark All As Read",
  listClass: "dropdown-list-icons",

  content: [
    {
      iClassname: "fas fa-code",
      bgClass: "bg-primary",
      description: "Template update is available now!",
      textCls: "text-primary",
      time: "2 Min Ago",
      unreadClass: true,
    },
    {
      iClassname: "far fa-user",
      bgClass: "bg-info",
      description: "You and Dedik Sugiharto are now friends",
      time: "10 Hours Ago",
      unreadClass: false,
    },
    {
      iClassname: "fas fa-check",
      bgClass: "bg-success",
      description: "Kusnaedi has moved task Fix bug header to Done ",
      time: "12 Hours Ago",
      unreadClass: false,
    },
    {
      iClassname: "fas fa-exclamation-triangle",
      bgClass: "bg-danger",
      description: "Low disk space. Let's clean it!",
      time: "17 Hours Ago",
      unreadClass: false,
    },
    {
      iClassname: "fas fa-bell",
      bgClass: "bg-info",
      description: " Welcome to Stisla template!",
      time: "Yesterday",
      unreadClass: false,
    },
  ],
  bottomMsg: "View All",
  bottomMsgCls: "fas fa-chevron-right",
};

export const userDetail = {
  userName: "Ujang Maman",
  userImg: "../../../assets/img/avatar/avatar-1.png",
  logTime: "5 min",
  logoutIcon: "fas fa-sign-out-alt",
  logoutTitle: "Logout",

  datas: [
    {
      link: "/feature/profile",
      icode: "far fa-user",
      title: "Profile",
    },

    {
      link: "/feature/activities",
      icode: "fas fa-bolt",
      title: "Activities",
    },
    {
      link: "/feature/Settings",
      icode: "fas fa-cog",
      title: "Settings",
    },
  ],
};
