const navPaths = {
  home: '/',
  courses: '/courses',
  about: '/about',
  contact: '/contact',
  news: '/news',
  dynamicCourses: '/courses/[id]',
  getDynamicCourse: (id) => `/courses/${id}`
};

export default navPaths;
