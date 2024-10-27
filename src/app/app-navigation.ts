export const navigation = [
    {
      text: 'Dashboard',
      path: '/dashboard',
      icon: 'fa-solid fa-gauge-high'
    },
    {
      text: 'Projects',
      icon: 'folder',
      items: [
        {
          text: 'Project List',
          path: '/project-managment/project-list'
        },
        {
          text: 'Add Project',
          path: '/project-managment/add-project'
        },
      ]
    }
  ];
  